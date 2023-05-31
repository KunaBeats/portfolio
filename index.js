const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const closeMenuViaLinks = document.querySelectorAll(".close-menu");
const navEl = document.querySelector("nav");
const swipeRight = document.querySelector(".swipe-right");
const swipeLeft = document.querySelector(".swipe-left");

/* Burger Menu */

menuBtn.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navEl.classList = "nav";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});

closeMenuViaLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navEl.classList = "nav";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  });
});

/* Projects Slide Show */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

swipeRight.addEventListener("click", () => plusSlides(1));
swipeLeft.addEventListener("click", () => plusSlides(-1));
