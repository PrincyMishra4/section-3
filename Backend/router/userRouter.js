const express = require('express');
const Model = require('../model/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('Add reponse from user Router');
    
    new Model(req.body).save()
    .then((result) => {

        setTimeout(() => {
        res.json(result);
        }, 3000);

    }).catch((err) => {
       console.error(err); 
       res.json(err);
    });
});

router.get('/getall', (req, res) => {
    

    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.error(err); 
       res.status(500).json(err); 
        
   });
});

// : denotes a url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    
        Model.findOne( {email: req.params.email} )
        .then((result) => {
            res.json(result);
        }).catch((err) => {
           console.error(err); 
           res.status(500).json(err); 
        });
    });

    router.get('/getbylocation/:location', (req, res) => {
        console.log(req.params.location);
        
        Model.find({location : req.params.location})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    });
    

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.error(err); 
       res.status(500).json(err); 
    });
});


router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id,req.body, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.error(err); 
       res.status(500).json(err); 
    });
});
router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.error(err); 
       res.status(500).json(err); 
    });

});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message : 'Invalid Credentials'});
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})


//postmodel

module.exports = router;