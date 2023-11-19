// Require express and create a router object
// Route - allocate to have our http request at differenet file
// CRUD - create, read, update, delete


const express = require('express');
const router = express.Router();

// In-memory database for demonstration purposes
let db = [];

// Root route
router.get('/', function (req, res) {
    // Send a simple response to indicate the router is working
    res.send('Using router!');
});

// Route to get all employees
router.get('/employee', function (req, res) {
    // Send the entire database as the response
    res.send(db);
});

// Route to add a new employee
router.post('/add', function (req, res) {
    // Log the request body for debugging purposes
    console.log(req.body);
    // Add the request body to the database
    db.push(req.body);
    // Send a success message as the response
    res.send("Successfully added!");
});

// Route to update an existing employee
router.put('/update/:id', function (req, res) {
    // Log the ID for debugging purposes
    console.log(req.params.id);
    // Loop through the database
    for (let i = 0; i < db.length; i++) {
        // If the current item's ID matches the request ID
        if (db[i].id == req.params.id) {
            // Update the item's name and age
            db[i].name = req.body.name;
            db[i].age = req.body.age;
            // Send a success message as the response
            res.send("Successfully Updated!");
        }
    }
});

// Route to delete an existing employee
router.delete('/delete/:id', function (req, res) {
    // Log the ID for debugging purposes
    console.log(req.params.id);
    // Loop through the database
    for (let i = 0; i < db.length; i++) {
        // If the current item's ID matches the request ID
        if (db[i].id == req.params.id) {
            // Remove the item from the database
            db.splice(i, 1);
            // Send a success message as the response
            res.send("Successfully Deleted!");
        }
    }
    // db.pop(req.params.id);
});

// Export the router for use in other files
module.exports = router;