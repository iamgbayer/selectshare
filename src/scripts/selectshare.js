const selectShare = () => {
  const $public  = {}
  const $private = {}

  $private.init = () => {
    document.addEventListener('mouseup', el => {
      let x = el.clientX
      let y = el.clientY
      let selectionText = getSelectionText().length
      let selectShr = document.querySelector('.selectshare')

      selectShrPosition(x, y, selectShr);

      if(selectionText > 0)
        selectShr.classList.add('selectshare-open');
      else
        selectShr.classList.remove('selectshare-open');

      console.log(getSelectionText());
    });

    function getSelectionText() {
      window.getSelection
        return window.getSelection().toString();
    };

    function selectShrPosition(selectShrX, selectShrY, selectShr) {
      selectShr.style.position = 'absolute'
      selectShr.style.left = (selectShrX - 40) + 'px'
      selectShr.style.top = (selectShrY - 55) + 'px'
    };
  }

  $public.init = () => {
    let selectShrContainer = document.createElement('div')
    let facebook = document.createElement('a')
    let twitter  = document.createElement('a')
    let gplus    = document.createElement('a')

    facebook.classList.add('flaticon-circle')
    twitter.classList.add('flaticon-social')
    gplus.classList.add('flaticon-social-media')

    selectShrContainer.appendChild(facebook)
    selectShrContainer.appendChild(twitter)
    selectShrContainer.appendChild(gplus)

    selectShrContainer.classList.add('selectShr')
    document.body.appendChild(selectShrContainer)
    // selectShrContainer.appendChild(facebook)

    return $private.init()
  }

  return $public.init()
}