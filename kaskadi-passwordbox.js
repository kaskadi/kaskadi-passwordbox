/* eslint-env browser, mocha */
// import { css, html } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-textbox/kaskadi-textbox.js'

class KaskadiPasswordbox extends KaskadiElement {
  constructor () {
    super()
    this.labelHidden = false
    this.lang = 'en'
    this.icon = ''
  }

  static get styles () {
    return css`
      :host{
        display: inline-block;
      }
      /* high specificity selector to make sure style will apply in any case */
      #pwd-box {
        --text-font: 'Password';
      }`
  }

  static get properties () {
    return {
      lang: { type: String },
      labelHidden: { type: Boolean },
      label: { type: Array },
      icon: { type: String }
    }
  }

  connectedCallback() {
    super.connectedCallback()
    const fontLoadLink = document.createElement('link')
    fontLoadLink.rel = 'stylesheet'
    fontLoadLink.type = 'text/css'
    fontLoadLink.crossOrigin = 'anonymous'
    fontLoadLink.href = 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/import-font.css'
    document.head.appendChild(fontLoadLink)
  }
  disconnectedCallback() {
    const fontLoadLink = document.head.querySelector('link[href="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/import-font.css"]')
    document.head.removeChild(fontLoadLink)
    super.disconnectedCallback()
  }

  render () {
    return html`
    <kaskadi-textbox id="pwd-box" lang="${this.lang}" ?labelHidden="${this.labelHidden}" icon="${this.icon}" .label="${this.label}"></kaskadi-textbox>`
  }
}
customElements.define('kaskadi-passwordbox', KaskadiPasswordbox)
