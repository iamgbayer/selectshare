(new function Selectshare () {
  const wrapper = document.querySelector('.selectshare')

  const execute = () => {
    createTooltip()

    document.addEventListener('click', event => {
      let axisX = event.clientX
      let axisY = event.clientY
      let classes = wrapper.classList

      applyNewTooltipPosition(axisX, axisY)

      return retrieveSelectedTextLength()
        ? classes.remove('selectshare--open')
        : classes.toggle('selectshare--open')
    })
  }

  /**
   * @returns {{title: string[], url: string[]}}
   */
  const retrieveSocials = () => {
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

  const createTooltip = () => {
    let tooltip = document.createElement('div')
    let socials = ['facebook', 'twitter', 'google']

    socials.map(social => {
      let element = document.createElement('a')

      element.classList.add(`selectshare__${social}`)
      tooltip.appendChild(element)
    });

    tooltip.classList.add('selectshare')
    document.body.appendChild(tooltip)
  }

  /**
   * @returns {number}
   */
  const retrieveSelectedTextLength = () => {
    return window.getSelection().toString().length
  }

  /**
   * @param {number} axisX
   * @param {number} axisY
   */
  const applyNewTooltipPosition = (axisX, axisY) => {
    let style = wrapper.style

    style.top = `${axisY - 70}px`
    style.left = `${axisX - 50}px`
    style.position = 'absolute'
  }

  return execute()
})()
