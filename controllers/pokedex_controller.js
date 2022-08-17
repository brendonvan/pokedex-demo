// Configuration
const express = require('express');
const router = express.Router();


// Routers
router.get('/', (req, res) => {
    res.render('index.ejs');
})

module.exports = router;