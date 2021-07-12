const mongoDb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
    constructor(username, email, cart, id) {
        this.name = username;
        this.email = email;
        this.cart = cart;
        this._id = id;
    }

    save() {
        const db = getDb();
        return db.collection('users')
            .inserOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
    }

    getCart() {
        const db = getDb();
        const productIds = this.cart.items.map(i => i.productId);
        return db
            .collection('products')
            .find({ _id: { $in: productIds } })
            .toArray()
            .then(products => {
                return products.map( p => {
                    return {...p,quantity: this.cart.items.find(i => {
                        return i.productId.toString() === p._id.toString();
                    }).quantity
                }
                })
            })
    }

    addToCart(product) {
        const cartProductIndex = this.cart.items.findIndex(cp => {
            return cp.productId.toString() === product._id.toString();
        });
        let newQuantity = 1;
        const updatedCartItems = [...this.cart.items];
        if (cartProductIndex >= 0) {
            newQuantity = this.cart.items[cartProductIndex].quantity + 1;
            updatedCartItems[cartProductIndex].quantity = newQuantity;
        } else {
            updatedCartItems.push({ productId: new mongoDb.ObjectId(product._id), quantity: newQuantity });
        }
        const updatedCart = { items: updatedCartItems };
        const db = getDb();
        return db.collection('users').updateOne(
            { _id: new mongoDb.ObjectId(this._id) },
            { $set: { cart: updatedCart } }
        )
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users')
            .find({ _id: new mongoDb.ObjectId(userId) })
            .next()
            .then(user => {
                console.log(user);
                return user;
            })
            .catch(err => console.log(err));
    }
}

module.exports = User;