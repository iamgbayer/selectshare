;(function() {
  'use strict';

  var selectShr = (function(container) {
    var $public  = {},
        $private = {};

    $private.init = function() {
      if(!container.length)
        return;

      document.addEventListener('click', function(el) {
        var x             = el.clientX;
        var y             = el.clientY;
        var selectionText = getSelectionText().length;
        var appContent    = document.querySelector('body');
        var selectShr     = document.querySelector('.selectShr');

        selectShrPosition(x, y, selectShr);

        if(selectionText > 0)
          selectShr.addClass('selectShrOpen');
        else
          selectShr.removeClass('selectShrOpen');

        console.log(getSelectionText());
      });

      function getSelectionText() {
        window.getSelection
          return window.getSelection().toString();
      };

      function selectShrPosition(selectShrX, selectShrY, selectShr) {
        selectShr.style.position = 'absolute';
        selectShr.style.left     = (xPos - 40) + 'px';
        selectShr.style.top      = (yPos - 55) + 'px';
      };
    };

    $public.init = function() {
      var selectShrContainer = createElement('div');

      appContent.appendChild('');
    };
  });
})();

// $('body').append('<div class="tooltip"><a href=""><i class="icon-facebook"></i></a><a href=""><i class="icon-twitter"></i></a><a href=""><i class="icon-google-plus"></i></a></div>');
