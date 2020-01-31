const fs = require('fs')
const svg2ttf = require('svg2ttf')

let glyphs = ''
const r = 400
const cx = 500
const cy = 500
for (let i = 0; i < 128; i++) {
  glyphs += `    <glyph unicode="&#${i};" d="M${cx-r},${cy-r} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 -${r*2},0"></glyph>`
  if (i !== 127) {
    glyphs += '\n'
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg">
  <font id="Password" horiz-adv-x="1000">
    <font-face font-family="Password" font-weight="bold" font-style="normal"
        units-per-em="1000" cap-height="1000" x-height="1000"
        ascent="1000" descent="0"
        alphabetic="0" hanging="1000"/>
${glyphs}
  </font>
</svg>`

const ttf = svg2ttf(svg, {})
fs.writeFileSync('pwd-font.ttf', Buffer.from(ttf.buffer))
