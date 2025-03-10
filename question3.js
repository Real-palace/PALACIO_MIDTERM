// Import the Express module
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number for the server
const PORT = 3000;

// Define the root route ('/') that responds with a simple text message
app.get('/', (req, res) => {
    res.send('Express is working! Real Jhon S. Palacio');
});

// Define the '/test' route that responds with a JSON message
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Real Jhon S. Palacio' });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
