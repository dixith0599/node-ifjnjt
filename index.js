let request = require('request');

let key = '5a7569218f981eb7f59e1fa8d81c783b';

const CITIES = ['Kolkata', 'Bangalore', 'Mangalore'];
const city = CITIES[Math.floor(Math.random) * CITIES.length];

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}units=imperial&appid=${key}`;

request(url, function (err, response, body) {
  console.log('Fetching Weather');
  if (err) {
    console.log('There was an error getting the weather, ' + err);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
    console.log(message);
  }
  greet();
});

function greet() {
  console.log('Weather fetched...!!');
}
