// <!-- home section start here  -->

// <!-- home section end here  -->
//! -------------------------<!-- blogs section start here  -->---------------------------------------------------------------------------
var swiper = new Swiper(".blogs-row", {
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var nextBtn = document.querySelector(".swiper-button-next");
var prevBtn = document.querySelector(".swiper-button-prev");

nextBtn.addEventListener("click", function () {
  swiper.slideNext();
});

prevBtn.addEventListener("click", function () {
  swiper.slidePrev();
});
// !-------------------------<!-- blogs section ends here  -->--------------------------------------------------------------------------

// *----------------------------------------- servies section start here -----------------------------------------
// Initialize Swiper
var swiper = new Swiper(".blog-posts-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Smooth scrolling on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// !----------------------------------------- servies section end here -----------------------------------------
