
/****GET FORM INFORMATION & SEND TO THANK YOU PAGE****/
const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo);

console.log(formInfo.get("firstname"));
console.log(formInfo.get("lastname"));
console.log(formInfo.get("email"));
console.log(formInfo.get("mobilephone"));
console.log(formInfo.get("businessname"));
console.log(formInfo.get("submissiontimestamp"));

document.querySelector("#form-results").innerHTML = `
<p><strong>Applicant name:</strong> ${formInfo.get("firstname")} ${formInfo.get("lastname")}</p>
<p><strong>Email:</strong> ${formInfo.get("email")}</p>
<p><strong>Phone Number:</strong> ${formInfo.get("mobilephone")}</p>
<p><strong>Business/Organization Name:</strong> ${formInfo.get("businessname")}</p>
<p><strong>Submission Timestamp:</strong> ${formInfo.get("submissiontimestamp")}</p>
`;