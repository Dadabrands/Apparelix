// // Add this JavaScript code to handle the slideshow functionality
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("testimonial-item");
  var dots = document.getElementsByClassName("testimonial-dot");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.opacity = 1;
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 20000); // Change slide every 20 seconds
}

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}
