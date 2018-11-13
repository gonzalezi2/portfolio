import '../scss/styles.scss';

(function geolocator() {
    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let appid = '1ea9e9eba28e8ef98d526583b03739ea';
            let units = ['imperial', 'metric'];
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${appid}&units=${units[0]}`)
                .then(res => {
                    return res.json();
                })
                .then(response => {
                    document.querySelector('#city').innerHTML = response.name;
                    document.querySelector('#temp').innerHTML = `${response.main.temp} &deg;`;
                    document.querySelector('#weather').innerHTML = response.weather[0].main;
                    if(response.weather[0].main == 'Rain') {
                        document.querySelector('#dashboard').classList.add('rain');
                        document.querySelector('#dashboard').setAttribute('style',
                        'background-image: url("../img/rain.svg")');
                    }
                });
        });
    }
})();

