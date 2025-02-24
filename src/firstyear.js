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
