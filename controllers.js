angular.module('weather')

.controller('WeatherCtrl', function($scope, $cordovaGeolocation, $http, OpenWeatherConfig) {
	
	
	$scope.search = '';
    $scope.state = false;    
    $scope.weatherData = {
    icon: '',
    main: '',
    city: '',
    description: '',
    temp: '',
	
	  };
	
	$scope.geoloc = function(){
	var posOptions = {timeout: 10000, enableHighAccuracy: false};
		$cordovaGeolocation
			.getCurrentPosition(posOptions)
			.then(function (position) {
				var lat = position.coords.latitude;
				var lon = position.coords.longitude;
				 
			}, function(err) {
				// error
			});
	};
	
    $scope.loadWeather = function(search, geoloc) {
		
            var url = OpenWeatherConfig.searchUrlLat + geoloc.lat + OpenWeatherConfig.searchUrlLon + geoloc.lon + OpenWeatherConfig.units + OpenWeatherConfig.appid;
            $http.get(url).success(function(data) {
                $scope.weatherData.icon = OpenWeatherConfig.imgUrl + data.weather[0].icon + '.png';
                $scope.weatherData.main = data.weather[0].main;
                $scope.weatherData.city = data.name;
                $scope.weatherData.description = data.weather[0].description;
                $scope.weatherData.temp = data.main.temp;
				$scope.weatherData.lat = data.coord.lat;
				$scope.weatherData.lon = data.coord.lon;
                $scope.state = true;
            });
		
	};
    
});
