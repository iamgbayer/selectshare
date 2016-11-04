class SelectShare {
  static createTooltip () {
    let selectShareContainer = document.createElement('div');
    let facebook = document.createElement('a');
    let twitter = document.createElement('a');
    let googlePlus = document.createElement('a');

    facebook.classList.add('flaticon-circle');
    twitter.classList.add('flaticon-social');
    googlePlus.classList.add('flaticon-social-media');

    selectShareContainer.appendChild(facebook);
    selectShareContainer.appendChild(twitter);
    selectShareContainer.appendChild(googlePlus);

    selectShareContainer.classList.add('select-share');
    document.body.appendChild(selectShareContainer);
  }

  getTooltipPosition (textHasSelectedX, textHasSelectedY, selectShareElement) {
    let selectShareStyle = selectShareElement.style;

    selectShareStyle.position = 'absolute';
    selectShareStyle.left = `${textHasSelectedX}px`;
    selectShareStyle.top = `${textHasSelectedY}px`;
  }

  static getSelectedText () {
    return window.getSelection().toString()
  }

  static getCurrentPosition () {
    this.createTooltip();

    let selectShareElement = document.querySelector('.select-share');
    let selectShareText = this.getSelectedText.length;

    document.addEventListener('mouseup', function (textHasSelected) {
      let textHasSelectedX = textHasSelected.clientX;
      let textHasSelectedY = textHasSelected.clientY;
      let selectShareClass = selectShareElement.classList;

      new SelectShare().getTooltipPosition(textHasSelectedX, textHasSelectedY, selectShareElement);

      if (!selectShareText) {
        return selectShareClass.remove('select-share-open');
      } else {
        return selectShareClass.add('select-share-open');
      }
    })
  }
}

SelectShare.getCurrentPosition();