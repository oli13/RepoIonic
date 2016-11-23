angular.module('weather')

.constant('OpenWeatherConfig', {
   searchUrlLat: 'http://api.openweathermap.org/data/2.5/weather?lat=',
   searchUrlLon: '&lon=',
   units: '&units=metric',
   appid: '&appid=77f084bc11e976b31f1366d4014032b8',
   imgUrl: 'http://openweathermap.org/img/w/' 
})