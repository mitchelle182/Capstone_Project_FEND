

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+ '.' + d.getDate()+'.'+ d.getFullYear();

let inputCity = document.getElementById('city').value;
let inputCountry = document.getElementById('country').value;
const inputDate = document.getElementById('tripDate').value;

/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();
   
    console.log (`${inputCity}, ${inputCountry} leaving on ${inputDate}` );
    
    //updateUI();
}







const countdown = () => {
    const currentDate = Date.now();
    const timeLeft =currentDate - inputDate;
    return timeLeft;
    
    
};



const weatherData = async (latitude, longitude)=>{

    const response = await fetch('http://localhost:8000/weather', {
    method: 'POST', 
  
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({latitude: latitude, longitude: longitude}), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

const imageData = async (city, country)=>{

    const response = await fetch('http://localhost:8000/image', {
    method: 'POST', 
  
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({city:city, country:country}), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData.hits[0].largeImageURL;
    }catch(error) {
    console.log("error", error);
    }
};

const locationData = async (city, country)=>{

    const response = await fetch('http://localhost:8000/location', {
    method: 'POST', 
  
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({city:city, country:country}), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};


/* Function to update UI*/
const updateUI = () => {
    document.getElementById('imgLocation').appendChild('img');
    document.getElementById('city').innerHTML = `My trip to ${city}, ${country}`;
    document.getElementById('weather').innerHTML = `The weather will be' + ${weather}`;
    document.getElementById('countdown').innerHTML = `There are ${countdown} days left till your trip!`;
};
       

const clearButton = () => {
    city.remove(); //This is deleting input field, not the text, which is not what I want it to do

}   


export { performCallBack};
export { updateUI };
export { clearButton };