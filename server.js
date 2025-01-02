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


app.use(bodyParser.json());

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));


const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";


mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });


app.use('/api/admins', adminRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/capabilities', capabilityRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/clients', clientRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
