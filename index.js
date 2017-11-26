export default class html5formValidation {
  constructor(element = document.querySelector('form'), settings = {}) {
    this.settings = Object.assign(
      {},
      {
        errorElement: 'error',
        invalidClass: 'invalid',
        submitHandler: null,
        validateOnInput: true
      },
      settings
    );
    this.form = element;
    this.errorDiv = `<div class="${this.settings.errorElement}"></div>`;

    this.init();
  }

  init() {
    this.form.noValidate = true;
    this.settings.validateOnInput && this.validateAll(this.form);

    this.form.onsubmit = event => {
      this.validateAll(this.form);

      if (!this.form.checkValidity()) {
        event.preventDefault();
      } else {
        if (typeof this.settings.submitHandler === 'function') {
          event.preventDefault();

          this.settings.submitHandler(this);
        }
      }
    };
  }

  validateAll(form) {
    const requiredFields = form.querySelectorAll('[required]');

    for (const field of requiredFields) {
      this.validateField(field);
    }
  }

  validateField(field) {
    field.insertAdjacentHTML('afterend', this.errorDiv);

    field.oninvalid = () => {
      field.classList.add(this.settings.invalidClass);
      field.nextSibling.textContent = field.validationMessage;
    };

    field.oninput = () => {
      field.nextSibling.textContent = '';
      field.classList.remove(this.settings.invalidClass);
      field.checkValidity();
    };
  }
}
