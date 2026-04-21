const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/newsAggregator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// API routes
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});