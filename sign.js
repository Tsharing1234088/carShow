// Get form values
const username = document.querySelector('input[type="email"]').value;
const password = document.querySelector('input[type="password"]').value;
const contactNumber = document.getElementById("contact-number").value;
const dzongkhag = document.getElementById("dzongkhags").value;


document.getElementById("form");
addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate the form
  if (!username  ||password  ||contactNumber || !dzongkhag) {
    alert("Please fill in all fields.");
    return;
  }

  // Check contact number length
  if (contactNumber.length !== 12) {
    alert(
      "Contact number must be 10 digits long. Don't forget to add your  country code +975"
    );
    return;
  }

  // If everything is valid
  alert("Form submitted successfully!");
});
