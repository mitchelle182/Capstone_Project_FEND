// Require Express to run server and routes
const express = require('express');

// Personal API Keys for weatherbit and Pixabay
const WbApiKey ='&key=e545dbbb08c84d41b6b60d8ceec06556';
const PbApiKey ='38799204-4c6e25673848de4b78a4e6f26';

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Setup Server
port = 8000;
app.listen(8000, function (){
    console.log('Server running on port 8000!');
});



//TODO routes
app.get('/', function (req, res){
    res.send('src/server/server.js');
});


app.post('/',  function (req, res){

});


//app.get('/all', getData);
//function getData (req, res) {
//     res.send(projectData);
//     console.log(projectData);
// }


//app.post('/addNew', addNew);

// function addNew (req, res) {
//     projectData['temp'] = req.body.temp;
//     projectData['date'] = req.body.date;
//     projectData['feelings'] = req.body.feelings;
   
//     res.send(projectData);
//     console.log(projectData);
// }


