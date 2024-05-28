// let services = document.querySelector(".services");
// let about = document.querySelector(".about");
// let blogNews = document.querySelector(".Blog&News");
// let contact = document.querySelector(".contact");
// let account = document.querySelector(".account");
function f1() {}
document.querySelector(".services").onclick = f1;
function button1() {
  let age = prompt("Are you 18 years old?");
  if (age > 18) {
    alert("Hello,you can create account");
  } else {
    alert("Sorry,you cannot create an account");
  }
}
document.querySelector(".container").onclick = button1;
