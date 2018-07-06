[![GitHub stars](https://img.shields.io/github/stars/scriptex/html5-form-validator.svg?style=social&label=Stars)](https://github.com/scriptex/html5-form-validator)
[![GitHub forks](https://img.shields.io/github/forks/scriptex/html5-form-validator.svg?style=social&label=Fork)](https://github.com/scriptex/html5-form-validator/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/html5-form-validator/dist/index.min.js.svg)](https://github.com/scriptex/html5-form-validator)
[![Build Status](https://travis-ci.org/scriptex/html5-form-validator.svg?branch=master)](https://travis-ci.org/scriptex/html5-form-validator)
[![npm](https://img.shields.io/npm/dt/html5-form-validator.svg)](https://www.npmjs.com/package/html5-form-validator)
[![npm](https://img.shields.io/npm/v/html5-form-validator.svg)](https://www.npmjs.com/package/html5-form-validator)
[![license](https://img.shields.io/github/license/scriptex/html5-form-validator.svg)](https://github.com/scriptex/html5-form-validator)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/html5-form-validator/README.md)](https://github.com/scriptex/html5-form-validator/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/scriptex/html5-form-validator/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/scriptex/html5-form-validator/graphs/commit-activity)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/html5-form-validator.svg)](https://greenkeeper.io/)
[![devDependencies Status](https://david-dm.org/scriptex/html5-form-validator/dev-status.svg)](https://david-dm.org/scriptex/html5-form-validator?type=dev)
[![dependencies Status](https://david-dm.org/scriptex/html5-form-validator/status.svg)](https://david-dm.org/scriptex/html5-form-validator)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/scriptex/)

# HTML5 Form Validator

The simplest HTML5 forms validator

## Install

```console
npm i html5-form-validator
```

or

```console
yarn add html5-form-validator
```

or

Just download this repository and link the files located in dist folder.

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

## LICENSE

MIT
