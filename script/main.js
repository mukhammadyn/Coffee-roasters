var elHeaderNav = document.querySelector('.site-header');
var elHeaderBtn = document.querySelector('.js-toggler-btn');

if (elHeaderBtn) {
  elHeaderBtn.addEventListener('click', function() {
    elHeaderNav.classList.toggle('site-header_open');
  })
}