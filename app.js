const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const bodyParser = require('body-parser');
const app = express();

const config = require('./config');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Marketpalce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  // MongoDB connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(bodyParser.json());


// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});
// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});