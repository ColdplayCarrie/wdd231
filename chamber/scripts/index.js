//Home - Current Weather//
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
const myLat = "45.43"
const myLong = "-122.37"

const currentWeatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
// 45.430998582003696, -122.37440499079574

async function apiFetch() {
    try {
        const promises = [
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ];

        const [currentResponse, forecastResponse] = await Promise.all(promises);

        if (!currentResponse.ok) {
            throw new Error(`Current Weather Error: ${currentResponse.status} - ${await currentResponse.text()}`);
        }
        if (!forecastResponse.ok) {
            throw new Error(`Forecast Error: ${forecastResponse.status} - ${await forecastResponse.text()}`);
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecastResults(forecastData);
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

function displayForecastResults(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    if (dailyForecasts.length < 3) {
        console.error("Not enough data to display 3 days.");
        return;
    }

    const formatForecast = (forecast) => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = forecast.main.temp.toFixed(0);
        const description = forecast.weather[0].description;
        const iconCode = forecast.weather[0].icon;
        const iconSrc = `https://openweathermap.org/img/wn/${iconCode}.png`;

        return `<strong>${day}</strong>: ${temp}&deg;F, ${description} 
            <img src="${iconSrc}" alt="${description}" style="vertical-align: middle; height: 30px;">`;
    };

    forecastDayOne.innerHTML = formatForecast(dailyForecasts[0]);
    forecastDayTwo.innerHTML = formatForecast(dailyForecasts[1]);
    forecastDayThree.innerHTML = formatForecast(dailyForecasts[3]);
}

//member spotlights//
const directoryUrl = "https://ColdplayCarrie.github.io/wdd231/chamber/data/members.json";
const spotlightContainer = document.querySelector("#spotlight-container");

async function getMemberData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    const members = data.members;
    // console.log("fetched member data:", members);
    displaySpotlightMembers(members);
}

getMemberData();

function getSpotlightMembers(members) {
    const eligibleMembers = members.filter(member => {
        const level = member.membershipLevel;
        return level === "2" || level === "3";
    });

    const desiredNumber = Math.min(3, eligibleMembers.length);
    const randomMembers = eligibleMembers.sort(() => 0.5 - Math.random());
    return randomMembers.slice(0, desiredNumber);
}

const displaySpotlightMembers = (allMembers) => {
    if (!spotlightContainer) {
        console.error("Spotlight container not found");
        return;
    }

    const spotlights = getSpotlightMembers(allMembers);

    spotlights.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("spotlight-card");

        let memberName = document.createElement("h3");
        let memberStreetAddress = document.createElement("p");
        let memberCityStateCountry = document.createElement("p");
        let memberLogo = document.createElement("img");
        let memberPhone = document.createElement("p");
        let memberWebsite = document.createElement("a");
        let memberSince = document.createElement("p");
        let memberLevel = document.createElement("p");

        memberName.textContent = `${member.name}`;
        memberStreetAddress.textContent = `${member.address.street}`
        memberCityStateCountry.textContent = `${member.address.city}, ${member.address.state}, ${member.address.country} ${member.address.zip}`;
        memberLogo.textContent = `${member.imageOrIconFile}`;
        memberPhone.textContent = `${member.phoneNumber}`;
        memberWebsite.textContent = `${member.websiteUrl}`;
        memberSince.textContent = `Member since ${member.memberSince}`;
        memberLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        memberLogo.setAttribute("src", member.imageOrIconFile);
        memberLogo.setAttribute("alt", `Business card for ${member.name}`);
        memberLogo.setAttribute("loading", "lazy");
        memberLogo.setAttribute("width", "150");
        memberLogo.setAttribute("height", "150");

        card.appendChild(memberLogo);
        card.appendChild(memberName);
        card.appendChild(memberStreetAddress);
        card.appendChild(memberCityStateCountry);
        card.appendChild(memberPhone);
        card.appendChild(memberWebsite);
        card.appendChild(memberSince);
        card.appendChild(memberLevel);

        spotlightContainer.appendChild(card);
    });
}