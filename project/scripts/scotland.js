// Scotland Cards //
const travelStopsUrl = "https://ColdplayCarrie.github.io/wdd231/project/data/travel-stops.json";
const travelStopsCard = document.querySelector("#travel-stops");

async function getTravelStopsData() {
    const response = await fetch(travelStopsUrl);
    const data = await response.json();
    displayTravelStops(data.stops);
}

getTravelStopsData();

export function displayTravelStops(travelStops) {
    travelStops.forEach((travelStop) => {
        let card = document.createElement("section");
        let travelStopName = document.createElement("h2");
        let travelStopLocation = document.createElement("h3");
        let travelStopDayNumber = document.createElement("p");
        let travelStopDate = document.createElement("p")
        let figure = document.createElement("figure");
        let travelStopPhoto = document.createElement("img");
        let learnMoreBtn = document.createElement("button");

        travelStopPhoto.setAttribute("src", travelStop.travelStopPhoto);
        travelStopPhoto.setAttribute("alt", `Photo of ${travelStop.name}`);
        travelStopPhoto.setAttribute("loading", "lazy");
        learnMoreBtn.setAttribute("type", "button");

        figure.appendChild(travelStopPhoto);

        travelStopName.textContent = `${travelStop.name}`;
        travelStopLocation.textContent = `${travelStop.location}`
        travelStopDayNumber.textContent = `${travelStop.dayNumber}`;
        travelStopDate.textContent = `${travelStop.datesThere}`;
        learnMoreBtn.innerHTML = "Learn More";

        card.appendChild(figure);
        card.appendChild(travelStopName);
        card.appendChild(travelStopLocation);
        card.appendChild(travelStopDayNumber);
        card.appendChild(travelStopDate);
        card.appendChild(learnMoreBtn);

        travelStopsCard.appendChild(card);
    })
}