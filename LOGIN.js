/* =========================
           SHOW / HIDE PASSWORD
        ========================= */

function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";

    button.textContent = "Hide";
  } else {
    input.type = "password";

    button.textContent = "Show";
  }
}

/* =========================
           FORM VALIDATION
        ========================= */

const loginForm = document.getElementById("adminLoginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const adminName = document.getElementById("adminName").value.trim();

  const adminEmail = document.getElementById("adminEmail").value.trim();

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  const errorMessage = document.getElementById("errorMessage");

  /* Clear previous error */

  errorMessage.textContent = "";

  /* Check admin name */

  if (adminName === "") {
    errorMessage.textContent = "Please enter the admin name.";

    return;
  }

  /* Check email */

  if (adminEmail === "") {
    errorMessage.textContent = "Please enter the admin email.";

    return;
  }

  /* Check password */

  if (password === "") {
    errorMessage.textContent = "Please enter your password.";

    return;
  }

  /* Check confirmed password */

  if (confirmPassword === "") {
    errorMessage.textContent = "Please confirm your password.";

    return;
  }

  /* Compare passwords */

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";

    return;
  }

  /* Successful validation */

  alert("Login successful!");

  /*
                    Later we will replace this with:

                    window.location.href = "home.html";

                    after connecting the form
                    to JSON Server.
                */
});
