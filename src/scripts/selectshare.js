var SelectShr = (function() {
  var $public  = {},
      $private = {};

  $private.init = function() {
    document.addEventListener('mouseup', function(el) {
      var x             = el.clientX;
      var y             = el.clientY;
      var selectionText = getSelectionText().length;
      var selectShr     = document.querySelector('.selectShr');

      selectShrPosition(x, y, selectShr);

      if(selectionText > 0)
        selectShr.classList.add('selectShrOpen');
      else
        selectShr.classList.remove('selectShrOpen');

      console.log(getSelectionText());
    });

    function getSelectionText() {
      window.getSelection
        return window.getSelection().toString();
    };

    function selectShrPosition(selectShrX, selectShrY, selectShr) {
      selectShr.style.position = 'absolute';
      selectShr.style.left     = (selectShrX - 40) + 'px';
      selectShr.style.top      = (selectShrY - 55) + 'px';
    };
  };

  $public.init = () => {
    var selectShrContainer = document.createElement('div');
    var facebook = document.createElement('a');
    var twitter  = document.createElement('a');
    var gplus    = document.createElement('a');

    facebook.classList.add('flaticon-circle');
    twitter.classList.add('flaticon-social');
    gplus.classList.add('flaticon-social-media');

    selectShrContainer.appendChild(facebook);
    selectShrContainer.appendChild(twitter);
    selectShrContainer.appendChild(gplus);

    selectShrContainer.classList.add('selectShr');
    document.body.appendChild(selectShrContainer);
    // selectShrContainer.appendChild(facebook);

    return $private.init();
  };

  return $public.init();
});