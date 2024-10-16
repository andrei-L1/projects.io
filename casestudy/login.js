const staticEmail = 'admin@gmail.com';

if(!localStorage.getItem('password')){
  localStorage.setItem('password', 'admin1234');
}
function login() {
    var email = document.getElementById('email').value;
    var enteredPassword = document.getElementById('password').value;
    console.log(localStorage.getItem('password'));
    if (email === staticEmail && enteredPassword === localStorage.getItem('password')) {
        // Set a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isLoggedIn', true);
        // Redirect to the home page or any other authenticated page
        window.location.href = 'index.html';
    } else {
        alert('Login failed. Check your credentials.');
    }
}

function editSec(event) {
    console.log("Function called");
    let currentPassword = document.getElementById('currentPassword').value;
    let newPassword = document.getElementById('newPassword').value;
    let repeatNewPassword = document.getElementById('repeatNewPassword').value;

    if (currentPassword !== localStorage.getItem('password')) {
        alert("Invalid Password");
        return;
    } else if (localStorage.getItem('password')=== newPassword) {
        alert("Invalid Password, it is currently your password");
        return;
    } else if (localStorage.getItem('password') === repeatNewPassword) {
        alert("Invalid Password, it is currently your password");
        return;
    } else if (newPassword !== repeatNewPassword) {
        alert("New Passwords don't match");
        return;
    } else if (currentPassword === "") {
        alert("Current Password is empty");
        return;
    } else if (newPassword === "") {
        alert("New Password is empty");
        return;
    } else if (repeatNewPassword === "") {
        alert("Repeat New Password is empty");
        return;
    } else {
        alert("Password Changed, redirecting you to the login page");

        localStorage.setItem('password', repeatNewPassword);
     
        clearInputBoxes();

        localStorage.setItem('isLoggedIn', false);
        // Redirect to the home page or any other authenticated page
        window.location.href = 'login.html';
    }
}

function clearInputBoxes() {
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('repeatNewPassword').value = '';
}
