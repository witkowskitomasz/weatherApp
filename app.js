

const cityNameInput = document.getElementById('localization_input');
const cityNameButton = document.getElementById('localization-btn');



// Function to make city name to geoCode

const cityToGeocode = () => {
    
    const cityName = cityNameInput.value;
    const geoCoding_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
    const geoCoding_CITY = `q=${cityName}`;
    const geoCoding_API_KEY = '&appid=f5741dcdfe8cf39f53547ba1782d2b33';
    
    
    axios
        .get(geoCoding_URL+geoCoding_CITY+geoCoding_API_KEY)
        
        .then(res => {
            
            const cityLat = res.data[0].lat;
            const cityLon = res.data[0].lon;
            getCurrentWeatherInfo(cityLat, cityLon);
        })

        .catch(err => {console.log(err);})
}

// Function to get current weather

const getCurrentWeatherInfo = (cityLat, cityLon) => {
    
    const getWeather_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    const getWeather_LAT = `lat=${cityLat}`;
    const getWeather_LON = `&lon=${cityLon}`;
    const getWeather_UNITS = '&units=metric'
    const getWeather_API_KEY = '&appid=f5741dcdfe8cf39f53547ba1782d2b33';

    axios
        .get(getWeather_URL+getWeather_LAT+getWeather_LON+getWeather_UNITS+getWeather_API_KEY)
    
        .then(res => {
            catchAndDisplayData(res);
        })

        .catch(err => {console.log(err);})
}

// Function to display data

const catchAndDisplayData = (data) => {
    
    const info = data;
    
    const cityName = document.querySelector('.city-name');
    cityName.textContent = info.data.name;

    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.floor(info.data.main.temp) + '℃';
    
    const humidity = document.querySelector('.humidity');
    humidity.textContent = `humidity : ${info.data.main.humidity} %`;

    const pressure = document.querySelector('.pressure');
    pressure.textContent = `pressure : ${info.data.main.pressure} hPa`;

    const wind = document.querySelector('.wind');
    wind.textContent = `wind : ${info.data.wind.speed * 10} km/h`;

    cityNameInput.value = '';
}














//function to get 3 day forecast
//function to get air quality
//input on enter
//changing the img
//repair wind




cityNameButton.addEventListener('click', cityToGeocode);
//cityNameInput.addEventListener('')
