const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard', {
        name: req.user.name
    }
));

// Page 1
router.get('/page1', ensureAuthenticated, (req, res) => {
    res.render('page1', {
        name: req.user.name
    });
});

// Page 2
router.get('/page2', ensureAuthenticated, (req, res) => {
    res.render('page2', {
        name: req.user.name
    });
});

// Page 3
router.get('/page3', ensureAuthenticated, (req, res) => {
    res.render('page3', {
        name: req.user.name
    });
});

module.exports = router;