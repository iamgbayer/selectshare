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
        selector: "selectshare-facebook",
        title: "facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
      },
      {
        selector: "selectshare-twitter",
        title: "twitter",
        url: "https://twitter.com/home?status=",
      },
      {
        selector: "selectshare-google",
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
      let element = document.createElement('span')

      element.classList.add('selectshare-hyperlink', `selectshare-${social.title}`)

      this.tooltip.appendChild(element)
    })

    document.body.appendChild(this.tooltip)
  }


  /**
   * Retrieve current position from tooltip.
   *
   * @param {integer} axisX
   * @param {integer} axisY
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


  this.valorizeHyperlinks = () => {
    let hyperlinks = document.querySelectorAll('.selectshare-hyperlink')
    let text = this.getSelectedText()

    hyperlinks.forEach(hyperlink => {
      let contains = this.socials.filter(social => hyperlink.classList.contains(social.selector))

      if (!contains) {
        return
      }

      hyperlink.addEventListener('click', () => {
        window.open(
          `${contains[0].url}${text}`
        )
      })

    })
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

      this.valorizeHyperlinks()
      this.tooltip.classList.add('selectshare-opened')
    })
  }

  return this.initialize()
}())
