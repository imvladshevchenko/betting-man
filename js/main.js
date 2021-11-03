var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");

AOS.init();

if (window.innerWidth > 1200) {
  step1.setAttribute("data-aos", "fade-right");
  step2.setAttribute("data-aos", "fade-up");
  step3.setAttribute("data-aos", "fade-left");
  setTimeout(() => {
    AOS.refreshHard();
  }, 500);
}

if (window.innerWidth <= 768) {
  step1.setAttribute("data-aos", "fade-right");
  step2.setAttribute("data-aos", "fade-left");
  step3.setAttribute("data-aos", "fade-right");
  setTimeout(() => {
    AOS.refreshHard();
  }, 500);
}

emoveAttribute;
