const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;

//hamburger menu button//
const hamburgerBtn = document.querySelector('#ham-btn');
const navMenu = document.querySelector('#nav-bar');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

//member grid stuff//
const url = "https://ColdplayCarrie.github.io/wdd231/chamber/data/members.json";
const membersCard = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(url);
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

//Member Grid--List//

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
// const display = document.querySelector(".member-card-container");

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