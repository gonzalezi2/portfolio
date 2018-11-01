"use strict";

(function geolocator() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var appid = '1ea9e9eba28e8ef98d526583b03739ea';
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(long, "&APPID=").concat(appid)).then(function (res) {
        console.log(res);
      });
    });
  }
})();
