const superagent = require('superagent');
superagent.get('https://api.nasa.gov/planetary/apod')
.query({'api_key':'DEMO_KEY',date: '2017-08-02'})
.end(())