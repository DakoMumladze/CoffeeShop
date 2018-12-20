let btn = document.querySelector('#btnWrap');
let logo = document.querySelector('#logo');
let navbar = document.querySelector('#navigation');
let navList = document.querySelector('.border');
btn.addEventListener("click",function(){
    if(window.innerWidth < 768){
        logo.classList.toggle('d-block');
        navbar.classList.toggle('d-block');
        navList.classList.toggle("d-mod");
    }
});