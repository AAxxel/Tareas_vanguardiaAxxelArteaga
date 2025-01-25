const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Bienvenido a la pagina principal!'});
});

router.get('/about', (req, res) => {    
    res.json({message: 'Pagina sobre nosotros!'});
  });

  module.exports = router;