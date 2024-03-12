document.getElementById('search-button').addEventListener('click', function() {
    const cityName = document.getElementById('search-input').value;
    fetchWeatherData(cityName);
});

function fetchWeatherData(city) {
    const apiKey = '8dad3db309e50de33c8cdefbe69cec74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeatherData(data));
}

function displayWeatherData(data) {
    const weatherDisplay = document.getElementById('weather-display');
    if (data.cod === '404') {
        weatherDisplay.innerHTML = `<p>City not found. Please try again.</p>`;
        return;
    }

    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
        <p>${data.weather[0].main}: ${data.weather[0].description}</p>
    `;
}


