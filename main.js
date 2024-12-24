var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// form submission handling
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("Phone-Number").value;
    var email = document.getElementById("Email").value;
    var address = document.getElementById("Address").value;
    var academic = document.getElementById("Academics").value;
    var CareerHighlight = document.getElementById("Career-Highlights").value;
    var skills = document.getElementById("Skills").value;
    var experience = document.getElementById("Experience").value;
    // generate the resume content dynamically.
    var resumeHtML = "\n    <h2><b><u>Resume</u></b></h2>\n    <h3><b>Personal Information:</b></h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Speak to:</b>").concat(phone, "</p>  \n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n\n    <h3><b>Academics:</b></h3>\n    <p>").concat(academic, "</p>\n\n    <h3><b>Career Highlights:</b></h3>\n    <p>").concat(CareerHighlight, "</p>\n\n    <h3><b>Skills:</b></h3>\n    <p>").concat(skills, "</p>\n\n    <h3><b>Experience:</b></h3>\n    <p>").concat(experience, "</p>\n    ");
    // Now displaying the resume dynamically.
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtML;
    }
    else {
        console.log("Please fill the required field first.");
    }
});
