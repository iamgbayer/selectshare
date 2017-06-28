(new function() {

  /**
   * Initializes application
   */
  this.initialize = () => {
    this.construct()

    this.createTooltip()
    this.controlTooltip()
  }


  this.construct = () => {
    this.tooltip = document.createElement('div')
    this.tooltip.classList.add('selectshare')

    this.socials = [
      {
        title: "facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
      },
      {
        title: "twitter",
        url: "https://twitter.com/home?status=",
      },
      {
        title: "google",
        url: "https://plus.google.com/share?url=",
      }
    ]
  }


  /**
   * Create the container div and value with the links
   * of the social.
   */
  this.createTooltip = () => {
    this.socials.map(social => {
      let element = document.createElement('a')

      element.classList.add(`selectshare-${social.title}`)
      element.setAttribute('href', social.url)

      this.tooltip.appendChild(element)
    })

    document.body.appendChild(this.tooltip)
  }


  this.changeTooltip = text => {
    this.socials.map(social => {

    })
  }


  /**
   * Retrieve current position from tooltip.
   */
  this.getTooltipPosition = (axisX, axisY) => {
    let styleOfTooltip = this.tooltip.style

    styleOfTooltip.position = 'absolute'
    styleOfTooltip.left     = `${axisX}px`
    styleOfTooltip.top      = `${axisY}px`
  }


  /**
   * Returns TRUE if there is selected text.
   */
  this.hasSelectedText = () => {
    return window.getSelection().toString().length ? true : false
  }


  /**
   * Returns selected text.
   */
  this.getSelectedText = () => {
    return window.getSelection().toString()
  }


  /**
   * Controls the state of the tooltip.
   */
  this.controlTooltip = () => {
    document.addEventListener('click', event => {
      this.getTooltipPosition(event.clientX, event.clientY)

      if (!this.hasSelectedText()) {
        this.tooltip.classList.remove('selectshare-opened')
        return
      }

      this.tooltip.classList.add('selectshare-opened')
    })
  }

  return this.initialize()
}())
