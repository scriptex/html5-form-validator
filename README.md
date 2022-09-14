[![Travis CI](https://travis-ci.com/scriptex/html5-form-validator.svg?branch=master)](https://travis-ci.com/scriptex/html5-form-validator)
[![Github Build](https://github.com/scriptex/html5-form-validator/workflows/Build/badge.svg)](https://github.com/scriptex/html5-form-validator/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/html5-form-validator/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/html5-form-validator&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-html5-form-validator-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/html5-form-validator/badge)](https://www.codefactor.io/repository/github/scriptex/html5-form-validator)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/html5-form-validator/README.md?pixel)](https://github.com/scriptex/html5-form-validator/)

# HTML5 Form Validator

> The simplest HTML5 forms validator.

This form validator uses the **built-in capabilities** of the browser to validate the required form fields.

All validation messages are shown as they are shown by the browser which means that they are **internationalized** and are **NOT subject to change**.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/html5-form-validator?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/html5-form-validator?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/html5-form-validator?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/html5-form-validator)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/html5-form-validator?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/html5-form-validator?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/html5-form-validator?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/html5-form-validator?style=plastic)

## Install

```sh
npm i html5-form-validator
```

or

```sh
yarn add html5-form-validator
```

## Usage

```javascript
import { HTML5FormValidation } from 'html5-form-validator';
```

Then initialize with default settings:

```javascript
new HTML5FormValidation();
```

or supply your own

```javascript
const form = document.querySelector('#form');

new HTML5FormValidation(form, {
	errorElement: 'form__error',
	invalidClass: 'is--invalid',
	submitHandler(instance) {
		console.log(instance);
	},
	validateOnInput: false
});
```

## Options

| Option            | Type       | Required | Default     | Description                                                                                         |
| ----------------- | ---------- | -------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `errorElement`    | `string`   | false    | `'error'`   | The class name of the element that will be added to the DOM after the required field.               |
| `invalidClass`    | `string`   | false    | `'invalid'` | The classname of the required field when it is invalid                                              |
| `submitHandler`   | `Function` | false    | `null`      | A function to run on form submission. Accepts a single argument - the HTML5FormValidation instance. |
| `validateOnInput` | `boolean`  | false    | `true`      | Validate as you type. Set to `false` to validate only on submit.                                    |

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
