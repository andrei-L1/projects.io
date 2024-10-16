
function profile(event) {
var hiddenElements = document.getElementsByClassName("hidden");
var profile = document.querySelector('.profile');
var security = document.querySelector('.security');
if (profile) {
  profile.style.display = 'block';
  security.style.display = 'none';
}


for (var i = 0; i < hiddenElements.length; i++) {
  if (hiddenElements[i].style.display === "block") {
 
    return; // Stop further processing if any hidden element is visible
  }
}
}

function security(event) {
// Get elements by class name
var hiddenElements = document.getElementsByClassName("hidden");
var hiddenElementsSec = document.getElementsByClassName("hidden-sec");
var securityElements = document.querySelector('.security');
var profile = document.querySelector('.profile');

// Check if any "hidden" element is visible
for (var i = 0; i < hiddenElementsSec.length; i++) {
  if (hiddenElementsSec[i].style.display === "block") {
   
    return; // Stop further processing if any hidden element is visible
  }
}

// Toggle the display of elements
if (securityElements) {
  securityElements.style.display = 'block';
  profile.style.display = 'none';

  // Loop through hiddenElementsSec collection and set display to 'none'
  for (var j = 0; j < hiddenElementsSec.length; j++) {
    hiddenElementsSec[j].style.display = 'none';
  }
}
}
//Profile Edit
function editProfile() {
 
  let hiddenElements = document.getElementsByClassName("hidden");
  let visibleElements = document.getElementsByClassName("visible");
  let buttonContainer = document.getElementById("button-container");
 
  for (let element of hiddenElements) {
    element.style.display = "block";
  }

  for (let element of visibleElements) {
    element.style.display = "none";
  }


  buttonContainer.innerHTML = `

    <input type="button" onclick="cancelEditProfile()" value="Cancel" id="button-2" class="btn">
    <input type="button" onclick="saveChangesProfile()" value="Save Changes" id="button-3" class="btn">
  `;
}



 //Profile Change
function saveChangesProfile() {

  let hiddenElements = document.getElementsByClassName("hidden");
  let visibleElements = document.getElementsByClassName("visible");
  let buttonContainer = document.getElementById("button-container");
  let new_name = document.getElementById("name-edit").value;
  let new_job = document.getElementById("job-edit").value;
  
  let new_phone = document.getElementById("phone-edit").value;
  let new_address = document.getElementById("address-edit").value;
  
  if (new_name.trim() === "") {
    alert("Name cannot be empty. Please fill in all required fields.");
    return;
  }
  else if(new_job.trim() === ""){
    alert("Job cannot be empty. Please fill in all required fields.");
    return;
  }
 
  else if(new_phone.trim() === ""){
    alert("Phone cannot be empty. Please fill in all required fields.");
    return;
  }
  else if(new_address.trim() === ""){
    alert("Address cannot be empty. Please fill in all required fields.");
    return;
  }
  else{
   for (let element of hiddenElements) {
     element.style.display = "none";
   }

   for (let element of visibleElements) {
     element.style.display = "block";
   }
  
  
  buttonContainer.innerHTML = `
    <input type="button" onclick="editProfile()" value="Edit" id="button" class="btn">
  `;

  document.getElementById("name").innerText = new_name;
  document.getElementById("job").innerText = new_job;
  document.getElementById("phone").innerText = new_phone;
  document.getElementById("address").innerText = new_address;
}
}
//Cancel Profile Change
function cancelEditProfile() {
  let hiddenElements = document.getElementsByClassName("hidden");
  let visibleElements = document.getElementsByClassName("visible");
  let buttonContainer = document.getElementById("button-container");

  for (let element of hiddenElements) {
    element.style.display = "none";
  }

  for (let element of visibleElements) {
    element.style.display = "block";
  }

  buttonContainer.innerHTML = `
    <input type="button" onclick="editProfile()" value="Edit" class="btn">
  `;
}



function clearInputBoxes() {
  document.getElementById('currentPassword').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('repeatNewPassword').value = '';
}