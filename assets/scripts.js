$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  const $toTop = $("button.toTop");
  const $navbar = $("nav.navbar");
  const $masthead = $(".masthead");

  $toTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(window).on("scroll", debounce(scrollEffects, 300));
  scrollEffects();

  function scrollEffects() {
    $toTop.toggleClass("fixed", window.scrollY > 100);
    $navbar.toggleClass("balls", window.scrollY > $masthead.outerHeight());
  }
});

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
