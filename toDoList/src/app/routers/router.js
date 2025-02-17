const express = require('express');
const router = express.Router();
const tareaRouter = require('./tareas.router.js');

router.use('/tareas', tareaRouter);

module.exports = router;