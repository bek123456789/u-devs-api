const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const adminRoutes = require('./routes/adminRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const capabilityRoutes = require('./routes/capabilityRoutes');
const cardRoutes = require('./routes/cardRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// CORS Configuration (Allow all origins)
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies and other credentials
}));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

// Remove deprecated options
mongoose.set('strictQuery', true); // Recommended for modern Mongoose
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process if the database connection fails
    });

// API Routes
app.use('/api/admins', adminRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/capabilities', capabilityRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/clients', clientRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
