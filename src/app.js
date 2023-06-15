const fs = require('fs');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Load movie data from JSON file

// GET /movies/genre/:genre
app.get('/movies/genre/:genre', (req, res) => {
    
});
  
module.exports = app;
