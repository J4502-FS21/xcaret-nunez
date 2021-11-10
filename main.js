"use strict";

var imageHolders = document.querySelectorAll(".imageHolder");

var nextButton = document.getElementById("button_next");
var previousButton = document.getElementById("button_previous");

var currentImage = 0;

function imageChangeNext(){
  imageHolders.forEach((item, i) => {
    if (i === currentImage) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  currentImage = currentImage + 1;
  if (currentImage === imageHolders.length) {
    currentImage = 0;
  }
}

nextButton.onclick = imageChangeNext;

imageChangeNext();

function imageChangePrevious(){
  console.log(currentImage);
  imageHolders[currentImage].style.display = "none";
  if (currentImage === 0) {
    currentImage = Number(imageHolders.length - 1);
  } else {
    currentImage = currentImage - 1;
  }
  imageHolders[currentImage].style.display = "block";
}

previousButton.onclick = imageChangePrevious;
