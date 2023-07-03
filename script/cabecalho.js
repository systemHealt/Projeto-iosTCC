window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var headerHeight = header.offsetHeight;
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= headerHeight * 0.9) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
