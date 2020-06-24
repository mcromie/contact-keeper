const express = require('express');
const router = express.Router();
const { check, validationResults } = require('express-validator/check');

const User = require('../models/User');

// @route POST api/users
// @desc Register a user
// @access Public 
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    checked('password', 'Please enter a password with 6 or more characters').isLengeth({ min: 6})
], (req, res) => {
    const errors = validationResults(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('passed');
});

module.exports = router;