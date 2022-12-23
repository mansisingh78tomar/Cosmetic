let menu = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fas-times');
    navBar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active'); 
}

let slides=document.querySelectorAll('.home .slide');
let index=0;

function next(){
    slides[index].classList.remove('active');
    index=(index + 1) % slides.length;
    slides[index].classList.add('active')

}

function prev(){
    slides[index].classList.remove('active');
    index=(index-1 + slides.length) % slides.length;
    slides[index].classList.add('active')

}