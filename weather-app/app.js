const axios = require("axios").default;

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//   params: {lon: '38.5', lat: '-78.5'},
//   headers: {
//     'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
//     'x-rapidapi-key': '819c379745msh612ebca72547a10p113bf7jsn9b3c465dae64'
//   }
// };

// axios.request(options).then(function (response) {
// 	// console.log(response);
//   console.log(`It is currently ${response.data.data[0].temp} degrees out. There is a ${response.data.data[0].precip}% chance of rain`);
// }).catch(function (error) {
// 	// console.error(error);
//   if(error){
//     console.log('Unable to connect to weather service')
//   }
//   // else if(response.error){
//   //   console.log('unable to find location');
//   // }
// });

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ae12what.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibmR1a2VzYW0iLCJhIjoiY2t3MmQxcXozMTJobzJvcm8yOHFremgweiJ9.pQkbC1uL5MGSIgkRe1jtrQ&limit=1'

axios.request(url).then(function (response) {
  let body = response.data
  const latitude = body.features[0].center[1]
  const longitude = body.features[0].center[0]
  console.log(longitude);
  console.log(`Longitude of your current location is ${longitude} and latitude of your current location is ${latitude}`);
}).catch(function(error) {
  if (error) {
    if (response.body.features.length === 0) {
    console.log('unable to find location, please try another search');
  } 
   else {
     console.log('unable to connect to location services');
  }
     
  } 
})

