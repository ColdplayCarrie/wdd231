const fullName = sessionStorage.getItem("formFullName");
const email = sessionStorage.getItem("formEmail");
const phoneNumber = sessionStorage.getItem("formPhoneNumber");
const businessName = sessionStorage.getItem("formBusinessName");
const timestamp = sessionStorage.getItem("formTimestamp");

sessionStorage.removeItem("formFullName");
sessionStorage.removeItem("formEmail");
sessionStorage.removeItem("formPhoneNumber");
sessionStorage.removeItem("formBusinessName");
sessionStorage.removeItem("formTimestamp");

document.getElementById("display-fullName").textContent = fullName;
document.getElementById("display-email").textContent = email;
document.getElementById("display-phoneNumber").textContent = phoneNumber;
document.getElementById("display-businessName").textContent = businessName;
document.getElementById("display-timestamp").textContent = timestamp;