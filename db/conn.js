require('dotenv').config();

const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGO_DB_URI, {useNewUrlParser: true});

let db;

const initDb = () => {
    client.connect((err) => {
        if (err) {
            console.log(err);
            return err;
        }
        db = client.db('NodeTodo');
        return;
    })
};

module.exports = {
    initDb,
    getDb: () => db
}