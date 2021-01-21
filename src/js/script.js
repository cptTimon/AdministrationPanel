const hamburger = document.querySelector('.fas');
const mobileNavUl = document.querySelector('.navbar-mobile ul');
var isOpen = false;
function toggleMobileMenu() {
  if(!isOpen) {
    mobileNavUl.classList.add('show');
    mobileNavUl.classList.remove('hide');
    isOpen = true;
  } else {
    mobileNavUl.classList.remove('show');
    mobileNavUl.classList.add('hide');
    isOpen = false;
  }
}
hamburger.addEventListener('click', function(){
  toggleMobileMenu();
});
