"use strict";

(function geolocator() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var appid = '1ea9e9eba28e8ef98d526583b03739ea';
      var units = ['imperial', 'metric'];
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(long, "&APPID=").concat(appid, "&units=").concat(units[0])).then(function (res) {
        return res.json();
      }).then(function (response) {
        console.log(response);
        document.querySelector('#city').innerHTML = response.name;
        document.querySelector('#temp').innerHTML = "".concat(response.main.temp, " &deg;");
        document.querySelector('#weather').innerHTML = response.weather[0].main;
      });
    });
  }
})();
