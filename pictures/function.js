
   
   
   let popup = document.getElementById("popup-btn");

    function openPopup(){
        popup.classList.add("open-popup-container")
    }
    function closePopup(){
        openSlide();
        popup.classList.remove("open-popup-container")
    }
    function closePopups(){
      popup.classList.remove("open-popup-container")
  }

    var login = document.getElementById("login");
    function openSlide(){
        login.style.left="74.25%";
        login.style.transition = "0.8s";
    }
    function closingSlide(){
        login.style.left="100%";
        login.style.transition = "0.8s";
    }
    var create = document.getElementById("create-btn");
    
    function popCreate(){
        closingSlide();
        create.style.visibility = "visible";
    }
    function closingPop(){
        create.style.transition = "hidden 0.4s ease";
        create.style.visibility = "hidden"; 
    }
    
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let sliderIndex = 1;
showSlider(sliderIndex);


function plusSlider(m) {
  showSlider(sliderIndex += m);
}

function currentSlider(m) {
  showSlider(sliderIndex = m);
}
function showSlider(m) {
  let p;
  let slider = document.getElementsByClassName("mySlider");
  let dotts = document.getElementsByClassName("dott");
  if (m > slider.length) {sliderIndex = 1}
  if (m < 1) {sliderIndex = slider.length}
  for (p = 0; p < slider.length; p++) {
    slider[p].style.display = "none";
  }
  for (p = 0; p < dotts.length; p++) {
    dotts[p].className = dotts[p].className.replace(" actives", "");
  }
  slider[sliderIndex-1].style.display = "block";
  dotts[sliderIndex-1].className += " actives";
}

let slidingIndex = 1;
showSliding(slidingIndex);


function plusSliding(z) {
  showSliding(slidingIndex += z);
}


function currentSliding(z) {
  showSliding(slidingIndex = z);
}
function showSliding(z) {
  let o;
  let sliding = document.getElementsByClassName("mySliding");
  let dotter = document.getElementsByClassName("dotter");
  if (z > sliding.length) {slidingIndex = 1}
  if (z < 1) {slidingIndex = sliding.length}
  for (o = 0; o < sliding.length; o++) {
    sliding[o].style.display = "none";
  }
  for (o = 0; o < dotter.length; o++) {
    dotter[o].className = dotter[o].className.replace(" activer", "");
  }
  sliding[slidingIndex-1].style.display = "block";
  dotter[slidingIndex-1].className += " activer";
}

let slidsIndex = 1;
showSlids(slidsIndex);


function plusSlids(f) {
  showSlids(slidsIndex += f);
}


function currentSlids(f) {
  showSlids(slidsIndex = z);
}
function showSlids(f) {
  let k;
  let slids = document.getElementsByClassName("mySlids");
  let dotters = document.getElementsByClassName("dotters");
  if (f > slids.length) {slidsIndex = 1}
  if (f < 1) {slidsIndex = slids.length}
  for (k = 0; k < slids.length; k++) {
    slids[k].style.display = "none";
  }
  for (k = 0; k < dotters.length; k++) {
    dotters[k].className = dotters[k].className.replace(" activers", "");
  }
  slids[slidsIndex-1].style.display = "block";
  dotters[slidsIndex-1].className += " activers";
}

function makeRectVisible() {
  var rectElement = document.querySelector(".rect");
  if (rectElement.style.visibility==="hidden") {
    rectElement.style.visibility = "visible";
  }
  else {
    rectElement.style.visibility = "hidden";
  }
}

var loading = function(upload) {
  var images = document.getElementById('image-view');
  image.src = URL.createObjectURL(upload.target.files[0]);
};

function dropDown() {
  var dropping = document.querySelector(".subMenu");
  if (dropping.style.visibility==="hidden") {
    dropping.style.visibility = "visible";
  }
  else {
    dropping.style.visibility = "hidden";
  }
}
function scrollingBar(){
  window.location.href = "#blue";
}


 