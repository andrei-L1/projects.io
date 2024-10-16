
// Function to open the modal for signing in
function openModal() {
    document.getElementById("myModal").style.display = "block";
    event.preventDefault(); 
}
function opensignup (){
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    openModal();
    
}

// Function to open the modal for signing up
function openSignupModal() {
    // Show the sign-up form and hide the sign-in form
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    // Open the modal
    openModal();
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to toggle between sign-in and sign-up forms
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    if (signupForm.style.display === "none") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
}


window.onload = function() {
    var loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn === "true") {
        // User is logged in, update buttons
        document.getElementById("signinButton").style.display = "none";
        document.getElementById("signupButton").style.display = "none";
        document.getElementById("profileButton").style.display = "inline";
        document.getElementById("logoutButton").style.display = "inline";
    }
};


// Function to update buttons after successful login
function updateButtonsAfterLogin(successfulLogin) {
    if (successfulLogin) {
        // Hide the Sign In and Sign Up buttons
        document.getElementById("signinButton").style.display = "none";
        document.getElementById("signupButton").style.display = "none";
        // Show the Profile and Logout buttons
        document.getElementById("profileButton").style.display = "inline";
        document.getElementById("logoutButton").style.display = "inline";

        // Save the login state to sessionStorage
        sessionStorage.setItem("loggedIn", "true");
    }
}

// Function to handle sign-in form submission
function submitLoginForm(event) {
    event.preventDefault();
    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve the login credentials from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the stored credentials
    if (username === storedUsername && password === storedPassword) {
        console.log("Login successful!");
        // Update buttons after successful login
        updateButtonsAfterLogin(true);
        // Add your code to redirect the user or perform other actions after successful login
        alert("Logged in successfully!");
    } else {
        console.log("Incorrect username or password. Please try again.");
        console.log("Current username: " + newUsername);
        console.log("Current email: " + newEmail);
        console.log("Current password: " + newPassword);
        alert("The username and password do not match");
    }
    // Close the modal after submission
    closeModal();
}



// Function to handle sign-up form submission
function submitSignupForm(event) {
    event.preventDefault();
    // Get the new username, email, and password from the form
    var newUsername = document.getElementById("newUsername").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;

    // Log the current username, email, and password
    console.log("Current username: " + newUsername);
    console.log("Current email: " + newEmail);
    console.log("Current password: " + newPassword);

    // Replace this with your sign-up form submission logic
    console.log("Sign-up form submitted with username: " + newUsername + ", email: " + newEmail + " and password: " + newPassword);

    // Save the login credentials to localStorage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("password", newPassword);

    // Close the modal after submission
    alert("Sign-up successful!");
    closeModal();
}

function logout() {
    // Remove the login state from sessionStorage
    sessionStorage.removeItem("loggedIn");
    
    // Show the Sign In and Sign Up buttons
    document.getElementById("signinButton").style.display = "inline";
    document.getElementById("signupButton").style.display = "inline";
    // Hide the Profile and Logout buttons
    document.getElementById("profileButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "none";

    // Redirect to index.html
    window.location.href = "index.html";

    alert("Logged out successfully!");
}

