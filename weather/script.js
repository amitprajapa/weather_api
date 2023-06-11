function getWeather() {
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;
    const apiKey = '0210280c82f3461182d133940231106'; // Replace with your own API key from WeatherAPI
  
    // Make API call to retrieve weather data
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}`)
      .then(response => response.json())
      .then(data => {
        // Extract relevant data from the API response
        const weatherDescription = data.current.condition.text;
        const temperature = data.current.temp_c;
        const humidity = data.current.humidity;
        const windSpeed = data.current.wind_kph;
        const visibility = data.current.vis_km;
  
        // Display the weather data in the card
        document.getElementById('cityName').textContent = `${city}, ${country}`;
        document.getElementById('weatherDescription').textContent = `Description: ${weatherDescription}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} km/h`;
        document.getElementById('visibility').textContent = `Visibility: ${visibility} km`;
  
        // Make API call to retrieve state information
        const latitude = data.location.lat;
        const longitude = data.location.lon;
        return fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${latitude},${longitude}`);
      })
      .then(response => response.json())
      .then(data => {
        // Extract relevant data from the API response
        const state = data.astronomy.astro.state;
  
        // Display the state information in the card
        document.getElementById('state').textContent = `State: ${state}`;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  