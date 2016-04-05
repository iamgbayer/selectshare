;(function() {
  'use strict';

  function hasClass(element, class) {
    return !!element.className.match(new RegExp('(\\s|^)'+ class +'(\\s|$)'));
  };

  function addClass(element, class) {
    if (!hasClass(element, class)) element.className += ' ' + class;
  };

  function removeClass(element, class) {
    if (hasClass(element, class)) {
      var reg = new RegExp('(\\s|^)' + class + '(\\s|$)');
      element.className = element.className.replace(reg, ' ');
    };
  };

  document.addEventListener('click', function(el) {
    var x             = el.clientX;
    var y             = el.clientY;
    var selectionText = getSelectionText().length;
    var appContent    = document.querySelector('body');
    var selectShr     = document.querySelector('.selectShr');

    selectShrPosition(x, y, selectShr);

    if (selectionText > 0)
      selectShr.addClass('selectShrOpen');
    else
      selectShr.removeClass('selectShrOpen');

    console.log(getSelectionText());
  });

  appContent.appendChild('');

  function getSelectionText() {
    window.getSelection 
  	  return window.getSelection().toString();
  };
})();
  $('body').append('<div class="tooltip"><a href=""><i class="icon-facebook"></i></a><a href=""><i class="icon-twitter"></i></a><a href=""><i class="icon-google-plus"></i></a></div>');


function selectShrPosition(selectShrX, selectShrY, selectShr) {
  tooltip.style.position = 'absolute';
  tooltip.style.left = (xPos - 40) + 'px';
  tooltip.style.top = (yPos - 55) + 'px';
};