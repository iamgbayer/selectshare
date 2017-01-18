class SelectShare {
  getSocials() {
    return {
      title: [
        'facebook',
        'twitter',
        'google'
      ],
      url: [
        'https://www.facebook.com/sharer.php?u=',
        'https://twitter.com/intent/tweet?url=',
        'https://plus.google.com/share?url='
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


  appendSocialAddress() {

  };


  getSelectedText() {
    return window.getSelection().toString().length;
  };


  /**
   * Here, the new position is set
   */
  getTooltipPosition(axisX, axisY, element) {
    let elementStyle = element.style;

    elementStyle.position = 'absolute';
    elementStyle.left = `${axisX - 50}px`;
    elementStyle.top = `${axisY - 70}px`;
  };


  /**
   * This method retrieve the current position
   * from selected text
   */
  getCurrentPosition() {
    this.createTooltip();

    let element = document.querySelector('.selectshare');
    let selectShareText = this.getSelectedText();

    document.addEventListener('click', function (selectedText) {
      let selectedTextX = selectedText.clientX;
      let selectedTextY = selectedText.clientY;
      let classFromElement = element.classList;

      this.getTooltipPosition(selectedTextX, selectedTextY, element);

      if (selectShareText) {
        return classFromElement.remove('selectshare-open');
      }

      return classFromElement.toggle('selectshare-open');
    });
  };
}

new SelectShare().getCurrentPosition();
