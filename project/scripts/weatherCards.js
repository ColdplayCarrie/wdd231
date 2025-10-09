// WEATHER CARD //

const myKey = "2936b130fdb47b8a30ab3d699edf700a"

export async function createWeatherCard(cityName, lat, lon, containerElement) {
    const currentWeatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`

    const card = document.createElement('div');
    card.className = "weather-card";
    card.innerHTML = `
    <h3>Current Weather in *${cityName}*</h3>
    <figure>
        <img id="${cityName.toLowerCase()}-icon" src="" alt="Weather Icon">
        <figcaption id="${cityName.toLowerCase()}-description"></figcaption>
    </figure>
    <p><strong>Currently:</strong> <span id="${cityName.toLowerCase()}-current-temp"></span></p>
    <p><strong>High:</strong> <span id="${cityName.toLowerCase()}-high-temp"></span></p>
    <p><strong>Low:</strong> <span id="${cityName.toLowerCase()}-low-temp"></span></p>
    <p><strong>Humidity:</strong> <span id="${cityName.toLowerCase()}-humidity"></span></p>    
    `;

    containerElement.appendChild(card);

    const weatherIcon = card.querySelector(`#${cityName.toLowerCase()}-icon`);
    const weatherDesc = card.querySelector(`#${cityName.toLowerCase()}-description`);
    const currentTemp = card.querySelector(`#${cityName.toLowerCase()}-current-temp`);
    const highTemp = card.querySelector(`#${cityName.toLowerCase()}-high-temp`);
    const lowTemp = card.querySelector(`#${cityName.toLowerCase()}-low-temp`);
    const humidity = card.querySelector(`#${cityName.toLowerCase()}-humidity`);

    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        weatherDesc.textContent = data.weather[0].description;
        currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
        highTemp.innerHTML = `${data.main.temp_max.toFixed(0)} &deg;F`;
        lowTemp.innerHTML = `${data.main.temp_min.toFixed(0)} &deg;F`;
        humidity.textContent = `${data.main.humidity}%`;

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", data.weather[0].description);

    } catch (error) {
        console.error(`Failed to fetch weather for ${cityName}:`, error);
        card.innerHTML = `<p class="error">Failed to load weather data for ${cityName}.</p>`;
    }
}

