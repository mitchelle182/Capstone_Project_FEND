const geoNames = 'http://api.geonames.org/searchJSON?';
const weatherbit = 'https://api.weatherbit.io/v2.0/forecast/daily';
const pixabay = "https://pixabay.com/api/";

//call GeoNames
const geoNamesInfo = async (city, country, gnUser) => {
    
    const response = await fetch(`${geoNames}q=${city}&username=${gnUser}`);
    
    try {
        const data =await response.json();
  
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
   
};
//call Weatherbit
const weatherbitInfo = async (city, WbApiKey) => {
    const response = await fetch(`${weatherbit}key=${WbApiKey}&lat=${lat}&lon=${lng}`);
    try {
        const data =await response.json();
   
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
};

//call Pixabay 
const pixabayInfo = async (city, PbApiKey) => {
    const response = await fetch(`${pixabay}?key=${PbApiKey}&q=${city}+&image_type=photo&category=travel`);
    try {
        const data =await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
};

module.exports = {
    geoNamesInfo, 
    weatherbitInfo, 
    pixabayInfo
}