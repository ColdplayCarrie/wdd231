// //Discover Cards stuff//
const discoverUrl = "https://ColdplayCarrie.github.io/wdd231/chamber/data/discover.json";
const placesCard = document.querySelector("#places");

async function getPlacesData() {
    const response = await fetch(discoverUrl);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlacesData();

function displayPlaces(places) {
    places.forEach((place) => {
        let card = document.createElement("section");
        let placeName = document.createElement("h2");
        let placeAddress = document.createElement("p");
        let placeDescription = document.createElement("p");
        let placePhoto = document.createElement("img");

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