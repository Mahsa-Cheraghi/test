document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
      usernameError.textContent = "نام کاربری نباید خالی باشد";
      event.preventDefault();
    }

    if (password === "") {
      passwordError.textContent = "رمز عبور نباید خالی باشد";
      event.preventDefault();
    } else if (password.length < 8) {
      passwordError.textContent = "رمز عبور باید حداقل 8 کاراکتر باشد";
      event.preventDefault();
    }
  });

const usernameError2 = document.getElementById("usernameError2");
const lastnameError2 = document.getElementById("lastnameError2");
const emailErrorr2 = document.getElementById("emailErrorr2");
const passwordError2 = document.getElementById("passwordError2");
function validateForm() {
  var firstName = document.querySelector(
    'input[type="text"][placeholder="first Name"]'
  ).value;
  var lastName = document.querySelector(
    'input[type="text"][placeholder="last Name"]'
  ).value;
  var email = document.querySelector(
    'input[type="email"][placeholder="email"]'
  ).value;
  var password = document.getElementById("password").value;
  if (firstName.length < 2) {
    usernameError2.textContent = "نام نباید کمتر از 2 کاراکتر باشد";
    return false;
  } else {
    usernameError2.textContent = " ";
  }

  if (lastName.length < 2) {
    lastnameError2.textContent = "نام خوانوادگی نباید کمتر از 2 حرف باشد";
    return false;
  } else {
    lastnameError2.textContent = " ";
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    emailErrorr2.textContent = "لطفا ایمیل معتبر وارد کنید";
    return false;
  } else {
    emailErrorr2.textContent = " ";
  }
  if (password.length < 6) {
    passwordError2.textContent = "رمز عبور نباید کمتراز 8 کاراکتر باشد";
    return false;
  } else {
    passwordError2.textContent = " ";
  }

  return true;
}
///////////////////////5

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".cardprice");

  const showCardsButton = document.getElementById("showCardsButton");

  const showAllCardsButton = document.getElementById("showAllCardsButton");

  function showCards() {
    cards.forEach((card, index) => {
      if (index==2) {
        card.classList.add("show-card");
        card.classList.remove("hide-card");
      } else {
        card.classList.remove("show-card");
        card.classList.add("hide-card");
      }
    });
  }
  function showAllCards() {
    cards.forEach(card => {
      card.classList.remove("hide-card");
    });
  }

 
  showCardsButton.addEventListener("click", showCards);

  showAllCardsButton.addEventListener("click", showAllCards);
});
