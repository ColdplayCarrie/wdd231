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
