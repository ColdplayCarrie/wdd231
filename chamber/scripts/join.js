/****TO JOIN****/
document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#submission-timestamp");

    if (timestamp) {
        const now = new Date();
        timestamp.value = now.toISOString();
    }
});


/****MODALS****/
const openLevel1 = document.querySelector("#open-level1");
const openLevel2 = document.querySelector("#open-level2");
const openLevel3 = document.querySelector("#open-level3");
const openLevel4 = document.querySelector("#open-level4");
const membershipLevels = document.querySelector("#membership-levels");
const closeLevels = document.querySelector("#close-levels");
const membershipLevelsText = document.querySelector("#membership-levels div");

openLevel1.addEventListener("click", () => {
    membershipLevels.showModal();
    membershipLevelsText.innerHTML = `<strong>NP Membership (for non-profit organizations only) - Free ($0)</strong> - Includes advertising benefits, 5 weekly service hours to aid your organization as well as free entry to all Chamber of Commerce events`;
})
openLevel2.addEventListener("click", () => {
    membershipLevels.showModal();
    membershipLevelsText.innerHTML = `<strong>Bronze Membership - $5.00 p/month</strong> - Includes advertising benefits, placard for display in business/organization, as well as free entry to all Chamber of Commerce events`;
})
openLevel3.addEventListener("click", () => {
    membershipLevels.showModal();
    membershipLevelsText.innerHTML = `<strong>Silver Membership - $9.00 p/month</strong> - Includes advertising benefits, placard for display in business/organization, spotlight on the Chamber of Commerce website main page, free advertising in the quarterly magazine as well as free entry to all Chamber of Commerce events`;
})
openLevel4.addEventListener("click", () => {
    membershipLevels.showModal();
    membershipLevelsText.innerHTML = `<strong>Gold Membership - $13.00 p/month</strong> - Includes advertising benefits, placard for display in business/organization, spotlight on the Chamber of Commerce website main page, free advertising in the quarterly magazine, quarterly luncheon for all Gold Members, prominent booth at the Summer Festival as well as free entry to all Chamber of Commerce events`;
})

closeLevels.addEventListener("click", () => {
    membershipLevels.close();
})

/****GET FORM INFORMATION & SEND TO THANK YOU PAGE****/
document.getElementById("form1").addEventListener("submit", function (g) {
    g.preventDefault();

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const fullName = `${firstName} ${lastName}`;
    const email = document.querySelector("#applicant-email").value;
    const phoneNumber = document.querySelector("#mobile-phone").value;
    const businessName = document.querySelector("#business-name").value;
    const timestamp = document.querySelector("#submission-timestamp").value;

    sessionStorage.setItem("formFullName", fullName);
    sessionStorage.setItem("formEmail", email);
    sessionStorage.setItem("formPhoneNumber", phoneNumber);
    sessionStorage.setItem("formBusinessName", businessName);
    sessionStorage.setItem("formTimestamp", timestamp);

    window.location.href = "thankyou.html";
});