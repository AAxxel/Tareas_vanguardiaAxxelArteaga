const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    importancia: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    encargado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);