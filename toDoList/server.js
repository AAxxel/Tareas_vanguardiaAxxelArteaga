require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const conectDB = require('./src/infraestructure/database.js');
const router = require('./src/app/routers/router.js');

conectDB();

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`El servidor esta escuchando en http//localhost:${port}`)
})