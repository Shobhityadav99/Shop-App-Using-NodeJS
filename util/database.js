const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://shobhit:shobhit@cluster0.fqruj.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => {
            console.log('connected!');
            _db = client.db;
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No Database found';
}

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
