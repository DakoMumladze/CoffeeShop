let btn = document.querySelector('#btnWrap');
let wrapper = document.querySelector('#btn');
let logo = document.querySelector('#logo');
let navbar = document.querySelector('#navigation');
btn.addEventListener("click",function(){
    if(window.innerWidth < 768){
        btn.classList.toggle('d-block');
        logo.classList.toggle('d-block');
        navbar.classList.toggle('d-block');
    }
});