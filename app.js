const express = require('express');
const app = express();
const port = 3000;

// Version of your application
const APP_VERSION = '1.4.0';

// Basic middleware for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Main route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
        version: APP_VERSION,
        timestamp: new Date().toISOString(),
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        version: APP_VERSION,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Version: ${APP_VERSION}`);
});
