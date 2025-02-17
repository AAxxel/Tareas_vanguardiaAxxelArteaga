const Tarea = require('../../domain/tarea.model.js');
const { validationResult } = require('express-validator');

exports.createTarea = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }

    try {
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.status(201).json(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

exports.getAllTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
};

exports.getTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
};

exports.updateTarea = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }

    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
};

exports.deleteTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json({ mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar tarea' });
    }
};