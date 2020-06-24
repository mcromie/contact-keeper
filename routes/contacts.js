const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResults } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
   try {
       const contacts = await Contact.find({ user: req.user.id}).sort({ date: -1});
       res.json(contacts)
   } catch (error) {
       console.error(error.message);
       res.status(500).send('Server error');
       
   }
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route PUT api/contacts/:id
// @desc Update a contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update a contact');
});

// @route DELETE api/contacts/:id
// @desc Delete a contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete a contact');
});

module.exports = router;