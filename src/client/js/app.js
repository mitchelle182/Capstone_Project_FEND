/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();
   
    
    let inputCity = document.getElementById('city').value;
    let inputCountry = document.getElementById('country').value;
    
    
    console.log ("input submitted");
    
      const response1 = await postLocation(inputCity, inputCountry);
    
      console.log(response1);
      //updateUI();
}


//send to geoNames data to backend 
const postLocation = async (city, country)=>{
  const data = {city, country};
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




//send to backend
const postWeather = async (city, country)=>{
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


//send to backend
const imageData = async (city, country)=>{

    const response = await fetch('http://localhost:8000/', {
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





// let inputDate = document.getElementById('tripDate').value;
// let currentDate = Date.now();  
// let daysLeft = currentDate - inputDate;
//    // let d = new Date();
//   // let newDate = d.getMonth()+1+ '.' + d.getDate()+'.'+ d.getFullYear();
// let weather = await (weatherData);
// /* Function to update UI*/
// const updateUI = () => {
   
//       document.getElementById('city').innerHTML = `Your upcoming trip to ${city}, ${country}`;
//       // document.getElementById('weather').innerHTML =`The ${weather} will be`;
//       // document.getElementById('countdown').innerHTML = ;

// };
       

 


export { performCallBack};

