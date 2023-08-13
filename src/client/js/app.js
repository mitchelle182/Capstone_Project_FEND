/* Global Variables */

/* Base URLs */ 
const geoNames = 'http://api.geonames.org/search?';
const weatherbit = 'https://api.weatherbit.io/v2.0/history/daily';
const pixabay = "https://pixabay.com/api/";



const city = document.getElementById('city').value;
const country = document.getElementById('country').value;
const startDate = document.getElementById('tripDate').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+ '.' + d.getDate()+'.'+ d.getFullYear();


    
/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();

    date= newDate;
    //date countdown function(?)

    const response =  await geoNamesInfo(city, country);
    const response2 = await weatherbitInfo();
    const response3 = await pixabayInfo();
    
    // postData('/addNew',  {temp:data.main.temp, feelings:feelings, date:date});
    // retrieveData();
  
}

//call GeoNames
const geoNamesInfo = async (city, country) => {
    //call API
    const response = await fetch(`${geoNames}q=${city}&country=${country}&username=mitchelle82`);
    try {
        const data =await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
   
};
//call Weatherbit
const weatherbitInfo = async (city, country, WbApiKey) => {
    const response = await fetch(`${weatherbit}&city=${city}&country=${country}&start_date=${startDate}&key=${WbApiKey}`);
    try {
        const data =await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
};

//call Pixabay 
const pixabayInfo = async (city, country, PbApiKey) => {
    const response = await fetch(`${pixabay}?key=${PbApiKey}&q=${city}+${country}&image_type=photo&category=travel`);
    try {
        const data =await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
};



/* Function to POST data */
const postData = async ( url = '', data = {})=>{

    const response = await fetch('http://localhost:8000/', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};




/* Function to update UI*/ 
const retrieveData = async () => {
    const request = await fetch('/');
    try {
        const allData =  await request.json();
        console.log(allData);
        document.getElementById('imgLocation').innerHTML = allData.imgLocation;
        document.getElementById('city').innerHTML = 'My trip to' + allData.city;
        document.getElementById('weather').innerHTML = 'The weather will be' + allData.weather;
        document.getElementById('countdown').innerHTML = 'There are' + allData.countdown + 'day left';
    }
    catch(error) {
        console.log('error');
    }
};

