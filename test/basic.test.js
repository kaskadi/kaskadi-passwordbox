/* eslint-env browser, mocha */
import '../kaskadi-passwordbox.js'
describe('kaskadi-passwordbox', () => {
  it('should render the string "Hello World"', async () => {
    // create kaskadi-passwordbox element
    var elem = document.createElement('kaskadi-passwordbox')
    document.body.appendChild(elem)
    // wait until it's finished rendering
    await elem.updateComplete
    // actual test
    elem.shadowRoot.querySelector('#en').textContent.should.equal('Hello World!')
    var cs = getComputedStyle(elem.shadowRoot.querySelector('div'))
    cs.color.should.equal('rgb(255, 0, 0)')
  })
})
