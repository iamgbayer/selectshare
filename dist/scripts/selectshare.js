'use strict';

var SelectShare = function SelectShare() {
    document.addEventListener('mouseup', function (element) {
        var x = element.clientX;
        var y = element.clientY;
        var selectShareText = getSelementectionText().length;
        var selectShareElement = document.querySelector('.select-share');
        var selectShareClass = selectShare.classList;

        selectSharePosition(x, y, selectShare);

        if (!selectionText) {
            selectShareClass.remove('selectshare-open');
        }

        return selectShareClass.add('selectshare-open');
    });

    function getSelectionText() {
        return window.getSelection().toString();
    }

    function selectSharePosition(selectShareX, selectShareY, selectShare) {
        var selectShareStyle = selectShare.style;

        selectShareStyle.position = 'absolute';
        selectShareStyle.left = selectShareX + 'px';
        selectShareStyle.top = selectShareY + 'px';
    }
};

var selectShareContainer = document.createElement('div');
var facebook = document.createElement('a');
var twitter = document.createElement('a');
var googlePlus = document.createElement('a');

facebook.classList.add('flaticon-circle');
twitter.classList.add('flaticon-social');
googlePlus.classList.add('flaticon-social-media');

selectShareContainer.appendChild(facebook);
selectShareContainer.appendChild(twitter);
selectShareContainer.appendChild(gplus);

selectShareContainer.classList.add('select-share');
document.body.appendChild(selectShareContainer);