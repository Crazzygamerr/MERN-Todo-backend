const router = require('express').Router();
dbconn = require('../db/conn');

router.get('/', (req, res) => {
    db = dbconn.getDb();
    db.collection('notes').find({}).toArray((err, docs) => {
        if(err) {
            return res.status(500).send();
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(docs, null, 4));
    });
});

module.exports = {
    router
};