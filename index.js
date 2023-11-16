const express = require('express'); // module express is imported and saved in the variable express
const app = express();  // create a new instance of an express - your own express app
const router = require('./router'); // import router.js file


app.use(express.json()); // parse the request body as JSON  and make it available on req.body property

app.use(router); // use the router in express

// //localhost:3000/
// app.get('/', function (req, res) { // get request to the root of the server or localhost:3000 - '/' is the root of the server or url of the
//     res.send('Hi! This is the welcome page!'); // send a response to the client and print Hello World in the web browser
// })

// //localhost:3000/welcome
// app.get('/welcome', function (req, res) { // get request to the root of the server or localhost:3000 - '/' is the root of the server or url of the
//     res.send('Welcome to Hello World'); // send a response to the client and print Hello World in the web browser
// })


// create a server that listens on port 3000 - app is listening on port 3000
app.listen(4242, () => {
    console.log('Express Server is running...');
});