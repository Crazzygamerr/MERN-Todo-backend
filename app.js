const express = require('express');
const app = express();
const router = require('./routes/index');

const db = require('./db/conn');

app.use(express.json());

app.use('/', router.router);

db.initDb();

app.listen(3000, () => {
        console.log('Listening on port 3000');
});