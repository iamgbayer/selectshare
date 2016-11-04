'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectShare = function () {
  function SelectShare() {
    _classCallCheck(this, SelectShare);
  }

  _createClass(SelectShare, [{
    key: 'getTooltipPosition',
    value: function getTooltipPosition(textHasSelectedX, textHasSelectedY, selectShareElement) {
      var selectShareStyle = selectShareElement.style;

      selectShareStyle.position = 'absolute';
      selectShareStyle.left = textHasSelectedX + 'px';
      selectShareStyle.top = textHasSelectedY + 'px';
    }
  }], [{
    key: 'createTooltip',
    value: function createTooltip() {
      var selectShareContainer = document.createElement('div');
      var facebook = document.createElement('a');
      var twitter = document.createElement('a');
      var googlePlus = document.createElement('a');

      facebook.classList.add('flaticon-circle');
      twitter.classList.add('flaticon-social');
      googlePlus.classList.add('flaticon-social-media');

      selectShareContainer.appendChild(facebook);
      selectShareContainer.appendChild(twitter);
      selectShareContainer.appendChild(googlePlus);

      selectShareContainer.classList.add('select-share');
      document.body.appendChild(selectShareContainer);
    }
  }, {
    key: 'getSelectedText',
    value: function getSelectedText() {
      return window.getSelection().toString();
    }
  }, {
    key: 'getCurrentPosition',
    value: function getCurrentPosition() {
      this.createTooltip();

      var selectShareElement = document.querySelector('.select-share');
      var selectShareText = this.getSelectedText.length;

      document.addEventListener('mouseup', function (textHasSelected) {
        var textHasSelectedX = textHasSelected.clientX;
        var textHasSelectedY = textHasSelected.clientY;
        var selectShareClass = selectShareElement.classList;

        new SelectShare().getTooltipPosition(textHasSelectedX, textHasSelectedY, selectShareElement);

        if (!selectShareText) {
          return selectShareClass.remove('select-share-open');
        } else {
          return selectShareClass.add('select-share-open');
        }
      });
    }
  }]);

  return SelectShare;
}();

SelectShare.getCurrentPosition();