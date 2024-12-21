const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv').config();

const connectDB = require('./config/db'); // Import the database connection function

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the Database
connectDB();

// Import Routes
const courseRoutes = require('./routes/courseRoutes');
const quizRoutes = require('./routes/quizRoutes');

// Routes Middleware
app.use('/api/courses', courseRoutes);
app.use('/api', quizRoutes); // Quiz routes need "/api" prefix to access quizzes

// Swagger Documentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Educational Platform API',
      version: '1.0.0',
      description: 'API for managing courses and quizzes in an educational platform.',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./routes/*.js'], // Path to your route files for Swagger documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
