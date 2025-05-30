const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configuración
app.use(cors({
  origin: 'http://172.23.235.80:5500',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    message: '¡API funcionando correctamente! 🚀',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

app.get('/status', (req, res) => {
    res.json({
        message: '¡API funcionando correctamente! 🚀',
        status: 'online',
        timestamp: new Date().toISOString(),
        endpoints: {
            libros: '/api/libros',
            status: '/status'
        },
        cors: {
            origin: 'http://172.23.235.80:5500'
        }
    });
});

// Conexión a MongoDB usando variable de entorno
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bibliotecaPersonal';
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error de MongoDB:', err));

// Rutas API
const librosRouter = require('./routes/libros');
app.use('/api/libros', librosRouter);

// Iniciar servidor
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`🚀 Servidor: http://localhost:${PORT}`);
  console.log(`📚 API: http://localhost:${PORT}/api/libros`);
});