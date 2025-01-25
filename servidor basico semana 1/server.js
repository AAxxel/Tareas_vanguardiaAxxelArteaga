const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const app = express();

app.use('/', routes);

  app.use((req, res) => {
    res.status(404).send('Pagina no encontrada');
  });

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});

