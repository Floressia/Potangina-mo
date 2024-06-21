var login = document.getElementById("login");
    function openSlide(){
        login.style.left="69%";
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
  function dropDown() {
    var dropping = document.querySelector(".subMenu");
    if (dropping.style.visibility==="hidden") {
      dropping.style.visibility = "visible";
    }
    else {
      dropping.style.visibility = "hidden";
    }
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