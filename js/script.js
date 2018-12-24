let btn = document.querySelector('#btnWrap');
let navbar = document.querySelector('#navigation');
let navList = document.querySelector('.border');
btn.addEventListener("click",function(){
    if(window.innerWidth < 768){
        navbar.classList.toggle('d-block');
        navList.classList.toggle("d-mod");
    }
});
