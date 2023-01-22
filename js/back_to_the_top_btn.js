let backToTheTopButton = document.querySelector("#to-the-top-btn");

window.addEventListener("scroll", (event) => {
  let height = window.scrollY;

  if (height > 500) {
    backToTheTopButton.style.display = "flex";
  } else {
    backToTheTopButton.style.display = "none";
  }
});
