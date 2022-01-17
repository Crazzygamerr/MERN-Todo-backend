require('dotenv').config();

const express = require('express');
const app = express();

const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGO_DB_URI, {useNewUrlParser: true});

let collection;

app.get('/', (req, res) => {
    collection.find({}).toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(docs, null, 4));
    });
});

client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    collection = client.db('NodeTodo').collection('notes');
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});
