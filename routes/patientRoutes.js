// routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/uploadController');
const router = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
  },
});

// Initialize Multer
const upload = multer({ storage });

// File upload route
router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
// Add this in your existing patientRoutes.js
router.post('/request-review', (req, res) => {
    const { filePath, doctorId, patientId } = req.body;
  
    // Logic to send a review request (e.g., saving to DB, notifying doctor)
    res.status(200).json({ message: 'Review request sent successfully', filePath });
  });
  
