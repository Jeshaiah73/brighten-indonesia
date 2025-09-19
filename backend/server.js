require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CV. Brighten Indonesia API' });
});

// Auth Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Product Routes
app.use('/api/products', require('./routes/productRoutes'));

// Client Routes
app.use('/api/clients', require('./routes/clientRoutes'));

// Quote Routes
app.use('/api/quotes', require('./routes/quoteRoutes'));

// Contact Routes
app.use('/api/contacts', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));