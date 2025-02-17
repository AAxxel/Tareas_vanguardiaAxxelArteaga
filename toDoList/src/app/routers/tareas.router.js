const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareas.controller.js');
const { body } = require('express-validator');

router.post('/', [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('importancia').notEmpty().withMessage('La importancia es obligatoria'),
    body('estado').notEmpty().withMessage('El estado es obligatorio'),
    body('encargado').notEmpty().withMessage('El encargado es obligatorio')
], tareaController.createTarea);

router.get('/', tareaController.getAllTareas);
router.get('/:id', tareaController.getTareaById);

router.put('/:id', [
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    body('importancia').optional().notEmpty().withMessage('La importancia no puede estar vacía'),
    body('estado').optional().notEmpty().withMessage('El estado no puede estar vacío'),
    body('encargado').optional().notEmpty().withMessage('El encargado no puede estar vacío')
], tareaController.updateTarea);

router.delete('/:id', tareaController.deleteTarea);

module.exports = router;
