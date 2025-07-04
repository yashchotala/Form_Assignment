const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const formStatus = document.getElementById("formStatus");

function validateName(name) {
  return /^[A-Za-z\s]{3,}$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, errorElement, message) {
  input.classList.add("shake");
  errorElement.textContent = message;
  setTimeout(() => input.classList.remove("shake"), 300);
}

function clearError(input, errorElement) {
  errorElement.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();

  if (!validateName(nameVal)) {
    showError(nameInput, nameError, "Name must be at least 3 letters.");
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (!validateEmail(emailVal)) {
    showError(emailInput, emailError, "Enter a valid email.");
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (valid) {
    formStatus.style.color = "#00e676";
    formStatus.textContent = "✅ Message sent successfully!";
    nameInput.value = "";
    emailInput.value = "";
  } else {
    formStatus.style.color = "#ff5252";
    formStatus.textContent = "⚠️ Please fix the errors above.";
  }
});

// Real-time validation
nameInput.addEventListener("input", () => {
  if (validateName(nameInput.value.trim())) {
    clearError(nameInput, nameError);
  }
});

emailInput.addEventListener("input", () => {
  if (validateEmail(emailInput.value.trim())) {
    clearError(emailInput, emailError);
  }
});
