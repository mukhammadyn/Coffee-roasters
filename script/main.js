var elHeaderNav = document.querySelector('.site-header');
var elHeaderBtn = document.querySelector('.js-toggler-btn');

if (elHeaderBtn) {
  elHeaderBtn.addEventListener('click', function() {
    elHeaderNav.classList.toggle('site-header_open');
  })
}


var elsOrderBtn = document.querySelectorAll('.js-order-btn');

var elsOrderCard = document.querySelectorAll('.order-section__form-cards');

elsOrderBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    elsOrderCard.forEach(function (removeActive) {
      removeActive.classList.remove('order-section__form-cards--open');
    });

    button.closest('.order-section__form-cards').classList.add('order-section__form-cards--open');
  });
});

var elOrderSubmit = document.querySelector('.order-section__submit');

var elOrderModal = document.querySelector('.order-modal');

elOrderSubmit.addEventListener('click', function(evt){
  evt.preventDefault();
  elOrderModal.classList.add('order-modal--open');
})


window.onclick = function(event) {
  if (event.target == elOrderModal) {
    elOrderModal.classList.remove('order-modal--open');
  }
}