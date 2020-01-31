/* eslint-env browser, mocha */
// import { css, html } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { lang, translate, KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
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
      kaskadi-textbox#pwd-box.pwd {
        --text-font: !important 'Password';
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

  render () {
    const cssPath = window.location.href.includes('localhost') ? '../import-font.css' : 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/import-font.css'
    return html`
    <link rel="stylesheet" href="${cssPath}">
    <kaskadi-textbox id="pwd-box" class=".pwd" lang="${this.lang}" ?labelHidden="${this.labelHidden}" icon="${this.icon}" .label="${this.label}"></kaskadi-textbox>`
  }
}
customElements.define('kaskadi-passwordbox', KaskadiPasswordbox)
