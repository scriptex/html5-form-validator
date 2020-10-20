(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var html5formValidation = /*#__PURE__*/function () {
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

        var _iterator = _createForOfIteratorHelper(requiredFields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;
            this.validateField(field);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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

  _exports["default"] = html5formValidation;
});
