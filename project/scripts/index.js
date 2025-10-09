// Travel & Weather Cards //

import { loadAndDisplayStops } from "./cards.js";
import { createWeatherCard } from "./weatherCards.js";

const weatherContainer = document.querySelector("#weather-cards-container");

const cities = [
    { name: "Glasgow", lat: "55.85", lon: "-4.26" },
    { name: "Edinburgh", lat: "55.95", lon: "-3.19" },
    { name: "London", lat: "51.51", lon: "-0.13" }
];

if (weatherContainer) {
    cities.forEach(city => {
        createWeatherCard(city.name, city.lat, city.lon, weatherContainer);
    });
} else {
    console.error("Could not find the '#weather-cards-container' element.");
}

loadAndDisplayStops([]);