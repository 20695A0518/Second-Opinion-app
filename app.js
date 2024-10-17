const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes'); // Ensure this file exists and is correctly defined

const app = express();
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Second Opinion App API!');
});

// Authentication Routes (e.g., /api/auth/register)
app.use('/api/auth', authRoutes);

// Upload Routes (e.g., /api/uploads)
app.use('/api/uploads', uploadRoutes);

// Start the server and sync database
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Unable to sync database:', err));
