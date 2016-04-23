'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectShr = function () {
  function SelectShr(opts) {
    _classCallCheck(this, SelectShr);

    this.opts = {};
    this.opts.elements = opts.elements;
    this.opts.socials = opts.socials;
  }

  _createClass(SelectShr, [{
    key: 'init',
    value: function init() {
      document.addEventListener('click', function (el) {
        var x = el.clientX;
        var y = el.clientY;
        var selectionText = getSelectionText().length;
        var selectShr = document.querySelector('.selectShr');

        selectShrPosition(x, y, selectShr);

        if (selectionText > 0) selectShr.classList.add('selectShrOpen');else selectShr.classList.remove('selectShrOpen');

        console.log(getSelectionText());
      });

      function getSelectionText() {
        window.getSelection;
        return window.getSelection().toString();
      };

      function selectShrPosition(selectShrX, selectShrY, selectShr) {
        selectShr.style.position = 'absolute';
        selectShr.style.left = selectShrX - 40 + 'px';
        selectShr.style.top = selectShrY - 55 + 'px';
      };

      var selectShrContainer = document.createElement('div');

      selectShrContainer.classList.add('selectShr');
      document.body.appendChild(selectShrContainer);
    }
  }]);

  return SelectShr;
}();