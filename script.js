// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
}

// SAFE MOBILE MENU CLOSE
document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("navLinks");

  if (menu) {
    const navLinks = menu.querySelectorAll("a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// SCROLL REVEAL
// SCROLL REVEAL
window.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal, .blur-reveal");

  if (reveals.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.10 });

    reveals.forEach(function (reveal) {
      observer.observe(reveal);
    });
  }
});


// TESTIMONIAL SLIDER
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {

    let current = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      slides[index].classList.add("active");
      dots[index].classList.add("active");
      current = index;
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Auto rotate
    setInterval(() => {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }, 6000);

  }

});