//Discover Cards stuff//
const discoverUrl = "https://ColdplayCarrie.github.io/wdd231/chamber/data/discover.json";
const placesCard = document.querySelector("#places");

async function getPlacesData() {
    const response = await fetch(discoverUrl);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlacesData();

const displayPlaces = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        let placeName = document.createElement("h2");
        let placeStreetAddress = document.createElement("p");
        let placesDescription = document.createElement("p");

        placeName.textContent = `${place.name}`;
        placeAddress.textContent = `${place.address}`
        placeDescription.textContent = `${place.description}`;

        placePhoto.setAttribute("src", place.placePhoto);
        placePhoto.setAttribute("alt", `Photo of ${place.name}`);
        placePhoto.setAttribute("loading", "lazy");
        placePhoto.setAttribute("width", "200");
        placePhoto.setAttribute("height", "300");

        card.appendChild(placePhoto);
        card.appendChild(placeName);
        card.appendChild(placeAddress);
        card.appendChild(placeDescription);

        placesCard.appendChild(card);
    })
}