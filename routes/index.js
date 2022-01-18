const router = require('express').Router();
const ObjectId = require('mongodb').ObjectId;
dbconn = require('../db/conn');
const Note = require('../models/note');

router.get('/', (req, res) => {
    Note.find()
        .then((notes) => {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(notes, null, 4));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Internal Server Error');
        });
});

router.post('/', (req, res) => {
    const note = new Note(req.body);
    note.save()
        .then((notes) => {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(notes, null, 4));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Internal Server Error');
        });
});

router.get('/:id', (req, res) => {
    Note.findOne(
        {
            _id: ObjectId(req.params.id)
        })
        .then((notes) => {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(notes, null, 4));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Internal Server Error');
        });
});

router.delete('/:id', (req, res) => {
    Note.deleteOne({
        _id: ObjectId(req.params.id)
        })
        .then((notes) => {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(notes, null, 4));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Internal Server Error');
        });
});

router.patch('/:id', (req, res) => {
    Note.updateOne(
        {
        _id: ObjectId(req.params.id)
        }, 
        req.body)
        .then((notes) => {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(notes, null, 4));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Internal Server Error');
        });
});

module.exports = {
    router
};