const lineTrans = document.querySelector('.lineTrans')    
const tableHide = document.querySelector('.rosterBox')
const coachHide = document.querySelector('.coachesList')
const Basta = document.querySelector('.successful')

function slide(){
    lineTrans.style.marginLeft = "175px";
    lineTrans.style.transition = "0.5s";
    tableHide.style.visibility = "hidden";
    coachHide.style.visibility = "visible";
  }
  function slide1(){
    lineTrans.style.marginLeft = "73px";
    lineTrans.style.transition = "0.5s";
    tableHide.style.visibility = "visible";
    coachHide.style.visibility = "hidden";
  }

function peps(){
  scrollBar()
  Basta.style.visibility = "visible";
}
function ceps(){
  Basta.style.visibility = "hidden"; 
}

function scrollBar(){
  window.location.href = "#operario";
}