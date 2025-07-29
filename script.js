let slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

