function validateForm() {
    var formName = document.forms["contactForm"]["name"].value;
    console.log(formName);
    if (formName == "") {
        alert("Please input your name.");
        return false;
    }
}