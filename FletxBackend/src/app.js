require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoutes = require('./presentation/routes/authRoutes');
const productoRoutes = require('./presentation/routes/productoRoutes');

const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FletxBackend API',
      version: '1.0.0',
      description: 'API de backend con Express, MySQL y JWT en arquitectura DDD',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Producto: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del producto',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del producto',
            },
            precio: {
              type: 'number',
              format: 'float',
              description: 'Precio del producto',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/presentation/routes/*.js'], // Archivos con anotaciones Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/auth', authRoutes);
app.use('/productos', productoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
});