![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-passwordbox)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-passwordbox?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-passwordbox/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-passwordbox/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-passwordbox/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-passwordbox/build-on-firefox?label=firefox&logo=Mozilla%20Firefox&logoColor=white)](https://github.com/kaskadi/kaskadi-passwordbox/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-passwordbox/build-on-chrome?label=chrome&logo=Google%20Chrome&logoColor=white)](https://github.com/kaskadi/kaskadi-passwordbox/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-passwordbox/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-passwordbox/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-passwordbox/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-passwordbox/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-passwordbox?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-passwordbox)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-passwordbox?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-passwordbox)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-passwordbox?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-passwordbox)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/kaskadi-passwordbox?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/kaskadi-passwordbox/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Usage instructions

In another element:
```js
// using the latest version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/kaskadi-passwordbox.js'
// using a specific version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/release/v1.0.0/kaskadi-passwordbox.js'
```

In the browser:
```html
<!-- using the latest version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/kaskadi-passwordbox.js"></script>
<!-- using a specific version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-passwordbox/release/v1.0.0/kaskadi-passwordbox.js"></script>
```

# Custom element documentation

## kaskadi-passwordbox

Element to offer a textbox for inputting password.

User input will be obfuscated to make password invisible to other users watching the same screen.

This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation].


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| label | `Object` |  | a set of labels that will be displayed for this textbox. Each field in the object reference to a language (f.e. `en`, `de`, `fr`, etc.). |
| \[icon\] | `string` |  | an icon to display for this textbox. Must be a URL pointing to a public image. |
| \[labelHidden\] | `boolean` | `false` | control whether the textbox label & icon should be shown. |

**Example**  
```html
<kaskadi-passwordbox lang="en" label='{"en": "Password", "de": "Passwort", "fr": "Mot de passe"}' icon="https://example.com/lock.png"></kaskadi-passwordbox>
```
<!-- LINKS -->

[`KaskadiElement` documentation]:https://github.com/kaskadi/kaskadi-element

## Custom styles

The following custom CSS properties are available for this element:

| CSS property name |    Default   |
| :---------------- | :----------: |
| --text-font       | `'Password'` |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->