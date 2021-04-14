const express = require('express');
const router = express.Router();

// register
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// aunthenticate
router.post('/authentictae', (req, res, next) => {
    res.send('Auth');
});

// profile
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

// validate
router.get('/validate', (req, res, next) => {
    res.send('validate');
});
module.exports = router;