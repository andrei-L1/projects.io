 // checks if user is in guest mode or is logged in
  function updateLinkDisplay() {
    var isGuestMode = JSON.parse(localStorage.getItem('isGuestMode'));
    var isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    var logOutBtn = document.getElementById('logOutBtn');
    var signInLink = document.getElementById('signInLink');
    var profileLi = document.getElementById('profileLi');
    var visi = document.getElementById('loginRequiredContent');

    if (isGuestMode === true) {
      logOutBtn.style.display = 'none';
      signInLink.style.display = 'block';
      profileLi.style.display = 'none';
      visi.style.display = 'none';
    } else {
      if (isLoggedIn) {
        logOutBtn.style.display = 'block';
        profileLi.style.display = 'block';
        signInLink.style.display = 'none';
        visi.style.display = 'block';
      } else {
        logOutBtn.style.display = 'none';
        signInLink.style.display = 'block';
        profileLi.style.display = 'none';
        visi.style.display = 'none';
      }
    }
    console.log('isGuestMode:', isGuestMode);
    console.log('isLoggedIn:', isLoggedIn);
  }

  // Call the function when the page loads
  window.onload = function () {
    updateLinkDisplay();

    // Log Out function
    document.getElementById('logOutBtn').addEventListener('click', function () {
      // Clear the login status and "guest mode" flag in localStorage
      localStorage.setItem('isGuestMode', true);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('isGuestMode');
      // Redirect to the login page
      window.location.href = 'index.html';
    });
  };

 // manipulates the collor of the border
function handleCardClick(cardId) {
    document.querySelectorAll('.card').forEach(function(card) {
        card.style.borderColor = 'rgba(0, 0, 0, 0.315)';
    });
  
    document.getElementById(cardId).style.borderColor = 'rgba(70, 100, 141)';
  }
  
  // Add click event listeners to each card
  document.addEventListener('DOMContentLoaded', function() {
  
    document.getElementById('card1').addEventListener('click', function() {
      handleCardClick('card1');
    });

    document.getElementById('card2').addEventListener('click', function() {
      handleCardClick('card2');
    });

    document.getElementById('card3').addEventListener('click', function() {
      handleCardClick('card3');
    });

    document.getElementById('card4').addEventListener('click', function() {
      handleCardClick('card4');
    });
    
    document.getElementById('card5').addEventListener('click', function() {
      handleCardClick('card5');
    });
  
  
  });

  //hides other contents and shows omly the content  of card1 
  document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");
    const cardContents = document.querySelectorAll(".card-content");
  
    cardContents.forEach(function (content) {
      content.style.display = "none";
    });
    document.getElementById("card1-content").style.display = "block";
    document.getElementById("card1").click();
  
    cardContainer.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      if (card) {
        const cardId = card.getAttribute("id");
        const targetContent = document.getElementById(cardId + "-content");
  
        if (targetContent) {
          cardContents.forEach(function (content) {
            content.style.display = "none";
          });
  
          targetContent.style.display = "block";
        }
      }
    });
  });

  //shows the bottom content of content2 depepnding on which card is chosen
  document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");
    const cardContents = document.querySelectorAll(".card-content");
  
    cardContainer.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      if (card) {
        const cardId = card.getAttribute("id");
        const targetTopContent = document.getElementById(cardId + "-content");
        const targetBottomContent = document.getElementById("bottom-" + cardId + "-content");
  
        if (targetTopContent && targetBottomContent) {
          cardContents.forEach(function (content) {
            content.style.display = "none";
          });
  
          targetTopContent.style.display = "block";
          targetBottomContent.style.display = "block";
        }
      }
    });
    const initialTopContent = document.getElementById("card1-content");
    const initialBottomContent = document.getElementById("bottom-card1-content");
  
    if (initialTopContent && initialBottomContent) {
      initialTopContent.style.display = "block";
      initialBottomContent.style.display = "block";
    }
  });
  