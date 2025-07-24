const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/', upload.single('image'), (req, res) => {
    res.status(200).json({ imagePath: `/uploads/${req.file.filename}` });
});

module.exports = router;