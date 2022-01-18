require('dotenv').config();

const mongoose = require('mongoose');

const initDb = () => {
    mongoose
    .connect(process.env.MONGO_DB_URI, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
};

module.exports = {
    initDb,
}