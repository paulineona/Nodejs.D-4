// Require express and create a router object
// Route - allocate to have our http request at differenet file
// CRUD - create, read, update, delete


const express = require('express');
const router = express.Router();

let db = []; // database

//localhost:3000/
router.get('/', function (req, res) {
    res.send('Using router!');
});

router.get('/employee', function (req, res) {
    res.send(db);
});
router.post('/add', function (req, res) {
    console.log(req.body);
    db.push(req.body);
    res.send("Successfully added!");
});

router.put('/update/:id', function (req, res) {
    console.log(req.params.id);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id == req.params.id) {
            db[i].name = req.body.name;
            db[i].age = req.body.age;

            res.send("Successfully Updated!");
        }
    }
});

router.delete('/delete/:id', function (req, res) {
    console.log(req.params.id);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id == req.params.id) {
            db.splice(i, 1);
            res.send("Successfully Deleted!");
        }
    }
    // db.pop(req.params.id);
});

module.exports = router;