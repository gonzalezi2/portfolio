(function geolocator() {
    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let appid = '1ea9e9eba28e8ef98d526583b03739ea';
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${appid}`)
                .then(res => {
                    console.log(res);
                });
        });
    }
})();

