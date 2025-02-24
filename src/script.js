const texts = ["FlowCharts", "HandWritten Notes", "Question Papers"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 200;
let erasingSpeed = 50;
let delayBetweenTexts = 1000;

function typeEffect() {
  document.getElementById("typewriter").style.animation = "blink 0.5s infinite";
  if (charIndex < texts[textIndex].length) {
    document.getElementById("typewriter").innerHTML +=
      texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, delayBetweenTexts);
  }
}

function eraseEffect() {
  document.getElementById("typewriter").style.animation = "blink 0.5s infinite";
  if (charIndex > 0) {
    document.getElementById("typewriter").innerHTML = texts[
      textIndex
    ].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

typeEffect();

const hamburgerMenu = document.getElementById("hamburgermenu");
const closeButton = document.getElementById("closebutton");
const hamburgerScroll = document.getElementById("hamburgerScroll");

hamburgerMenu.addEventListener("click", () => {
  document.querySelector("body").classList.replace("relative", "fixed");

  // Slide in and show
  hamburgerScroll.classList.remove(
    "translate-x-full",
    "opacity-0",
    "pointer-events-none",
  );
  hamburgerScroll.classList.add("translate-x-0", "opacity-100");
});

closeButton.addEventListener("click", () => {
  // Slide out
  hamburgerScroll.classList.remove("translate-x-0", "opacity-100");
  hamburgerScroll.classList.add("translate-x-full", "opacity-0");

  // Allow transition before disabling interaction
  setTimeout(() => {
    hamburgerScroll.classList.add("pointer-events-none");
    document.querySelector("body").classList.replace("fixed", "relative");
  }, 500); // Match duration-500
});
