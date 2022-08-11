"use script";
///////////////////////
// All variables

const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwInputs = document.querySelectorAll(".password");
const switchLogin = document.querySelector(".login-link");
const switchSignUp = document.querySelector(".signUp-link");

// signin and signup buttons
const signIn = document.querySelector(".signIn");
const signUp = document.querySelector(".signUP");

// user details
let userDetails = [];

// Show/Hide Password and change icon
pwShowHide.forEach((pwIcon) => {
  pwIcon.addEventListener("click", function (e) {
    pwInputs.forEach((pwInput) => {
      if (pwInput.type === "password") {
        pwInput.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwInput.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

// Swich Between Login and Registration Form
switchSignUp.addEventListener("click", function () {
  container.classList.add("form--active");
});

switchLogin.addEventListener("click", function () {
  container.classList.remove("form--active");
});

const nameRegExp = /\d+/;
const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const regEx = /^(?=.{8,25}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

const validate = function (e) {
  // Name Check
  if (e.id === "name" && e.value !== "") {
    if (nameRegExp.test(e.value)) {
      document.querySelector(`#${e.id}Error`).innerHTML =
        "Name shouldn't contain numbers";
      document.querySelector(`#${e.id}Error`).style.display = "block";
    } else {
      document.querySelector(`#${e.id}Error`).style.display = "none";
    }
  }

  // Password Check
  if (e.id === "password" && e.value !== "") {
    if (!e.value.match(regEx)) {
      document.querySelector(`#${e.id}Error`).innerHTML =
        "Password must be min 8 characters and must contain uppercase & lower, numbers and special characters";
      document.querySelector(`#${e.id}Error`).style.display = "block";
    } else {
      document.querySelector(`#${e.id}Error`).style.display = "none";
    }
  }
  // else if (e.value.match(regEx)) {
  //   if (nameRegExp.match(e.value) === strongRegex.test(value)) {
  //     document.querySelector("#password").style.background = "rebeccapurple";
  //   }
  // }

  // Confirm Password Check
  if (e.id === "confirmPW" && e.value !== "") {
    curPW = document.querySelector("#password").value;
    if (e.value === "") {
      document.querySelector(`#${e.id}Error`).innerHTML =
        "Password field cannot be empty";
    } else if (e.value !== curPW) {
      document.querySelector(`#${e.id}Error`).innerHTML =
        "Password fields must match";
      document.querySelector(`#${e.id}Error`).style.display = "block";
    } else {
      document.querySelector(`#${e.id}Error`).style.display = "none";
    }
  }
};
///////////////////////
// Register User
const registerAccount = function () {
  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userPW = document.getElementById("confirmPW").value;

  if (userName && userEmail && userPW) {
    userDetails.push(userName, userEmail, userPW);
    container.classList.remove("form--active");
  }
  console.log(userEmail, userPW);
  // alert(userDetails);
};

////////////////////////////
// Check user details
const form = document.getElementById("form-login");
const checkFunction = function () {
  let logEmail = document.getElementById("logEmail").value;
  let logPW = document.getElementById("logPass").value;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (logEmail === userDetails[1] && logPW === userDetails[2]) {
      // alert("You are logged in," + userDetails[0]);
      alert("You are logged in");
    } else {
      alert("User details not found!!");
    }
  });
};
