const express = require('express');
const Model = require('../model/userModel');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Add reponse from user Router');
});
router.get('/getall', (req, res) => {
    res.send('Getall reponse from user Router');
});
router.get('/getbyid', (req, res) => {
    res.send('Getbyid reponse from user Router');
});
router.get('/update', (req, res) => {
    res.send('Update reponse from user Router');
});
router.get('/delete', (req, res) => {
    res.send('Delete reponse from user Router');
});

//getall
//getbyid
//update
//delete

module.exports = router;