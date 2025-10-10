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