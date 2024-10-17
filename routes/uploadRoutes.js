// routes/uploadRoutes.js

const express = require('express');
const router = express.Router();

// Define your upload route
router.post('/', (req, res) => {
    // Handle file upload logic here
    res.send('File uploaded successfully');
});

module.exports = router;
