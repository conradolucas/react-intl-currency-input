"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _formatCurrency = _interopRequireDefault(require("./format-currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultConfig = {
  locale: 'en-US',
  formats: {
    number: {
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
};
var propTypes = {
  defaultValue: _propTypes.number,
  value: _propTypes.number,
  max: _propTypes.number,
  customComponent: _propTypes.func,
  component: _propTypes.node.isRequired,
  currency: _propTypes.string.isRequired,
  config: (0, _propTypes.shape)().isRequired,
  autoFocus: _propTypes.bool.isRequired,
  autoSelect: _propTypes.bool.isRequired,
  autoReset: _propTypes.bool.isRequired,
  onChange: _propTypes.func.isRequired,
  onBlur: _propTypes.func.isRequired,
  onFocus: _propTypes.func.isRequired,
  onKeyPress: _propTypes.func.isRequired
};
var defaultProps = {
  component: 'input',
  currency: 'USD',
  value: 0,
  config: defaultConfig,
  autoFocus: false,
  autoSelect: false,
  autoReset: false,
  onChange: function onChange(f) {
    return f;
  },
  onBlur: function onBlur(f) {
    return f;
  },
  onFocus: function onFocus(f) {
    return f;
  },
  onKeyPress: function onKeyPress(f) {
    return f;
  }
};

function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}

function IntlCurrencyInput(_ref) {
  var InputComponent = _ref.component,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      config = _ref.config,
      currency = _ref.currency,
      max = _ref.max,
      autoFocus = _ref.autoFocus,
      autoSelect = _ref.autoSelect,
      autoReset = _ref.autoReset,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onKeyPress = _ref.onKeyPress,
      customComponent = _ref.customComponent,
      otherProps = _objectWithoutProperties(_ref, ["component", "value", "defaultValue", "config", "currency", "max", "autoFocus", "autoSelect", "autoReset", "onChange", "onBlur", "onFocus", "onKeyPress", "customComponent"]);

  var inputRef = (0, _react.useCallback)(function (node) {
    var isActive = node === document.activeElement;

    if (node && autoFocus && !isActive) {
      node.focus();
    }
  }, [autoFocus]);

  var _useState = (0, _react.useState)('0'),
      _useState2 = _slicedToArray(_useState, 2),
      maskedValue = _useState2[0],
      setMaskedValue = _useState2[1]; // to prevent a malformed config object


  var safeConfig = (0, _react.useMemo)(function () {
    return function () {
      var maximumFractionDigits = config.formats.number[currency].maximumFractionDigits;

      var finalConfig = _objectSpread(_objectSpread({}, defaultConfig), config); // at the moment this prevents problems when converting numbers
      // with zeroes in-between, otherwise 205 would convert to 25.


      finalConfig.formats.number[currency].minimumFractionDigits = maximumFractionDigits;
      return finalConfig;
    };
  }, [defaultConfig, config]);

  var clean = function clean(number) {
    if (typeof number === 'number') {
      return number;
    } // strips everything that is not a number (positive or negative)


    return Number(number.toString().replace(/[^0-9-]/g, ''));
  };

  var normalizeValue = function normalizeValue(number) {
    var _safeConfig = safeConfig(),
        maximumFractionDigits = _safeConfig.formats.number[currency].maximumFractionDigits;

    var safeNumber = number;

    if (typeof number === 'string') {
      safeNumber = clean(number);

      if (safeNumber % 1 !== 0) {
        safeNumber = safeNumber.toFixed(maximumFractionDigits);
      }
    } else {
      // all input numbers must be a float point (for the cents portion). This is a fallback in case of integer ones.
      safeNumber = Number.isInteger(number) ? Number(number) * Math.pow(10, maximumFractionDigits) : number.toFixed(maximumFractionDigits);
    } // divide it by 10 power the maximum fraction digits.


    return clean(safeNumber) / Math.pow(10, maximumFractionDigits);
  };

  var calculateValues = function calculateValues(inputFieldValue) {
    var value = normalizeValue(inputFieldValue);
    var maskedValue = (0, _formatCurrency["default"])(value, safeConfig(), currency);
    return [value, maskedValue];
  };

  var updateValues = function updateValues(value) {
    var _calculateValues = calculateValues(value),
        _calculateValues2 = _slicedToArray(_calculateValues, 2),
        calculatedValue = _calculateValues2[0],
        calculatedMaskedValue = _calculateValues2[1];

    if (!max || calculatedValue <= max) {
      setMaskedValue(calculatedMaskedValue);
      return [calculatedValue, calculatedMaskedValue];
    } else {
      return [normalizeValue(maskedValue), maskedValue];
    }
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();

    var _updateValues = updateValues(event.target.value),
        _updateValues2 = _slicedToArray(_updateValues, 2),
        value = _updateValues2[0],
        maskedValue = _updateValues2[1];

    if (maskedValue) {
      onChange(event, value, maskedValue);
    }
  };

  var handleBlur = function handleBlur(event) {
    var _updateValues3 = updateValues(event.target.value),
        _updateValues4 = _slicedToArray(_updateValues3, 2),
        value = _updateValues4[0],
        maskedValue = _updateValues4[1];

    if (autoReset) {
      calculateValues(0);
    }

    if (maskedValue) {
      onBlur(event, value, maskedValue);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (autoSelect) {
      event.target.select();
    }

    var _updateValues5 = updateValues(event.target.value),
        _updateValues6 = _slicedToArray(_updateValues5, 2),
        value = _updateValues6[0],
        maskedValue = _updateValues6[1];

    if (maskedValue) {
      onFocus(event, value, maskedValue);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    return onKeyPress(event, event.key, event.keyCode);
  };

  (0, _react.useEffect)(function () {
    var currentValue = value || defaultValue || 0;

    var _calculateValues3 = calculateValues(currentValue),
        _calculateValues4 = _slicedToArray(_calculateValues3, 2),
        maskedValue = _calculateValues4[1];

    setMaskedValue(maskedValue);
  }, [currency, value, defaultValue, config]);

  var _arguments = Array.prototype.slice.call(arguments),
      props = _arguments[0];

  var _otherProps = omit(props, propTypes);

  var inputProps = Object.assign({}, _otherProps, {
    ref: inputRef,
    value: maskedValue,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyUp: handleKeyUp
  });

  if (customComponent) {
    var CustomComponent = customComponent;
    return /*#__PURE__*/_react["default"].createElement(CustomComponent, inputProps);
  }

  return /*#__PURE__*/_react["default"].createElement(InputComponent, inputProps);
}

;
IntlCurrencyInput.propTypes = propTypes;
IntlCurrencyInput.defaultProps = defaultProps;
var _default = IntlCurrencyInput;
exports["default"] = _default;