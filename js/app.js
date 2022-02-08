
const slider =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('li');
    const scrollNav= document.querySelector('.navbar');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else
            link.style.animation=
            `navLinkFade 0.5s ease forwards ${index/7+0.7}s`;
            });
    }); 
    window.addEventListener('scroll',()=>{
      scrollNav.classList.toggle('navbar-sticky', window.scrollY>0);
    });
}

slider();

// const app =() =>{
// }


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scroll>20){
            $('.navbar').addClass("sticky");
        }else{
            
        }
    });
});

