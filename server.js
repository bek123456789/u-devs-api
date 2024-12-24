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
app.use(cors());

// MongoDB Connection
// MongoDB Connection
const MONGO_URI = "mongodb+srv://Bekzod:Bekzod2010@u-devs.qvr3m.mongodb.net/?retryWrites=true&w=majority&appName=u-devs";
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


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
