    const SelectShare = () => {
        document.addEventListener('mouseup', element => {
            let x = element.clientX
            let y = element.clientY
            let selectShareText = getSelementectionText().length
            let selectShareElement = document.querySelector('.select-share')
            let selectShareClass = selectShare.classList

            selectSharePosition(x, y, selectShare)

        if(!selectionText) {
            selectShareClass.remove('selectshare-open')
        }

        return selectShareClass.add('selectshare-open')
      })

        function getSelectionText() {
            return window.getSelection().toString()
        }

        function selectSharePosition(selectShareX, selectShareY, selectShare) {
            let selectShareStyle = selectShare.style

            selectShareStyle.position = 'absolute'
            selectShareStyle.left = `${selectShareX}px`
            selectShareStyle.top = `${selectShareY}px`
        }
    }

    let selectShareContainer = document.createElement('div')
    let facebook = document.createElement('a')
    let twitter = document.createElement('a')
    let googlePlus = document.createElement('a')

    facebook.classList.add('flaticon-circle')
    twitter.classList.add('flaticon-social')
    googlePlus.classList.add('flaticon-social-media')

    selectShareContainer.appendChild(facebook)
    selectShareContainer.appendChild(twitter)
    selectShareContainer.appendChild(gplus)

    selectShareContainer.classList.add('select-share')
    document.body.appendChild(selectShareContainer)