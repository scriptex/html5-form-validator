"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var html5formValidation =
/*#__PURE__*/
function () {
  function html5formValidation() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('form');
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, html5formValidation);

    this.settings = Object.assign({}, {
      errorElement: 'error',
      invalidClass: 'invalid',
      submitHandler: null,
      validateOnInput: true
    }, settings);
    this.form = element;
    this.errorDiv = "<div class=\"".concat(this.settings.errorElement, "\"></div>");
    this.init();
  }

  _createClass(html5formValidation, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.form.noValidate = true;
      this.settings.validateOnInput && this.validateAll(this.form);

      this.form.onsubmit = function (event) {
        _this.validateAll(_this.form);

        if (!_this.form.checkValidity()) {
          event.preventDefault();
        } else {
          if (typeof _this.settings.submitHandler === 'function') {
            event.preventDefault();

            _this.settings.submitHandler(_this);
          }
        }
      };
    }
  }, {
    key: "validateAll",
    value: function validateAll(form) {
      var requiredFields = form.querySelectorAll('[required]');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = requiredFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _field = _step.value;
          this.validateField(_field);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var _this2 = this;

      if (!(field.nextSibling.classList && field.nextSibling.classList.contains(this.settings.errorElement))) {
        field.insertAdjacentHTML('afterend', this.errorDiv);
      }

      field.oninvalid = function () {
        field.classList.add(_this2.settings.invalidClass);
        field.nextSibling.textContent = field.validationMessage;
      };

      field.oninput = function () {
        field.nextSibling.textContent = '';
        field.classList.remove(_this2.settings.invalidClass);
        field.checkValidity();
      };
    }
  }]);

  return html5formValidation;
}();

exports.default = html5formValidation;