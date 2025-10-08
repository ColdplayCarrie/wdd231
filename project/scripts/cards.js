// ES Modules for Travel Stop Cards
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