

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0026c7b62053a132a729737abac9350c';
    let city='New Delhi';
    fetchWeatherData(city,apiKey);
    document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('location-input').value;
    fetchWeatherData(city, apiKey);
    });
});

function fetchWeatherData(city, apiKey) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json()).then(data => {
            if (data) {
                console.log(data);
                document.getElementById('location').textContent = data.name;
                document.getElementById('temperature').textContent = Math.round(data.main.temp);
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('humidity').textContent = data.main.humidity;
                document.getElementById('wind-speed').textContent = data.wind.speed;

                const des=data.weather[0].description;
                //console.log(des);
                const icon=document.getElementById('weather-icon');
                if(des=='broken clouds' || des=='few clouds' || des=='scattered clouds')
                    icon.src='images/clouds.png';
                else if(des=='clear')
                    icon.src='images/clear.png';
                else if(des=='rain' || des=='moderate rain')
                    icon.src= 'images/rain.png';
                else if(des=='snow')
                    icon.src= 'images/snow.png'; 
                else if(des=='drizzle')
                    icon.src='images/drizzle.png'
                else if(des=='mist')
                    icon.src='images/mist.png';
                icon.style.display='block';
            } else {

           alert('Location not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
