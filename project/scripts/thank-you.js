/****GET FORM INFORMATION & SEND TO THANK YOU PAGE****/
const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo);

console.log(formInfo.get("firstname"));
console.log(formInfo.get("lastname"));
console.log(formInfo.get("email"));
console.log(formInfo.get("question"));
console.log(formInfo.get("submissiontimestamp"));

document.querySelector("#form-results").innerHTML = `
<p><strong>Name:</strong> ${formInfo.get("firstname")} ${formInfo.get("lastname")}</p>
<p><strong>Email:</strong> ${formInfo.get("email")}</p>
<p><strong>Your Question:</strong> ${formInfo.get("question")}</p>
<p><strong>Submission Timestamp:</strong> ${formInfo.get("submissiontimestamp")}</p>
`;

// MODAL IN FOOTER //
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('demoButton');
    const span = document.getElementsByClassName('close-button')[0];
    const confirmBtn = document.getElementById('confirmButton');
    const cancelBtn = document.getElementById('cancelButton');

    const videoURL = 'https://youtu.be/17-PTHI5sc4';

    btn.onclick = function () {
        modal.style.display = 'flex';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    confirmBtn.onclick = function () {
        window.open(videoURL, '_blank');
    }

    cancelBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});