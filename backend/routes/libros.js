const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

// GET todos los libros
router.get('/', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET un libro por ID
router.get('/:id', async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST crear nuevo libro
router.post('/', async (req, res) => {
  const libro = new Libro({
    titulo: req.body.titulo,
    autor: req.body.autor,
    año: req.body.año,
    genero: req.body.genero,
    estado: req.body.estado
  });

  try {
    const nuevoLibro = await libro.save();
    res.status(201).json(nuevoLibro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT actualizar libro
router.put('/:id', async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, {
      titulo: req.body.titulo,
      autor: req.body.autor,
      año: req.body.año,
      genero: req.body.genero,
      estado: req.body.estado
    }, { new: true });

    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE eliminar libro
router.delete('/:id', async (req, res) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Exporta el router
module.exports = router;