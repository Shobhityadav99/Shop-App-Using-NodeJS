const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const MongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://shobhit:shobhit@cluster0.fqruj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('connected!')
            callback(client);
        })
        .catch(err => console.log(err));
};

module.exports = MongoConnect;
