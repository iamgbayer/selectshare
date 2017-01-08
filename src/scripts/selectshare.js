class SelectShare {
  static createTooltip () {
    let tooltip = document.createElement('div');
    let socials = ['facebook', 'twitter', 'google'];

    socials.map(social => {
      let element = document.createElement('a');

      element.classList.add(`selectshare-${social}`);
      tooltip.appendChild(element);
    });

    tooltip.classList.add('selectshare');
    document.body.appendChild(tooltip);
  }

  static getTooltipPosition (textHasSelectedX, textHasSelectedY, selectShareElement) {
    let selectShareStyle = selectShareElement.style;

    selectShareStyle.position = 'absolute';
    selectShareStyle.left = `${textHasSelectedX - 50}px`;
    selectShareStyle.top = `${textHasSelectedY - 70}px`;
  }

  appendSocialAddress () {

  }

  static getSelectedText () {
    return window.getSelection().toString();
  }

  static getCurrentPosition () {
    this.createTooltip();

    let selectShareElement = document.querySelector('.selectshare');
    let selectShareText = this.getSelectedText().length;

    document.addEventListener('click', function (textHasSelected) {
      let textHasSelectedX = textHasSelected.clientX;
      let textHasSelectedY = textHasSelected.clientY;
      let selectShareClass = selectShareElement.classList;

      SelectShare.getTooltipPosition(textHasSelectedX, textHasSelectedY, selectShareElement);

      if (selectShareText) {
        return selectShareClass.remove('selectshare-open');
      }

      return selectShareClass.toggle('selectshare-open');
    });
  }
}

SelectShare.getCurrentPosition();
