const urlParams = new URLSearchParams(window.location.search);

const fullName = urlParams.get("fullName");
const email = urlParams.get("email");
const phoneNumber = urlParams.get("phoneNumber");
const businessName = urlParams.get("businessName");
const timestamp = urlParams.get("timestamp");

document.getElementById("display-fullName").textContent = fullName;
document.getElementById("display-email").textContent = email;
document.getElementById("display-phoneNumber").textContent = phoneNumber;
document.getElementById("display-businessName").textContent = businessName;
document.getElementById("display-timestamp").textContent = timestamp; 