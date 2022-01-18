const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    }
}, {
    'collection': 'notes'
});

const note = mongoose.model('note', noteSchema);

module.exports = note;