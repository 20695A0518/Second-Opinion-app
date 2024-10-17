// controllers/uploadController.js
const fs = require('fs');
const path = require('path');

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // You can save the file information to the database if needed
  res.status(200).json({ message: 'File uploaded successfully', filePath: req.file.path });
};

module.exports = { uploadFile };
