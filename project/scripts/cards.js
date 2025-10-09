// ES Modules for Travel Stop Cards //
const travelStopsUrl = "https://ColdplayCarrie.github.io/wdd231/project/data/travel-stops.json";
const travelStopsCard = document.querySelector("#travel-stops");

function getTravelStops(travelStops, searchTerms) {
    if (!searchTerms || searchTerms.length === 0) {
        return travelStops;
    }
    const filteredTravelStops = travelStops.filter(travelStop => {
        const location = travelStop.location.toLowerCase();
        return searchTerms.some(word => location.includes(word));
    });

    return filteredTravelStops;
}

function getRandomStops(allStops) {
    const desiredNumber = Math.min(3, allStops.length);
    const randomStops = [...allStops].sort(() => 0.5 - Math.random());
    return randomStops.slice(0, desiredNumber);
}

function displayTravelStops(travelStopsArray) {
    if (!travelStopsCard) {
        console.error("Travel Stop Card container not found");
        return;
    }

    travelStopsArray.forEach((travelStop) => {
        let card = document.createElement("section");
        let travelStopName = document.createElement("h3");
        let travelStopLocation = document.createElement("h4");
        let travelStopDayNumber = document.createElement("p");
        travelStopDayNumber.className = "travel-stop-day"
        let travelStopDate = document.createElement("p")
        travelStopDate.className = "travel-stop-date"
        let figure = document.createElement("figure");
        let travelStopPhoto = document.createElement("img");
        let learnMoreBtn = document.createElement("button");

        travelStopPhoto.setAttribute("src", travelStop.photo);
        travelStopPhoto.setAttribute("alt", `Photo of ${travelStop.name}`);
        travelStopPhoto.setAttribute("loading", "lazy");
        learnMoreBtn.setAttribute("type", "button");

        figure.appendChild(travelStopPhoto);

        travelStopName.textContent = `${travelStop.name}`;
        travelStopLocation.textContent = `${travelStop.location}`
        travelStopDayNumber.textContent = `${travelStop.dayNumber}`;
        travelStopDate.textContent = `${travelStop.datesThere}`;
        learnMoreBtn.innerHTML = "Learn More!";

        card.appendChild(figure);
        card.appendChild(travelStopName);
        card.appendChild(travelStopLocation);
        card.appendChild(travelStopDayNumber);
        card.appendChild(travelStopDate);
        card.appendChild(learnMoreBtn);

        travelStopsCard.appendChild(card);
    })
}

export async function loadAndDisplayStops(searchTerms) {
    try {
        const response = await fetch(travelStopsUrl);
        const data = await response.json();
        let stopsToDisplay = getTravelStops(data.stops, searchTerms);

        if (!searchTerms || searchTerms.length === 0) {
            stopsToDisplay = getRandomStops(stopsToDisplay);
        }

        displayTravelStops(stopsToDisplay);
    } catch (error) {
        console.error("Error fetching travel stops data:", error);
    }
}



// ES Modules for Weather Cards //

const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const forecastDayOne = document.querySelector('#forecast-day-one');
const forecastDayTwo = document.querySelector('#forecast-day-two');
const forecastDayThree = document.querySelector('#forecast-day-three');

const myKey = "2936b130fdb47b8a30ab3d699edf700a"
const myLat = "55.85"
const myLong = "-4.26"

const currentWeatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
//const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
// 45.430998582003696, -122.37440499079574

async function apiFetch() {
    try {
        const promises = [
            fetch(currentWeatherUrl),
            //fetch(forecastUrl)
        ];
        //, forecastResponse]
        const [currentResponse] = await Promise.all(promises);

        if (!currentResponse.ok) {
            throw new Error(`Current Weather Error: ${currentResponse.status} - ${await currentResponse.text()}`);
        }
        // if (!forecastResponse.ok) {
        //     throw new Error(`Forecast Error: ${forecastResponse.status} - ${await forecastResponse.text()}`);
        // }

        const currentData = await currentResponse.json();
        //const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        //displayForecastResults(forecastData);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
}

apiFetch();

function displayCurrentWeather(data) {
    weatherDesc.innerHTML = `<strong>${data.weather[0].description}</strong>`
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)} &deg;F</strong>`
    highTemp.innerHTML = `<strong>High:</strong> ${data.main.temp_max.toFixed(0)} &deg;F`
    lowTemp.innerHTML = `<strong>Low:</strong> ${data.main.temp_min.toFixed(0)} &deg;F`
    humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

// function displayForecastResults(data) {
//     const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

//     if (dailyForecasts.length < 3) {
//         console.error("Not enough data to display 3 days.");
//         return;
//     }

    // const formatForecast = (forecast) => {
    //     const date = new Date(forecast.dt * 1000);
    //     const day = date.toLocaleDateString("en-US", { weekday: "long" });
    //     const temp = forecast.main.temp.toFixed(0);
    //     const description = forecast.weather[0].description;
    //     const iconCode = forecast.weather[0].icon;
    //     const iconSrc = `https://openweathermap.org/img/wn/${iconCode}.png`;

    //     return `<strong>${day}</strong>: ${temp}&deg;F, ${description} 
    //         <img src="${iconSrc}" alt="${description}" style="vertical-align: middle; height: 30px;">`;
    // };

    //forecastDayOne.innerHTML = formatForecast(dailyForecasts[0]);
    //forecastDayTwo.innerHTML = formatForecast(dailyForecasts[1]);
    //forecastDayThree.innerHTML = formatForecast(dailyForecasts[3]);
//}