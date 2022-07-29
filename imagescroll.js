let MAX_LENGTH = 4;
let currentImage = 1;
let lastImage = MAX_LENGTH;
let slider;
setInterval(function(){
  lastImage = currentImage;
  currentImage++;
  if (currentImage > MAX_LENGTH) {
    currentImage = 1;
  }
  let String1 = "slide" + lastImage;
  let String2 = "slide" + currentImage;
  //console.log(String2);
  slider = document.getElementById(String1);
  slider.checked = false;
  slider = document.getElementById(String2);
  slider.checked = true;
}, 6000);