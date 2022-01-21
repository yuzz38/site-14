$(document).ready(function(){
    $(".header-burger").click(function(){
       $( ".header-nav").slideToggle();
       $(".mobile-btn").toggleClass("mobile-btn--active");
  });
  });