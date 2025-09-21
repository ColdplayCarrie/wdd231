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
        let memberAddress = document.createElement("h3");
        let memberLogo = document.createElement("img");
        let memberPhone = document.createElement("h4");
        let memberWebsite = document.createElement("li");
        let memberSince = document.createElement("p");
        let memberLevel = document.createElement("p");

        memberName.textContent = `${members.name}`;
        memberAddress.textContent = `${members.address.street}, ${members.address.city}, ${members.address.state}, ${members.address.country} ${members.address.zip}`;
        memberLogo.textContent = `${members.imageOrIconFile}`;
        memberPhone.textContent = `${members.phoneNumber}`;
        memberWebsite.textContent = `${members.websiteUrl}`;
        memberSince.textContent = `Member since ${members.memberSince}`;
        memberLevel.textContent = `Membership Level: ${members.membershipLevel}`;

        card.setAttribute("src", members.imageOrIconFile);
        card.setAttribute("alt", `Business card for ${memberName}`);
        card.setAttribute("loading", "lazy");
        card.setAttribute("width", "440");
        card.setAttribute("height", "340");

        card.appendChild(memberLogo);
        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(memberPhone);
        card.appendChild(memberWebsite);
        card.appendChild(memberSince);
        card.appendChild(memberLevel);

        membersCard.appendChild(card);
    })
}