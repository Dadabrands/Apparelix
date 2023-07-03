// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the contact form element
  var contactForm = document.querySelector(".contact-form");

  // Add an event listener to the form's submit button
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate the form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var isValid = true;

    // Validate name field
    if (nameInput.value.trim() === "") {
      isValid = false;
      nameInput.classList.add("error");
    } else {
      nameInput.classList.remove("error");
    }

    // Validate email field
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }

    // Validate message field
    if (messageInput.value.trim() === "") {
      isValid = false;
      messageInput.classList.add("error");
    } else {
      messageInput.classList.remove("error");
    }

    // Display error message if form is invalid
    var errorMessage = document.getElementById("error-message");
    if (!isValid) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      contactForm.submit(); // Submit the form
    }
  });
});

// // Add hover effect to hyperlinks
// const links = document.querySelectorAll("a");
// links.forEach((link) => {
//   link.addEventListener("mouseenter", () => {
//     link.style.color = "#a2a2a2"; // Change the color to your desired hover effect
//   });
//   link.addEventListener("mouseleave", () => {
//     link.style.color = ""; // Revert back to the original color
//   });
// });

// // Add hover effect to buttons
// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//   button.addEventListener("mouseenter", () => {
//     button.style.backgroundColor = "blue"; // Change the background color to your desired hover effect
//     button.style.color = "white"; // Change the text color to your desired hover effect
//   });
//   button.addEventListener("mouseleave", () => {
//     button.style.backgroundColor = ""; // Revert back to the original background color
//     button.style.color = ""; // Revert back to the original text color
//   });
// });
