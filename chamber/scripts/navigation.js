//Footer//
const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;

//Header - hamburger menu button//
const hamburgerBtn = document.querySelector('#ham-btn');
const navMenu = document.querySelector('#nav-bar');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

//Directory -member grid stuff//
const directoryUrl = "https://ColdplayCarrie.github.io/wdd231/chamber/data/members.json";
const membersCard = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let memberName = document.createElement("h2");
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

        membersCard.appendChild(card);
    })
}

//Directory - Member Grid--List//

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    membersCard.classList.add("grid");
    membersCard.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    membersCard.classList.add("list");
    membersCard.classList.remove("grid");
});

document.addEventListener('DOMContentLoaded', () => {
    const membersCard = document.querySelector("#members");
    membersCard.classList.add("grid");
});

//Home - Weather//
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "2936b130fdb47b8a30ab3d699edf700a"
const myLat = "45.43"
const myLong = "-122.37"

const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
// 45.430998582003696, -122.37440499079574

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);

    }
}

apiFetch();

function displayResults(data) {
    captionDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `${data.main.temp} &deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}