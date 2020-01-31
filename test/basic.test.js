/* eslint-env browser, mocha */
import '../kaskadi-passwordbox.js'
describe('kaskadi-passwordbox', () => {
  beforeEach(async () => {
    // create kaskadi-passwordbox element
    const elem = document.createElement('kaskadi-passwordbox')
    document.body.appendChild(elem)
    // wait until it's finished rendering
    await elem.updateComplete
  })
  it('should attach to the head the link to load "Password" font when attached to the DOM', () => {
    const link = document.head.querySelector('link[href="./import-font.css"]')
    link.should.not.equal(null)
  })
  it('should apply the "Password" font-family to the input text container', () => {
    const elem = document.body.querySelector('kaskadi-passwordbox')
    const textbox = elem.shadowRoot.querySelector('kaskadi-textbox')
    const textStyle = getComputedStyle(textbox.shadowRoot.querySelector('#text'))['font-family'].replace(new RegExp(/"/, 'g'), '') // need to replace double quotes by nothing because Firefox getComputedStyle returns the font wrapped in double quotes
    textStyle.should.equal('Password')
  })
  it('should remove from the head the link to load "Password" font when removed from the DOM', () => {
    const elem = document.body.querySelector('kaskadi-passwordbox')
    document.body.removeChild(elem)
    // wait a bit until disconnectedCallback() is done working in kaskadi-passwordbox
    setTimeout(() => {
      const link = document.head.querySelector('link[href="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/import-font.css"]')
      link.should.equal(null)
    }, 2000)
  })
})
