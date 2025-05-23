const mongoose = require('mongoose');

// Verifica si el modelo ya está definido
const LibroModel = mongoose.models.Libro || 
  mongoose.model('Libro', new mongoose.Schema({
    titulo: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    año: {
      type: String,
      required: true
    },
    genero: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    }
  }));

module.exports = LibroModel;