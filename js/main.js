const accordBtn1 = document.querySelector('.tab1');
const accordBtn2 = document.querySelector('.tab2');
const accordBtn3 = document.querySelector('.tab3');
const accordBtn4 = document.querySelector('.tab4');
const tabsContent1 = document.querySelector('.our-accordion1');
const tabsContent2 = document.querySelector('.our-accordion2');
const tabsContent3 = document.querySelector('.our-accordion3');
const tabsContent4 = document.querySelector('.our-accordion4');
accordBtn1.addEventListener('click', function(e){
  e.preventDefault();
  accordBtn1.classList.add('active')
  accordBtn2.classList.remove('active');
  accordBtn3.classList.remove('active');
  tabsContent1.classList.remove('hiiden');
  tabsContent2.classList.add('hiiden');
  tabsContent3.classList.add('hiiden');
  tabsContent4.classList.add('hiiden');
  accordBtn4.classList.remove('active');
});
accordBtn2.addEventListener('click', function(e){
  e.preventDefault();
  accordBtn2.classList.add('active')
  accordBtn1.classList.remove('active');
  accordBtn3.classList.remove('active');
  tabsContent1.classList.add('hiiden');
  tabsContent2.classList.remove('hiiden');
  tabsContent4.classList.add('hiiden');
  accordBtn4.classList.remove('active');
  tabsContent3.classList.add('hiiden');
});
accordBtn3.addEventListener('click', function(e){
  e.preventDefault();
  accordBtn1.classList.remove('active')
  accordBtn2.classList.remove('active');
  accordBtn3.classList.add('active');
  tabsContent1.classList.add('hiiden');
  tabsContent2.classList.add('hiiden');
  tabsContent3.classList.remove('hiiden');
  tabsContent4.classList.add('hiiden');
  accordBtn4.classList.remove('active');
});
accordBtn4.addEventListener('click', function(e){
  e.preventDefault();
  accordBtn1.classList.remove('active')
  accordBtn2.classList.remove('active');
  accordBtn3.classList.remove('active');
  accordBtn4.classList.add('active');
  tabsContent1.classList.add('hiiden');
  tabsContent2.classList.add('hiiden');
  tabsContent3.classList.add('hiiden');
  tabsContent4.classList.remove('hiiden');
});
$(document).ready(function(){
  $(".header-burger").click(function(){
     $( ".header-nav").slideToggle();
     $(".mobile-btn").toggleClass("mobile-btn--active");
});
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      
      panel.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
     
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
    } 
  });
}
