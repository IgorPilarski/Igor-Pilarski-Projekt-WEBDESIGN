
function showPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  function hoverEffect() {
    document.querySelector('.hero_desc').style.textDecoration = 'underline';
  }

  function removeHoverEffect() {
    document.querySelector('.hero_desc').style.textDecoration = 'none';
  }


  let totalSum = 0;

  function calculateCost(hourlyRate, hoursWorkedId, totalCostId) {
    const hoursWorkedInput = document.getElementById(hoursWorkedId);
    const hoursWorked = parseFloat(hoursWorkedInput.value);

    if (isNaN(hoursWorked) || hoursWorked < 0) {
        alert("Wprowadź nieujemną wartość liczbową.");
        return;
    }

    const totalCost = hourlyRate * hoursWorked;

    document.getElementById(totalCostId).value = totalCost.toFixed(2) + " PLN";

    const totalCost1 = parseFloat(document.getElementById('total-cost-1').value) || 0;
    const totalCost2 = parseFloat(document.getElementById('total-cost-2').value) || 0;
    const totalCost3 = parseFloat(document.getElementById('total-cost-3').value) || 0;

    const totalSum = totalCost1 + totalCost2 + totalCost3;

    document.getElementById("sum-of-costs").textContent = "Sum of all costs: " + totalSum.toFixed(2) + " PLN";
}

function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var service = document.getElementById("service").value;

    resetErrorMessages();

    var errorMessages = [];

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("Please enter a valid email address");
        displayErrorMessage("email", "Please enter a valid email address");
    }

    var phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(phone)) {
        errorMessages.push("Please enter a valid 9-digit phone number");
        displayErrorMessage("phone", "Please enter a valid 9-digit phone number");
    }

    if (service === "") {
        errorMessages.push("Please select a service");
        displayErrorMessage("service", "Please select a service");
    }

    if (errorMessages.length > 0) {
        displayErrorMessage("formError", errorMessages.join("<br>"));
        return;
    }

    alert("Form submitted successfully!");
}

function resetErrorMessages() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (element) {
        element.innerHTML = "";
    });
}

function displayErrorMessage(fieldId, message) {
    var errorDiv = document.getElementById(fieldId + "Error");
    errorDiv.innerHTML = message;
}

