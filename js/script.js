//Mobile menu
$('.header__menu').click(function() {
  $(this).toggleClass('header__menu--close');
  $('.menu').slideToggle();
  $('body').toggleClass('overflow');
})

//$(window).scroll(function(){
//  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
//    $('.header').addClass('header--scroll');
//  } else {
//    $('.header').removeClass('header--scroll');
//  };
//});

//Parallax
let bg1 = document.querySelector('.promo__drop--left');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bg2 = document.querySelector('.promo__drop--right');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});
let bg3 = document.querySelector('.promo__drop--top');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});
let bg4 = document.querySelector('.promo__drop--round1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg4.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});
let bg5 = document.querySelector('.promo__drop--round2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg5.style.transform = 'rotate(90deg) translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});
let bg6 = document.querySelector('.promo__drop--round3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg6.style.transform = 'rotate(-90deg) translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});
let bg7 = document.querySelector('.invest__drop--left');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg7.style.transform = 'scaleX(-1) translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bg8 = document.querySelector('.invest__drop--right');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg8.style.transform = 'scaleX(-1) translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});
let bg9 = document.querySelector('.invest__drop--round4');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg9.style.transform = 'rotate(-90deg) translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});
let bg10 = document.querySelector('.invest__drop--round1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg10.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});
let bg11 = document.querySelector('.invest__drop--round2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg11.style.transform = 'rotate(90deg) translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bg12 = document.querySelector('.invest__drop--round3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg12.style.transform = 'rotate(180deg) translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});