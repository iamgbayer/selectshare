(function SelectShare () {
    this.createShareTooltip = function () {
        let selectShareContainer = document.createElement('div')
        let facebook = document.createElement('a')
        let twitter = document.createElement('a')
        let googlePlus = document.createElement('a')

        facebook.classList.add('flaticon-circle')
        twitter.classList.add('flaticon-social')
        googlePlus.classList.add('flaticon-social-media')

        selectShareContainer.appendChild(facebook)
        selectShareContainer.appendChild(twitter)
        selectShareContainer.appendChild(googlePlus)

        selectShareContainer.classList.add('select-share')
        document.body.appendChild(selectShareContainer)
    }()

    this.getSharePosition = function (textHasSelectedX, textHasSelectedY, selectShareElement) {
        console.log('oi')
        let selectShareStyle = selectShareElement.style

        selectShareStyle.position = 'absolute'
        selectShareStyle.left = `${textHasSelectedX}px`
        selectShareStyle.top = `${textHasSelectedY}px`
    }

    function getSelectedText () {
        return window.getSelection().toString()
    }

    this.eventListener = function () {
        let selectShareElement = document.querySelector('.select-share')
        let selectShareText = getSelectedText.length

        document.addEventListener('mouseup', function (textHasSelected) {
            let textHasSelectedX = textHasSelected.clientX
            let textHasSelectedY = textHasSelected.clientY
            let selectShareClass = selectShareElement.classList

            getSharePosition(textHasSelectedX, textHasSelectedY, selectShareElement)

            if (!selectShareText) {
                console.log(selectShareText)
                return selectShareClass.add('select-share-open')
            } else {
                console.log(selectShareText)
                return selectShareClass.remove('select-share-open')
            }
        })
    }()

})()
