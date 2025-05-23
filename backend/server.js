const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

// Configuración
app.use(cors());
app.use(express.json());

// Conexión a MongoDB usando variable de entorno
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bibliotecaPersonal';
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error de MongoDB:', err));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas API
const librosRouter = require('./routes/libros');
app.use('/api/libros', librosRouter);

// Todas las demás rutas van al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Iniciar servidor
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`🚀 Servidor: http://localhost:${PORT}`);
  console.log(`📚 API: http://localhost:${PORT}/api/libros`);
});