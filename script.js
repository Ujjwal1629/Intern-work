function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

window.addEventListener("scroll", reveal);
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".title-image", { delay: 500, origin: "right" });
ScrollReveal().reveal(".title-image-2", { delay: 500, origin: "left" });

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//features slider --------------------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    635: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },
});

ScrollReveal({
  reset: true,
  distance: "200px",
  duration: 2500,
  delay: 100,
});
ScrollReveal().reveal(".f-download", { delay: 100, origin: "bottom" });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElement = document.querySelectorAll(".col");
hiddenElement.forEach((el) => observer.observe(el));

//TESTIMONIAL JQ/JS
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-cls");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-cls");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-cls");
  userTexts[i].classList.add("active-cls");
}

ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false,
});

ScrollReveal().reveal(".info", {
  duration: 3000,
  move: 0,
});

ScrollReveal().reveal("#Features", {
  duration: 2000,
  move: 0,
});

ScrollReveal().reveal(".playback", {
  duration: 2000,
  scale: 0.85,
});

ScrollReveal().reveal("#Downloads", {
  delay: 500,
  duration: 1000,
  rotate: {
    y: 20,
  },
});

ScrollReveal().reveal(".TESTIMONIAL", {
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5,
});
