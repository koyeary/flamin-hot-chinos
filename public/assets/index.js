$(document).ready(function () {
  $(function () {
    $(window).scroll(function () {
      const winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else {
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });

  const transitionText = document.querySelector('.move-button');
  const items = document.querySelectorAll('.delay-visibility');

  // get vendor transition property
  const docElemStyle = document.documentElement.style;
  const transitionProp = typeof docElemStyle.transition == 'string' ?
    'transition' : 'WebkitTransition';

  transitionText.onclick = function () {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      // stagger transition with transitionDelay
      item.style[transitionProp + 'Delay'] = (i * 50) + 'ms';
      item.classList.toggle('delay-visibility');
    }
  };


}); 