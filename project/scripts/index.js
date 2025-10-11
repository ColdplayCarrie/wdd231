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


// MODAL IN FOOTER //
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('videoPromptButton');
    const span = document.getElementsByClassName('close-button')[0];
    const confirmBtn = document.getElementById('confirmButton');
    const cancelBtn = document.getElementById('cancelButton');

    const videoURL = 'YOUR_DEMONSTRATION_VIDEO_LINK_HERE';

    btn.onclick = function () {
        modal.style.display = 'flex';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    confirmBtn.onclick = function () {
        window.open(videoURL, '_blank');
    }

    cancelBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});