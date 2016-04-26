var SelectShr = (function(elements) {
  const $public  = {},
        $private = {};

  $private.init = function() {
    document.addEventListener('mouseup', function(el) {
      var x             = el.clientX;
      var y             = el.clientY;
      var selectionText = getSelectionText().length;
      var selectShr     = document.querySelector('.selectShr');

      selectShrPosition(x, y, selectShr);

      if(selectionText < 10)
        selectShr.classList.remove('selectShrOpen');
      else
        selectShr.classList.add('selectShrOpen');
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
    var twitter  = document.createElement('a');
    var gplus    = document.createElement('a');
    const currentPageUrl = window.location.href;

    function openCurrentUrl(social, url) {
      social.addEventListener('click', (e) => {
        e.preventDefault();

        window.open(url);
      });
    };

    function addFacebook() {
      let facebookWidthWindow  = (window.innerWidth / 2) - 225;
      let facebookHeightWindow = (window.innerHeight / 2) - 275;
      let facebookElement = document.createElement('a');
      let facebookUrl     = `http://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}, fbShareWindow, height=450, width=550, top=${facebookHeightWindow}, left=${facebookWidthWindow}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`;

      facebookElementContent = `<a class="flaticon-circle" title="Share in Facebook" target="_blank" href="${facebookUrl}"></a>`;
      facebookElement.innerHTML = facebookElementContent;

      selectShrContainer.appendChild(facebookElement);
      openCurrentUrl(facebookElement, facebookUrl);
    };

    addFacebook();

    twitter.classList.add('flaticon-social');
    gplus.classList.add('flaticon-social-media');

    twitter.setAttribute('title', 'Share in Twitter');
    gplus.setAttribute('title', 'Share in Google+');

    selectShrContainer.appendChild(twitter);
    selectShrContainer.appendChild(gplus);

    selectShrContainer.classList.add('selectShr');
    document.body.appendChild(selectShrContainer);

    return $private.init();
  };

  return $public.init();
});