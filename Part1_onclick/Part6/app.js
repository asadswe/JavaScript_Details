function validateForm() {
    var email = document.getElementById('email').value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    return true;
}