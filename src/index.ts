export interface HTML5FormValidationOptions {
	errorElement: string;
	invalidClass: string;
	submitHandler: null | ((validator: HTML5FormValidation) => unknown);
	validateOnInput: boolean;
}

export class HTML5FormValidation {
	private form: HTMLFormElement | null;
	private settings: HTML5FormValidationOptions;
	private errorDiv: string;

	constructor(element = document.querySelector('form'), settings: Partial<HTML5FormValidationOptions> = {}) {
		this.settings = {
			errorElement: 'error',
			invalidClass: 'invalid',
			submitHandler: null,
			validateOnInput: true,
			...settings
		};

		this.form = element;
		this.errorDiv = `<div class="${this.settings.errorElement}"></div>`;

		this.init();
	}

	private init(): void {
		if (!this.form) {
			throw new Error('The form element is missing or invalid.');
		}

		const form = this.form;
		const { submitHandler, validateOnInput } = this.settings;

		form.noValidate = true;

		if (validateOnInput) {
			this.validateAll(form);
		}

		form.onsubmit = (event: SubmitEvent) => {
			this.validateAll(form);

			if (!form!.checkValidity()) {
				event.preventDefault();
			} else {
				if (typeof submitHandler === 'function') {
					event.preventDefault();

					submitHandler(this);
				}
			}
		};
	}

	private validateAll(form: HTMLFormElement): void {
		const requiredFields = Array.from(form.querySelectorAll('[required]')) as HTMLFormElement[];

		for (const field of requiredFields) {
			this.validateField(field);
		}
	}

	private validateField(field: HTMLFormElement): void {
		const errorDiv = field.nextSibling as Element;

		if (!(errorDiv?.classList && errorDiv.classList.contains(this.settings.errorElement))) {
			field.insertAdjacentHTML('afterend', this.errorDiv);
		}

		field.oninvalid = () => {
			field.classList.add(this.settings.invalidClass);
			errorDiv.textContent = field.validationMessage;
		};

		field.oninput = () => {
			errorDiv.textContent = '';
			field.classList.remove(this.settings.invalidClass);
			field.checkValidity();
		};
	}
}

export default HTML5FormValidation;
