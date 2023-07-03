$(document).ready(function() {
  $(".sub-btn").click(function() {
    $(this).next(".sub-menu").slideToggle();
  });

  $(".more-btn").click(function() {
    $(this).next(".more-menu").slideToggle();
  });

  $(window).resize(function() {
    // Código para manipular a responsividade aqui
    // Exemplo:
    if ($(window).width() < 768) {
      // Código para telas menores que 768 pixels de largura
    } else {
      // Código para telas maiores ou iguais a 768 pixels de largura
    }
  });
});

$(function() {
  var menu = $(".menu");
  var menuBtn = $(".menu-btn");
  var closeBtn = $(".close-btn");

  menuBtn.click(function() {
    menu.addClass("active");
  });

  closeBtn.click(function() {
    menu.removeClass("active");
  });

  $(window).scroll(function() {
    var header = $("header");
    header.toggleClass("sticky", window.scrollY > 0);
  });
});
