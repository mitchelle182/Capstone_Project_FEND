

/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();
    let inputCity = document.getElementById('city').value;
    let inputDate = document.getElementById('date').value;
   
    console.log ("input submitted");
    
    const response = await postLocation(inputCity, inputDate);
    console.log(response);
    let image = document.querySelector('img');
    let cityName = response.location.name;
    let countryName = response.location.countryName;
    let weather = response.weather.high_temp;
    let weatherDesc = response.weather.weather.description;
    const src = response.photo.largeImageURL; 
    console.log(src);
    console.log(image);
    document.getElementById('imgLocation').src = src;
    document.getElementById('location').innerHTML = `You have an upcoming trip to ` + `${cityName}, ${countryName}!`;
    document.getElementById('weather').innerHTML = `It is currently ` + `${weather} degrees Celsius, with ${weatherDesc} at your destination.` ;
    document.getElementById('tripDate').innerHTML = `You will be leaving on ` + inputDate;

}


//send geoNames data to backend to get back the data
const postLocation = async (city)=>{
  const data = {city};
  const response = await fetch('http://localhost:8000/', {
  method: 'POST', 
  
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




//send to weatherbit data to backend
const postWeather = async (city, date)=>{
    const data = {city, date}
    const response = await fetch('http://localhost:8000/', {
    method: 'POST', 
  
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


//send to pixabay data to backend
const postImage = async (city, country)=>{
    const data = {city, country}
    const response = await fetch('http://localhost:8000/', {
    method: 'POST', 
  
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




export { performCallBack};


// let currentDate = Date.now();  
// let daysLeft = currentDate - inputDate;
//    


       

 




