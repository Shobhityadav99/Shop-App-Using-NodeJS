const mongoDb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
    constructor(username,email,cart,id) {
        this.name=username;
        this.email=email;
        this.cart=cart;
        this._id=id;
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

    addToCart(product) {
        // const cartProduct = this.cart.items.findIndex(cp => {
        //     return cp._id === product._id;
        // });
        const updatedCart = {items: [{productId: new mongoDb.ObjectId(product._id),quantity: 1}]};
        const db = getDb();
        return db.collection('users').updateOne(
            { _id: new mongoDb.ObjectId(this._id)},
            { $set: {cart: updatedCart}}
        )
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users')
        .find({_id: new mongoDb.ObjectId(userId)})
        .next()
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(err => console.log(err));
    }
}

module.exports = User;