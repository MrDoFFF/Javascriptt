document.getElementById("red").onclick = function () {
  document.getElementById("car-image").style.filter =
    "sepia(100%) saturate(200%) hue-rotate(0deg)";
};

document.getElementById("blue").onclick = function () {
  document.getElementById("car-image").style.filter =
    "sepia(100%) saturate(200%) hue-rotate(180deg)";
};

document.getElementById("black").onclick = function () {
  document.getElementById("car-image").style.filter = "grayscale(100%)";
};
document.getElementById("green").onclick = function () {
  document.getElementById("car-image").style.filter =
    "sepia(100%) saturate(200%) hue-rotate(150deg)";
};

document.getElementById("purple").onclick = function () {
  document.getElementById("car-image").style.filter =
    "sepia(100%) saturate(200%) hue-rotate(270deg)";
};

document.getElementById("orange").onclick = function () {
  document.getElementById("car-image").style.filter =
    "sepia(100%) saturate(200%) hue-rotate(45deg)";
};

const firstCar = document.querySelector(".img0");
const afterCar = document.querySelectorAll(".img1");
afterCar.forEach(function (img) {
  img.addEventListener("click", function () {
    firstCar.setAttribute("src", img.getAttribute("src"));
  });
});

document.getElementById("car-image").addEventListener("click", function () {
  let audio = document.getElementById("car-sound");
  audio.play().catch(function (error) {
    console.log("Audio islemir ", error);
  });

  let car = document.getElementById("car-image");
  car.classList.add("bounce");
  setTimeout(function () {
    car.classList.remove("bounce");
  }, 500);
});
