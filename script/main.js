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