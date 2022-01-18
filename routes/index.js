const router = require('express').Router();
const ObjectId = require('mongodb').ObjectId;
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

router.post('/', (req, res) => {
    db = dbconn.getDb();
    db.collection('notes').insertOne(req.body, (err, result) => {
        if(err) {
            return res.status(500).send();
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(result, null, 4));
    }); 
});

router.get('/:id', (req, res) => {
    db = dbconn.getDb();
    db.collection('notes').findOne({_id: ObjectId(req.params.id)}, (err, result) => {
        if(err) {
            return res.status(500).send();
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
});

router.delete('/:id', (req, res) => {
    db = dbconn.getDb();
    db.collection('notes').deleteOne({ _id: ObjectId(req.params.id)}, (err, result) => {
        if(err) {
            return res.status(500).send();
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
});

router.patch('/:id', (req, res) => {
    db = dbconn.getDb();
    db.collection('notes').updateOne({ _id: ObjectId(req.params.id)}, {$set: req.body}, (err, result) => {
        if(err) {
            return res.status(500).send();
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
});

module.exports = {
    router
};