const geoNames = 'http://api.geonames.org/search?';
const weatherbit = 'https://api.weatherbit.io/v2.0/history/daily';
const pixabay = "https://pixabay.com/api/";

//call GeoNames
const geoNamesInfo = async (city, country, gnUser) => {
    
    const response = await fetch(`${geoNames}q=${city}&country=${country}&username=${gnUser}`);
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

exports.geoNamesInfo =geoNamesInfo;
exports.weatherbitInfo = weatherbitInfo;
exports.pixabayInfo = pixabayInfo;