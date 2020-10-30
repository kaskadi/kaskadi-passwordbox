/* eslint-env browser, mocha */
import { KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-textbox/kaskadi-textbox.js'

const cssFontLoadPath = window.location.href.includes('localhost') ? window.location.pathname.includes('example') ? '../import-font.css' : './import-font.css' : 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/import-font.css'

/**
 * Element to offer a textbox for inputting password.
 *
 * User input will be obfuscated to make password invisible to other users watching the same screen.
 *
 * This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation](https://github.com/kaskadi/kaskadi-element).
 *
 * @module kaskadi-passwordbox
 *
 * @param {Object} label - a localized set of labels that will be displayed for this textbox. Each field in the object references a language (f.e. `en`, `de`, `fr`, etc.).
 * @param {string} [icon] - an icon to display for this textbox. Must be a URL pointing to a public image.
 * @param {boolean} [labelHidden=false] - controls whether the textbox label & icon should be shown.
 *
 * @example
 *
 * <kaskadi-passwordbox lang="en" label='{"en": "Password", "de": "Passwort", "fr": "Mot de passe"}' icon="https://example.com/lock.png"></kaskadi-passwordbox>
 */

class KaskadiPasswordbox extends KaskadiElement {
  constructor () {
    super()
    this.labelHidden = false
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
      labelHidden: { type: Boolean },
      label: { type: Array },
      icon: { type: String }
    }
  }

  connectedCallback () {
    super.connectedCallback()
    const fontLoadLink = document.createElement('link')
    fontLoadLink.rel = 'stylesheet'
    fontLoadLink.type = 'text/css'
    fontLoadLink.crossOrigin = 'anonymous'
    fontLoadLink.href = cssFontLoadPath
    document.head.appendChild(fontLoadLink)
  }

  disconnectedCallback () {
    const fontLoadLink = document.head.querySelector(`link[href="${cssFontLoadPath}"]`)
    document.head.removeChild(fontLoadLink)
    super.disconnectedCallback()
  }

  render () {
    return html`
    <kaskadi-textbox id="pwd-box" lang="${this.lang}" ?labelHidden="${this.labelHidden}" icon="${this.icon}" .label="${this.label}" spellcheck="false"></kaskadi-textbox>`
  }
}

customElements.define('kaskadi-passwordbox', KaskadiPasswordbox)
