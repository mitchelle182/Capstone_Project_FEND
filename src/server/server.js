const dotenv = require('dotenv');
dotenv.config();

const WbApiKey = process.env.WB_APIKEY;
const PbApiKey = process.env.PB_APIKEY;
const gnUser = process.env.GN_USERNAME;

const allAPIs = require('./allAPIrequests.js');

// Require Express to run server and routes
const express = require('express');


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


app.post('/', async (req,res) =>{
    const city = req.body.city;
    const country = req.body.country;
    const response = await allAPIs.geoNamesInfo(city, country, gnUser);
    const { name, countryName, lat, lng } = response.geoNames[0];
    const weatherResponse = await allAPIs.weatherbitInfo(city, WbApiKey);  
    const pixabayResponse =await allAPIs.pixabayInfo(city, PbApiKey);
    const { valid_date, weather, high_temp, low_temp }  = weatherResponse.weatherbit [0];
    const { tags, largeImageURL, type } =  pixabayResponse.pixabay[0];
   
    res.send({
        location: {
            name,
            countryName,
        },
        weather: {
            weather,
            high_temp,
            low_temp,
        },
        photo: {
            largeImageURL,
        }
    });
    
});


    
    


module.exports = app;


