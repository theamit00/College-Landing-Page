let menuLinks = document.getElementById('menu-links');
let xMark = document.querySelector('.fa-xmark');
let bars = document.querySelector('.fa-bars')


function showMenu(e){

    menuLinks.style.right = "0px";

}

function hideMenu(e){
    menuLinks.style.right = "-200px" ;
}

bars.addEventListener('click',showMenu);
xMark.addEventListener('click',hideMenu);