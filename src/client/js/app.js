/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();
   
    
    let inputCity = document.getElementById('city').value;
    let inputDate = document.getElementById('date').value;
    
    
    console.log ("input submitted");
    
      const response1 = await postLocation(inputCity);
      const response2 = await postWeather(inputDate);
      const response3 = await postImage(inputCity);
      console.log(response1, response2, response3);
      //updateUI();
}


//send to geoNames data to backend 
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




//send to backend
const postWeather = async (city, date)=>{
    
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
const postImage = async (city, country)=>{

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



export { performCallBack};


// let currentDate = Date.now();  
// let daysLeft = currentDate - inputDate;
//    // let d = new Date();
//   // let newDate = d.getMonth()+1+ '.' + d.getDate()+'.'+ d.getFullYear();

// /* Function to update UI*/
// const updateUI = () => {
   
//       document.getElementById('city').innerHTML = `Your upcoming trip to ${city}, ${country}`;
//       // document.getElementById('weather').innerHTML =`The ${weather} will be`;
//       // document.getElementById('countdown').innerHTML = ;

// };
       

 




