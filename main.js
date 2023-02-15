let bulletsContainer = document.querySelector(".bullets");

let imageContainer = document.querySelector(".image-container");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let images = document.querySelectorAll(".image-container img");
let arrOfImg = Array.from(images);
let numOfImages = imageContainer.children.length;

for (let i = 0; i < numOfImages; i++) {
  let span = document.createElement("span");
  bulletsContainer.appendChild(span);
  if (i == 0) {
    span.classList.add("active");
  }
}

next.addEventListener("click", nextSlide);
next.addEventListener("click", nextBullet);
prev.addEventListener("click", prevSlide);
prev.addEventListener("click", prevBullet);

function nextSlide() {
  let activeImg = document.querySelector(".image-container img.active");

  if (imageContainer.lastElementChild.classList.contains("active")) {
    next.classList.add("disable");

    return false;
  } else {
    prev.classList.add("disable");
    next.classList.remove("disable");

    images.forEach((img) => {
      img.classList.remove("active");
    });

    activeImg.nextElementSibling.classList.add("active");
  }
}

function prevSlide() {
  let activeImg = document.querySelector(".image-container img.active");

  if (imageContainer.firstElementChild.classList.contains("active")) {
    prev.classList.add("disable");
    return false;
  } else {
    prev.classList.remove("disable");
    next.classList.add("disable");
    images.forEach((img) => {
      img.classList.remove("active");
    });
    activeImg.previousElementSibling.classList.add("active");
  }
}
let bullets = Array.from(document.querySelectorAll(".bullets span"));
function nextBullet() {
  let activBullet = document.querySelector(".bullets span.active");
  if (bulletsContainer.lastElementChild.classList.contains("active")) {
    return false;
  } else {
    bullets.forEach((b) => {
      b.classList.remove("active");
    });
    activBullet.nextElementSibling.classList.add("active");
  }
}
function prevBullet() {
  let activBullet = document.querySelector(".bullets span.active");
  if (bulletsContainer.firstElementChild.classList.contains("active")) {
    return false;
  } else {
    bullets.forEach((b) => {
      b.classList.remove("active");
    });
    activBullet.previousElementSibling.classList.add("active");
  }
}

