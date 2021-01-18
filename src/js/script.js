const hamburger = document.querySelector('.fas');
const mobileNavUl = document.querySelector('.navbar-mobile ul');


hamburger.addEventListener('click', function(){
  mobileNavUl.classList.toggle('show');
});
