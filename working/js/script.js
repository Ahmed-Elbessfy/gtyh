// Variables
const main = document.querySelector("main"),
  header = document.querySelector("header"),
  percent = document.querySelector(".percent"),
  programSteps = document.querySelector(".program-steps");
// to prevent repeating percent count animation
let counterDone = false,
  toggleTxtProgramTimeOut;

// Functions

//percent animation
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = `
        <p class='percent-num'>+${Math.floor(
          progress * (end - start) + start
        )}</p>
          <p class='percent-mark'>%</p>
          <p class='month'>3 <br> شهور</p>
        `;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// toggle show program txt
const toggleShow = (e) => {
  // clear timeout for hiding txt
  clearTimeout(toggleTxtProgramTimeOut);
  // data-show value of clicked element
  const showN = e.target.dataset.show;
  // if clicked item has data-show
  if (showN) {
    // element with data-show attribute to check if it is exist for the first time click
    const shown = document.querySelector(".show");
    // if there is a button clicked, hide its new to show the new one
    if (shown) shown.classList.remove("show");
    // show corresponding text
    document
      .querySelector(`.show-target-${parseInt(showN)}`)
      .classList.add("show");
    // hide txt after 3 seconds
    toggleTxtProgramTimeOut = setTimeout(() => {
      document.querySelector(".show").classList.remove("show");
    }, 3000);
  }
};

// Events

// on page load
document.addEventListener("DOMContentLoaded", () => {
  // move main content down to apply scroll effect
  main.style = `margin-top:${header.offsetHeight + 200}px`;
});

document.addEventListener("scroll", () => {
  // display percent animation when show in window
  const startAnimationAt =
    percent.offsetTop - window.innerHeight + percent.offsetHeight;
  let addScaleUpClassTimeout, removeScaleUpClassTimeout;

  if (window.scrollY >= startAnimationAt && !counterDone) {
    counterDone = true;
    /* change percent */
    animateValue(percent, 60, 96, 3000);
    clearTimeout(addScaleUpClassTimeout);
    clearTimeout(removeScaleUpClassTimeout);
    addScaleUpClassTimeout = setTimeout(() => {
      percent.classList.add("scaleup");
      // remove scaleup class
      removeScaleUpClassTimeout = setTimeout(() => {
        percent.classList.remove("scaleup");
      }, 500);
    }, 3000);
  }
});

programSteps.addEventListener("click", toggleShow);
