import express from 'express';
import person from '../models/person';

const router = express.Router();

// get a list of persons from db
router.get('/persons', function(req, res, next) {
    person.aggregate().near({
        geoNear:"Store",
        near:{type:"Point", coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       spherical:true,
       minDistance: 0,
       maxDistance: 1000000,
       distanceField:"dis"
     }).then(function(persons){
         res.send(persons);
     })
     .catch(next);
    })

// add a new person to db
router.post('/persons', function(req, res, next) {
/* const person = new person(req.body);
person.save(); */
person.create(req.body).then(function(person) {
    res.send(person);
})
.catch(next);
});

// update a person in db
router.put('/persons/:id', function(req, res, next) {
    person.findOneAndUpdate({_id: req.params.id}, req.body).then(function() {
        person.findOne({_id: req.params.id}).then(function(person) {
            res.send(person);
        });
    });});

// delete a person from db
router.delete('/persons/:id', function(req, res, next) {
    person.findOneAndDelete({_id: req.params.id}).then(function(person) {
        console.log(person);
        res.send(person);
    });
});

module.exports = router;