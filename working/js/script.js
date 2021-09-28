// Variables
const main = document.querySelector("main"),
  header = document.querySelector("header");

// Functions

// Events

// on page load
document.addEventListener("DOMContentLoaded", () => {
  // move main content down to apply scroll effect
  main.style = `margin-top:${header.offsetHeight}px`;
});
