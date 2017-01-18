class SelectShare {
  getSocials() {
    return {
      title: [
        'facebook',
        'twitter',
        'google'
      ],
      url: [
        'https://www.facebook.com/sharer.php?u={url}',
        'https://twitter.com/intent/tweet?url={url}',
        'https://plus.google.com/share?url={url}'
      ]
    }
  }

  createTooltip() {
    let tooltip = document.createElement('div');
    let socials = ['facebook', 'twitter', 'google'];

    socials.map(social => {
      let element = document.createElement('a');

      element.classList.add(`selectshare-${social}`);
      tooltip.appendChild(element);
    });

    tooltip.classList.add('selectshare');
    document.body.appendChild(tooltip);
  };


  getTooltipPosition(axisX, axisY, element) {
    let elementStyle = element.style;

    elementStyle.position = 'absolute';
    elementStyle.left = `${axisX - 50}px`;
    elementStyle.top = `${axisY - 70}px`;
  };


  appendSocialAddress() {

  };


  getSelectedText() {
    return window.getSelection().toString();
  };


  static getCurrentPosition() {
    SelectShare.createTooltip();

    let element = document.querySelector('.selectshare');
    let selectShareText = SelectShare.getSelectedText().length;

    document.addEventListener('click', function (selectedText) {
      let selectedTextX = selectedText.clientX;
      let selectedTextY = selectedText.clientY;
      let classFromElement = element.classList;

      SelectShare.getTooltipPosition(selectedTextX, selectedTextY, element);

      if (selectShareText) {
        return classFromElement.remove('selectshare-open');
      }

      return classFromElement.toggle('selectshare-open');
    });
  };
}

SelectShare.getCurrentPosition();
