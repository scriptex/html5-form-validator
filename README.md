[![GitHub release](https://img.shields.io/github/release/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/html5-form-validator/dist/index.min.js.svg)](https://github.com/scriptex/html5-form-validator)
[![Build Status](https://travis-ci.com/scriptex/html5-form-validator.svg?branch=master)](https://travis-ci.com/scriptex/html5-form-validator)
[![npm](https://img.shields.io/npm/dt/html5-form-validator.svg)](https://www.npmjs.com/package/html5-form-validator)
[![npm](https://img.shields.io/npm/v/html5-form-validator.svg)](https://www.npmjs.com/package/html5-form-validator)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/html5-form-validator/README.md)](https://github.com/scriptex/html5-form-validator/)

# HTML5 Form Validator

The simplest HTML5 forms validator

## Install

```sh
npm i html5-form-validator
```

or

```sh
yarn add html5-form-validator
```

or

just download this repository and link the files located in dist folder

or include it from unpkg.com

```html
<script src="https://unpkg.com/html5-form-validator"></script>
```

## Usage

```javascript
import 'html5-form-validator';
```

Then initialize with default settings:

```javascript
new html5formValidation();
```

or supply your own

```javascript
const form = document.querySelector('#form');

new html5formValidation(form, {
	errorElement: 'form__error',
	invalidClass: 'is--invalid',
	submitHandler(instance) {
		console.log(instance);
	},
	validateOnInput: false
});
```

## Options

`errorElement` - The classname of the element that will be added to the dom after the required field. Defaults to `error`.

`invalidClass` - The classname of the required field when it is invalid. Defaults to `invalid`.

`submitHandler` - A function to run on valid form submission. Accepts a single `instance` argument which refers to the constuctor's instance. Defaults to `null`.

`validateOnInput` - Set to false if you want to show visual feedback for invalid fields after the first invalid submission. Defaults to `true`.


## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fhtml5-form-validator&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
