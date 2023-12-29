let offset = 0;
const heroImg = document.querySelector(".hero-image");
const sliderLine = document.querySelector(".hero-slider-line");

function init() {
  let imgWidth = heroImg.offsetWidth;
  const images = document.querySelectorAll(".hero-image");
  console.log(imgWidth);
  console.log("resize");
  sliderLine.style.width = imgWidth * images.length + "px";
  images.forEach((item) => {
    item.style.width = imgWidth + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", rollSlider);

function rollSlider() {
  let imgWidth = heroImg.offsetWidth;
  offset = offset + imgWidth;

  if (offset > imgWidth * 3) {
    offset = 0;
  }

  sliderLine.style.left = -offset + "px";
}

setInterval(rollSlider, 4000);