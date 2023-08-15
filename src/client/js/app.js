

/* Function called by event listener */
async function performCallBack(event){
    event.preventDefault();
    let inputCity = document.getElementById('city').value;
    let inputDate = document.getElementById('date').value;
    console.log ("input submitted");
    
    postLocation(inputCity);
    postWeather (inputCity, inputDate);
    postImage(inputCity);
    updateUI();
}


//send geoNames data to backend 
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
// /* Function to update UI*/
const updateUI = async () => {
  const request = await fetch('/');
  try {
      const allData =  await request.json();
      console.log(allData);
      document.getElementById('location').innerHTML = allData.location;
      document.getElementById('tripDate').innerHTML = allData.tripDate;
      document.getElementById('weather').innerHTML = allData.weather;
      document.getElementById('imgLocation').innerHTML = allData.imgLocation;
  }
  catch(error) {
      console.log('error');
  }
};


export { performCallBack};


// let currentDate = Date.now();  
// let daysLeft = currentDate - inputDate;
//    // let d = new Date();
//   // let newDate = d.getMonth()+1+ '.' + d.getDate()+'.'+ d.getFullYear();


       

 




