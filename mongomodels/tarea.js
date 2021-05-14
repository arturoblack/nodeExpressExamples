const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
    usuarioId: Number,
    tarea: String,
    estado: Boolean
}, { timestamps: true });

// Compile model from schema
const model = mongoose.model('TareaModel', TareaSchema );
module.exports = model;