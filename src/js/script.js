const hamburger = document.querySelector('.fas');
console.log(hamburger);
const mobileNavUl = document.querySelector('.navbar-mobile ul');
console.log(mobileNavUl);


hamburger.addEventListener('click', function(){
  mobileNavUl.classList.toggle('show');
});
