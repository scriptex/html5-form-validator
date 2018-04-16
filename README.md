# HTML5 Form Validator

The most simple HTML5 forms validator

## Install

```
npm i html5-form-validator
```

or

```
yarn add html5-form-validator
```

or

Just download this repository and link the files located in dist folder:

```
<script src="dist/index.min.js"></script>
```

## Usage

```
import 'html5-form-validator';
```

Then initialize with default settings:

```
new html5formValidation();
```

or supply your own

```
const form = document.querySelector('#form');

new html5formValidation(form, {
  errorElement: 'form__error',
  invalidClass: 'is--invalid',
  submitHandler(instance) {
    console.log(instance)
  },
  validateOnInput: false
});
```

## Options

`errorElement` - The classname of the element that will be added to the dom after the required field. Defaults to `error`.

`invalidClass` - The classname of the required field when it is invalid. Defaults to `invalid`.

`submitHandler` - A function to run on valid form submission. Accepts a single `instance` argument which refers to the constuctor's instance. Defaults to `null`.

`validateOnInput` - Set to false if you want to show visual feedback for invalid fields after the first invalid submission. Defaults to `true`.
