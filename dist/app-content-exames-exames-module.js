(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-exames-exames-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/ng2-nouislider/ng2-nouislider.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-nouislider/ng2-nouislider.es5.js ***!
  \***********************************************************/
/*! exports provided: DefaultFormatter, NouisliderComponent, NouisliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatter", function() { return DefaultFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouisliderComponent", function() { return NouisliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouisliderModule", function() { return NouisliderModule; });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
var NouisliderComponent = (function () {
    /**
     * @param {?} ngZone
     * @param {?} el
     * @param {?} renderer
     */
    function NouisliderComponent(ngZone, el, renderer) {
        var _this = this;
        this.ngZone = ngZone;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.onChange = Function.prototype;
        this.cleanups = [];
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var /** @type {?} */ v = _this.toValues(values);
            var /** @type {?} */ emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                _this.ngZone.run(function () {
                    if (emitter.observers.length > 0) {
                        emitter.emit(v);
                    }
                    _this.onChange(v);
                });
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var /** @type {?} */ stepSize = _this.slider.steps();
            var /** @type {?} */ index = parseInt(((e.target)).getAttribute('data-handle'));
            var /** @type {?} */ sign = 1;
            var /** @type {?} */ multiplier = 1;
            var /** @type {?} */ step = 0;
            var /** @type {?} */ delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var /** @type {?} */ newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    /**
     * @return {?}
     */
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.range || this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
            snap: this.snap,
            animate: this.animate,
        }));
        inputsConfig.tooltips = this.tooltips || this.config.tooltips;
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.ngZone.runOutsideAngular(function () {
            _this.slider = Object(nouislider__WEBPACK_IMPORTED_MODULE_0__["create"])(_this.el.nativeElement.querySelector('div'), Object.assign(_this.config, inputsConfig));
        });
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                var /** @type {?} */ onKeydown = this_1.config.onKeydown || this_1.defaultKeyHandler;
                this_1.ngZone.runOutsideAngular(function () {
                    _this.cleanups.push(_this.renderer.listen(handle, 'keydown', onKeydown), _this.renderer.listen(handle, 'click', function () {
                        handle.focus();
                    }));
                });
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(/** @type {?} */ handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            if (_this.update.observers.length > 0) {
                _this.ngZone.run(function () {
                    _this.update.emit(_this.toValues(values));
                });
            }
        });
        this.slider.on('change', function (values, handle, unencoded) {
            if (_this.change.observers.length > 0) {
                _this.ngZone.run(function () {
                    _this.change.emit(_this.toValues(values));
                });
            }
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            if (_this.start.observers.length > 0) {
                _this.ngZone.run(function () {
                    _this.start.emit(_this.toValues(values));
                });
            }
        });
        this.slider.on('end', function (values, handle, unencoded) {
            if (_this.end.observers.length > 0) {
                _this.ngZone.run(function () {
                    _this.end.emit(_this.toValues(values));
                });
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.slider.updateOptions({
                        range: Object.assign({}, {
                            min: _this.min,
                            max: _this.max
                        }, _this.range || {}),
                        step: _this.step
                    });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    NouisliderComponent.prototype.ngOnDestroy = function () {
        this.slider.destroy();
        while (this.cleanups.length) {
            this.cleanups.pop()();
        }
    };
    /**
     * @param {?} values
     * @return {?}
     */
    NouisliderComponent.prototype.toValues = function (values) {
        var /** @type {?} */ v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NouisliderComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (this.slider) {
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.slider.set(value);
                });
            });
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NouisliderComponent.prototype.registerOnTouched = function (fn) { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    return NouisliderComponent;
}());
NouisliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'nouislider',
                host: {
                    '[class.ng2-nouislider]': 'true'
                },
                template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NouisliderComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
NouisliderComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
NouisliderComponent.propDecorators = {
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'behaviour': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'connect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'limit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'snap': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'animate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'range': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'step': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'format': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'pageSteps': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'ngModel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'keyboard': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'onKeydown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'formControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'tooltips': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'change': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'update': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'slide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'set': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'start': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'end': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    return NouisliderModule;
}());
NouisliderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [NouisliderComponent],
                declarations: [NouisliderComponent],
            },] },
];
/**
 * @nocollapse
 */
NouisliderModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-nouislider.es5.js.map


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.7.0 - 4/6/2021 */
(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function() {
    "use strict";
    var VERSION = "14.7.0";
    //region Helper Methods
    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    function handleEntryPoint(index, value, that) {
        var percentage;
        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }
        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }
        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        }
        else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }
        that.xHighestCompleteStep.push(0);
    }
    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
            return;
        }
        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
        that.xHighestCompleteStep[i] = step;
    }
    //endregion
    //region Spectrum
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];
        this.snap = snap;
        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }
        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
        }
        else {
            ordered.sort(function (a, b) {
                return a[0] - b[0];
            });
        }
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var index;
        var distances = [];
        for (index = 0; index < this.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            var step = this.xNumSteps[index];
            if (step && (value / step) % 1 !== 0) {
                throw new Error("noUiSlider (" +
                    VERSION +
                    "): 'limit', 'margin' and 'padding' of " +
                    this.xPct[index] +
                    "% range must be divisible by step.");
            }
            // Calculate percentual distance in current range of limit, margin or padding
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;
    
        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }
        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }
        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }
    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }
    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;
        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        }
        else {
            parsed.tooltips = asArray(entry);
            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }
            parsed.tooltips.forEach(function (formatter) {
                if (typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }
    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }
    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }
    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }
                return true;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Exposed API
        var scope_Self;
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", handleNumber);
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }
            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;
                values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                mode = "positions";
            }
            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function (value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }
            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return values;
            }
        }
        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // Low can be 0, so test for false. Index 0 is already handled.
                if (low === false) {
                    return;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / density;
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");
            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === PIPS_NONE) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(grid) {
            // Fix #669
            removePips();
            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (e) {
                e = fixEvent(e, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x;
            var y;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    return (checkTouch.target === eventTarget ||
                        eventTarget.contains(checkTouch.target) ||
                        (checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget)));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var multiplier = options.keyboardPageMultiplier;
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= multiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };
});


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/edit/edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/edit/edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/list/list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/list/list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <!-- Basic form layout section start -->\n      <section id=\"basic-form-layouts\">\n        <div class=\"row\" matchHeight=\"card\">\n          <div class=\"col-md-11\" *blockUI=\"'projectInfo'; message: 'Loading'\">\n            <m-card [options]=\"options\" (reloadFunction)=\"reloadProjectInfo($event)\">\n              <ng-container mCardHeaderTitle>\n                Listagem de Cirurgias Registradas\n              </ng-container>\n              <ng-container mCardBody>\n                <div class=\"card-text\">\n                  <p>Ë possível filtrar por qualquer campo</p>\n                </div>\n\n                <div class=\"example-container mat-elevation-z8\">\n                  <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"table-wrapper\" id=\"htmlData\" #htmlData>\n                    <table class=\"table table-stripes table-borderless \" mat-table [dataSource]=\"dataSource1\"\n                      matSort #sortTable1=\"matSort\">\n\n\n                      <ng-container matColumnDef=\"nome\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> NOME </th>\n\n                        <td mat-cell *matCellDef=\"let row\"> {{row.firstName}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"tipoExame\">\n                        <th mat-header-cell *matHeaderCellDef> EXAME </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.tipoexame }} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"idade\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> IDADE </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.idade }} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"data\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Data </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.data.seconds * 1000 | date: 'MM/dd/yyyy' }} </td>\n                      </ng-container>\n\n                       <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{ row.status }} </td>\n                      </ng-container>\n\n\n                      <ng-container matColumnDef=\"acao\">\n                        <th mat-header-cell *matHeaderCellDef> Ações </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <button mat-flat-button (click)=\"openPDF(row)\">Baixar</button>\n                        </td>\n                      </ng-container>\n\n\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns1\"></tr>\n\n                    </table>\n\n                    <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5, 10, 25]\" [pageSize]=\"5\">\n                    </mat-paginator>\n                  </div>\n\n                </div>\n\n\n              </ng-container>\n            </m-card>\n          </div>\n        </div>\n      </section>\n\n      <!-- // Basic form layout section end -->\n    </div>\n  </div>\n</div>\n<!-- ////////////////////////////////////////////////////////////////////////////-->\n");

/***/ }),

/***/ "./src/app/_resolver/tables.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolver/tables.resolver.ts ***!
  \**********************************************/
/*! exports provided: LaudosTablesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaudosTablesResolver", function() { return LaudosTablesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/dados.service */ "./src/app/_services/dados.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LaudosTablesResolver = /** @class */ (function () {
    function LaudosTablesResolver(tableDataService) {
        this.tableDataService = tableDataService;
    }
    LaudosTablesResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tableDataService.getAll()
                .subscribe(function (tableData) {
                console.log("tableData", tableData);
                return resolve({
                    dados: tableData,
                });
            });
        });
    };
    LaudosTablesResolver.ctorParameters = function () { return [
        { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_1__["DadosService"] }
    ]; };
    LaudosTablesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_dados_service__WEBPACK_IMPORTED_MODULE_1__["DadosService"]])
    ], LaudosTablesResolver);
    return LaudosTablesResolver;
}());



/***/ }),

/***/ "./src/app/_services/cirurgias-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/cirurgias-data.service.ts ***!
  \*****************************************************/
/*! exports provided: CirurgiasDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirurgiasDataService", function() { return CirurgiasDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CirurgiasDataService = /** @class */ (function () {
    function CirurgiasDataService(cirurgiaSource, currentCirugia) {
        if (cirurgiaSource === void 0) { cirurgiaSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ cirurgia: null, key: '' }); }
        if (currentCirugia === void 0) { currentCirugia = cirurgiaSource.asObservable(); }
        this.cirurgiaSource = cirurgiaSource;
        this.currentCirugia = currentCirugia;
    }
    CirurgiasDataService.prototype.changeContato = function (cirurgia, key) {
        this.cirurgiaSource.next({ cirurgia: cirurgia, key: key });
    };
    CirurgiasDataService.ctorParameters = function () { return [
        null,
        null
    ]; };
    CirurgiasDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], CirurgiasDataService);
    return CirurgiasDataService;
}());



/***/ }),

/***/ "./src/app/content/exames/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/content/exames/edit/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cirurgias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/cirurgias.service */ "./src/app/_services/cirurgias.service.ts");
/* harmony import */ var _services_cirurgias_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/cirurgias-data.service */ "./src/app/_services/cirurgias-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EditComponent = /** @class */ (function () {
    function EditComponent(cirurgiaService, CirurgiasDataService) {
        this.cirurgiaService = cirurgiaService;
        this.CirurgiasDataService = CirurgiasDataService;
        this.key = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CirurgiasDataService.currentCirugia.subscribe(function (data) {
            console.log(data);
            if (data.cirurgia && data.key) {
                _this.cirurgia.medico = data.cirurgia.medico;
                _this.cirurgia.paciente = data.cirurgia.paciente;
            }
        });
    };
    EditComponent.ctorParameters = function () { return [
        { type: _services_cirurgias_service__WEBPACK_IMPORTED_MODULE_1__["CirurgiasService"] },
        { type: _services_cirurgias_data_service__WEBPACK_IMPORTED_MODULE_2__["CirurgiasDataService"] }
    ]; };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/edit/edit.component.html")).default,
        }),
        __metadata("design:paramtypes", [_services_cirurgias_service__WEBPACK_IMPORTED_MODULE_1__["CirurgiasService"],
            _services_cirurgias_data_service__WEBPACK_IMPORTED_MODULE_2__["CirurgiasDataService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/content/exames/exames.module.ts":
/*!*************************************************!*\
  !*** ./src/app/content/exames/exames.module.ts ***!
  \*************************************************/
/*! exports provided: ExamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamesModule", function() { return ExamesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/content/exames/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/content/exames/list/list.component.ts");
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_layout/breadcrumb/breadcrumb.module */ "./src/app/_layout/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../partials/general/card/card.module */ "./src/app/content/partials/general/card/card.module.ts");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../partials/general/match-height/match-height.module */ "./src/app/content/partials/general/match-height/match-height.module.ts");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_layout/blockui/block-template.component */ "./src/app/_layout/blockui/block-template.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-material/material.module */ "./src/app/app-material/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.es5.js");
/* harmony import */ var _resolver_tables_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_resolver/tables.resolver */ "./src/app/_resolver/tables.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















var ExamesModule = /** @class */ (function () {
    function ExamesModule() {
    }
    ExamesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_8__["MatchHeightModule"],
                _app_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_16__["NouisliderModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_10__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_9__["BlockTemplateComponent"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: 'listCirur',
                        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                        resolve: {
                            exame: _resolver_tables_resolver__WEBPACK_IMPORTED_MODULE_17__["LaudosTablesResolver"]
                        }
                    },
                    {
                        path: 'editCirur',
                        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
                    }
                ])
            ],
            providers: [
                _resolver_tables_resolver__WEBPACK_IMPORTED_MODULE_17__["LaudosTablesResolver"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], ExamesModule);
    return ExamesModule;
}());



/***/ }),

/***/ "./src/app/content/exames/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/content/exames/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: Exame, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exame", function() { return Exame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/dados.service */ "./src/app/_services/dados.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var COMMA = 188;
var ENTER = 13;
var Exame = /** @class */ (function () {
    function Exame() {
    }
    return Exame;
}());

var ListComponent = /** @class */ (function () {
    function ListComponent(fb, auth, dadosService, datePipe, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.dadosService = dadosService;
        this.datePipe = datePipe;
        this.router = router;
        this.route = route;
        this.model = {};
        this.options = {
            minimize: true,
            reload: true,
            expand: true,
            close: true
        };
        this.submitted = false;
        this.loading = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.dados = [];
        this.displayedColumns1 = ['nome', 'tipoExame', 'idade', 'data', 'status', 'acao'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.originalData = [];
        this.filtersVisible = true;
        this.toggleFiltersLabel = 'Ocultar Filtros';
        // exame é o nome dado no modulo para os dados do resolver
        this.originalData = this.route.snapshot.data['exame'].dados;
        this.originalData['status'] = 'Baixar';
        console.log("dados recebidos", this.originalData);
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.originalData);
    }
    Object.defineProperty(ListComponent.prototype, "matSort", {
        set: function (ms) {
            this.sort = ms;
            this.setDataSourceAttributes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "matPaginator", {
        set: function (mp) {
            this.paginator = mp;
            this.setDataSourceAttributes();
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.setDataSourceAttributes = function () {
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
    };
    ListComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Lista de Cirurgias ',
            'links': [
                {
                    'name': 'Inicio',
                    'isLink': true,
                    'link': '/changelog'
                },
                {
                    'name': 'Cadastros',
                    'isLink': true,
                    'link': '#'
                }
            ]
        };
    };
    ListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
        console.log("filtro", this.dataSource1.data.filter);
        if (this.dataSource1.paginator) {
            this.dataSource1.paginator.firstPage();
        }
    };
    ListComponent.prototype.edit = function (dados) {
        var _this = this;
        var exames = dados['tipoexame'];
        var dtNiver = dados.niver.seconds * 1000;
        var dtConsulta = dados.data.seconds * 1000;
        exames.forEach(function (element) {
            //${this.datePipe.transform(dados.niver,"yyyyddMM")}
            var text = "(0010,0010) PN\t" + dados.firstName + " \n";
            text = text + ("(0010,0020) LO\t" + dados.cpf + "  \n");
            text = text + ("(0010,0030) DA\t" + _this.datePipe.transform(dtNiver, "yyyyddMM") + " \n");
            text = text + ("(0010,0040) CS\t" + dados.sexo + "\n");
            text = text + ("(0032,1032) PN\t" + dados.medico + " \n");
            text = text + ("(0032,1060) LO\t" + element + " \n");
            text = text + ("(0008,0060) CS\t" + dados.equipamento + " \n");
            text = text + ("(0040,0002) DA\t" + dtConsulta + " \n");
            text = text + ("(0040,0003) TM\t" + dados.horaConsulta + " \n");
            text = text + ("(0040,0006) PN\t" + dados.tecnico + " \n");
            text = text + ("(0040,0007) LO\t" + dados.descricao + " \n");
            text = text + "(0040,0009) SH\tSPD3445B\n";
            text = text + "(0040,0011) SH\tB34F56B\n";
            text = text + "(0040,1001) SH\tRP454G234B\n";
            text = text + ("(0008,0050) SH\t" + dados.id + " \n");
            text = text + ("(0020,000D) UI  " + dados.meunr);
            var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, dados.id + dados.descricao + '.txt');
            // console.log('extraindo',element)
        });
        this.dadosService.updateExame(dados.id);
    };
    ListComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f', { read: true, static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ListComponent.prototype, "userProfileForm", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('projectInfo'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "blockUIProjectInfo", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('userProfile'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "blockUIUserProfile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]])
    ], ListComponent.prototype, "matSort", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]])
    ], ListComponent.prototype, "matPaginator", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('htmlData', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListComponent.prototype, "htmlData", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/exames/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./styles/list.component.scss */ "./src/app/content/exames/list/styles/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/content/exames/list/styles/list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/content/exames/list/styles/list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-wrapper .table tbody tr td, .table-wrapper ng2-smart-table table tbody tr td, ng2-smart-table .table-wrapper table tbody tr td, .table-wrapper .table thead tr td, .table-wrapper ng2-smart-table table thead tr td, ng2-smart-table .table-wrapper table thead tr td {\n  color: black;\n  font-size: 13px;\n  letter-spacing: 2.3px;\n}\n.table-wrapper .table tbody tr td .profile-pic, .table-wrapper ng2-smart-table table tbody tr td .profile-pic, ng2-smart-table .table-wrapper table tbody tr td .profile-pic, .table-wrapper .table thead tr td .profile-pic, .table-wrapper ng2-smart-table table thead tr td .profile-pic, ng2-smart-table .table-wrapper table thead tr td .profile-pic {\n  border-radius: 50%;\n  height: auto;\n  width: 30px;\n}\n.table-wrapper {\n  overflow-y: hidden;\n}\n.table-wrapper .table th, .table-wrapper ng2-smart-table table th, ng2-smart-table .table-wrapper table th {\n  padding: 15px;\n  padding-left: 6px;\n}\n.table-wrapper .table thead tr th, .table-wrapper ng2-smart-table table thead tr th, ng2-smart-table .table-wrapper table thead tr th {\n  color: black;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1.3px;\n  text-transform: uppercase;\n}\n.table-wrapper .table tbody tr, .table-wrapper ng2-smart-table table tbody tr, ng2-smart-table .table-wrapper table tbody tr {\n  height: auto;\n  cursor: pointer;\n  transition: background-color 1s;\n}\n.table-wrapper .table tbody tr:hover, .table-wrapper ng2-smart-table table tbody tr:hover, ng2-smart-table .table-wrapper table tbody tr:hover {\n  background-color: #dbdbdb !important;\n}\n.table-wrapper .table tbody tr td, .table-wrapper ng2-smart-table table tbody tr td, ng2-smart-table .table-wrapper table tbody tr td {\n  border-bottom: none;\n}\n.table-wrapper .table.table-stripes thead tr th, .table-wrapper ng2-smart-table table.table thead tr th, ng2-smart-table .table-wrapper table.table thead tr th, .table-wrapper ng2-smart-table table.table-stripes thead tr th, .table-wrapper ng2-smart-table table thead tr th, ng2-smart-table .table-wrapper table.table-stripes thead tr th, ng2-smart-table .table-wrapper table thead tr th {\n  border-bottom: none;\n}\n.table-wrapper .table.table-stripes tbody tr:nth-child(odd), .table-wrapper ng2-smart-table table tbody tr:nth-child(odd), ng2-smart-table .table-wrapper table tbody tr:nth-child(odd) {\n  background-color: #e8e8e8;\n}\n.table-wrapper .table.table-stripes tbody tr td, .table-wrapper ng2-smart-table table.table tbody tr td, ng2-smart-table .table-wrapper table.table tbody tr td, .table-wrapper ng2-smart-table table.table-stripes tbody tr td, .table-wrapper ng2-smart-table table tbody tr td, ng2-smart-table .table-wrapper table.table-stripes tbody tr td, ng2-smart-table .table-wrapper table tbody tr td {\n  border-top: none;\n}\n.table-wrapper .table.table-lines thead tr th, .table-wrapper ng2-smart-table table.table-lines thead tr th, ng2-smart-table .table-wrapper table.table-lines thead tr th {\n  border-bottom: none;\n}\n/*! nouislider - 11.0.3 - 2018-01-21 14:04:07 */\n/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n  direction: ltr;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transform-origin: 0 0;\n}\n/* Offset direction\n */\nhtml:not([dir=rtl]) .noUi-horizontal .noUi-origin {\n  left: auto;\n  right: 0;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  position: absolute;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  left: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  left: -6px;\n  top: -17px;\n}\nhtml:not([dir=rtl]) .noUi-horizontal .noUi-handle {\n  right: -17px;\n  left: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  transform: translate(0, -50%, 0);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\nnouislider {\n  display: inline-block !important;\n  margin: 0;\n  vertical-align: middle;\n  width: 100%;\n}\nnouislider .noUi-horizontal {\n  background-color: #e1e1e1;\n  border: 0;\n  box-shadow: none;\n  height: 3px;\n}\nnouislider .noUi-horizontal .noUi-handle {\n  border-color: #394202;\n  border-radius: 50%;\n  height: 15px;\n  right: -15px !important;\n  width: 15px;\n}\nnouislider .noUi-horizontal .noUi-handle::before, nouislider .noUi-horizontal .noUi-handle::after {\n  content: none;\n}\nnouislider .noUi-horizontal .noUi-handle .noUi-tooltip {\n  display: none;\n}\nnouislider .noUi-horizontal .noUi-handle:hover .noUi-tooltip, nouislider .noUi-horizontal .noUi-handle:active .noUi-tooltip {\n  display: block;\n}\nnouislider .noUi-base {\n  height: 3px;\n}\nnouislider .noUi-connect {\n  background-color: #394202;\n}\n#smart-tables .table-1-filters .date-input {\n  display: inline;\n}\n#smart-tables .table-1-filters .reset-date {\n  background-color: transparent;\n  border: 0;\n  display: inline-block;\n  font-size: 22px;\n  vertical-align: sub;\n}\n#smart-tables nouislider {\n  padding: 16px 0;\n}\n#smart-tables .mat-cell {\n  vertical-align: middle;\n}\n#smart-tables .mat-cell[cell-name=status][cell-value=Completed] {\n  color: black;\n}\n#smart-tables .mat-cell[cell-name=status][cell-value=\"In Progress\"] {\n  color: #f8e81c;\n}\n#smart-tables .mat-cell[cell-name=status][cell-value=Cancelled] {\n  color: #ff001f;\n}\n#smart-tables .paginator .mat-paginator-page-size {\n  align-items: center;\n}\n#smart-tables .paginator .mat-paginator-page-size-label {\n  color: black;\n  font-size: 14px;\n  margin-left: 0px;\n  margin-right: 10px;\n}\n#smart-tables .paginator .mat-paginator-page-size-select {\n  margin: 0px;\n}\n#smart-tables .paginator .mat-paginator-page-size-select .mat-form-field-wrapper {\n  padding: 0px;\n  text-align: center;\n}\n#smart-tables .paginator .mat-paginator-page-size-select .mat-form-field-wrapper .mat-form-field-underline {\n  display: none;\n}\n#smart-tables .paginator .mat-paginator-range-actions {\n  color: #394202;\n  font-size: 14px;\n}\n#smart-tables .filter-wrapper .mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n#smart-tables .filter-wrapper .mat-form-field-underline {\n  display: inherit;\n}\n#smart-tables .btn-clear {\n  margin-left: 15px;\n}\n#smart-tables .row-input {\n  margin: 15px 0;\n}\n#smart-tables .btn {\n  background-color: #3c6d0c;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 1.3px;\n  padding: 7px 30px;\n}\n#smart-tables .interests-wrapper .mat-form-field-underline {\n  display: none;\n}\n#smart-tables .interests-wrapper .interests-list .mat-chip-remove {\n  align-self: flex-start;\n  margin-top: 1px;\n}\n.text-card {\n  display: inline-block;\n}\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\n  text-align: left;\n}\n.card-stats .card-header .card-icon + .card-title,\n.card-stats .card-header .card-icon + .card-category {\n  padding-top: 10px;\n  font-size: 30px;\n}\n.card-stats .card-header.card-header-icon .card-title, .card-stats .card-header.card-header-text .card-title, .card-stats .card-header.card-header-icon .card-category, .card-stats .card-header.card-header-text .card-category {\n  margin: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YWduZXJhbHZlcy9EZXNrdG9wL1Byb2pldG9zL3JhZGlvbG9naWFiYWNrMi9zcmMvYXBwL3N0eWxlcy9fdGFibGVzLnNjc3MiLCIvVXNlcnMvd2FnbmVyYWx2ZXMvRGVza3RvcC9Qcm9qZXRvcy9yYWRpb2xvZ2lhYmFjazIvc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2V4YW1lcy9saXN0L3N0eWxlcy9saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3dhZ25lcmFsdmVzL0Rlc2t0b3AvUHJvamV0b3MvcmFkaW9sb2dpYWJhY2syL3NyYy9hcHAvc3R5bGVzL19ub3Vpc2xpZGVyLnNjc3MiLCIvVXNlcnMvd2FnbmVyYWx2ZXMvRGVza3RvcC9Qcm9qZXRvcy9yYWRpb2xvZ2lhYmFjazIvc3JjL2FwcC9zdHlsZXMvX25vdWlzbGlkZXItb3ZlcnJpZGUuc2NzcyIsIi9Vc2Vycy93YWduZXJhbHZlcy9EZXNrdG9wL1Byb2pldG9zL3JhZGlvbG9naWFiYWNrMi9zcmMvYXBwL2NvbnRlbnQvZXhhbWVzL2xpc3Qvc3R5bGVzL2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQ3FFZ0I7QUNwRXBCO0FGQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FFRVI7QUZFQTtFQUNJLGtCQUFBO0FFQ0o7QUZDUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBRUNaO0FGR2dCO0VBQ0ksWUFBQTtFQUNBLGVDOENMO0VEN0NLLGlCQUFBO0VBQ0EscUJDb0RDO0VEbkRELHlCQUFBO0FFRHBCO0FGU1k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FFUGhCO0FGUWdCO0VBQ0ksb0NBQUE7QUVOcEI7QUZRZ0I7RUFFSSxtQkFBQTtBRVBwQjtBRmNvQjtFQUNJLG1CQUFBO0FFWnhCO0FGa0JvQjtFQUNJLHlCQUFBO0FFaEJ4QjtBRmtCb0I7RUFDSSxnQkFBQTtBRWhCeEI7QUZ3Qm9CO0VBQ0ksbUJBQUE7QUV0QnhCO0FDL0NBLCtDQUFBO0FBQ0E7OztFQUFBO0FBSUE7O0VBRUUsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBRGtERjtBQ2hEQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRG1ERjtBQ2pEQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRG9ERjtBQ2xEQTtFQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QURxREY7QUNuREE7O0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7QURzREY7QUNwREE7RUFBQTtBQUVBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUR1REY7QUNyREE7O0VBQUE7QUFHQTtFQUNFLFFBQUE7QUR3REY7QUN0REE7RUFDRSxTQUFBO0FEeURGO0FDdkRBO0VBQ0Usa0JBQUE7QUQwREY7QUN4REE7O0VBR0UsMEJBQUE7QUQyREY7QUN6REE7RUFDRSwwQkFBQTtBRDRERjtBQzFEQTtFQUFBO0FBRUE7RUFDRSxZQUFBO0FENkRGO0FDM0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRDhERjtBQzVEQTtFQUNFLFdBQUE7QUQrREY7QUM3REE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEZ0VGO0FDOURBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QURpRUY7QUMvREE7O0VBQUE7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdEQUFBO0FEa0VGO0FDaEVBO0VBQ0Usa0JBQUE7QURtRUY7QUNqRUE7RUFDRSxtQkFBQTtBRG9FRjtBQ2xFQTtFQUFBO0FBRUE7RUFDRSxpQkFBQTtBRHFFRjtBQ25FQTtFQUNFLGlCQUFBO0FEc0VGO0FDcEVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRFQUFBO0FEdUVGO0FDckVBO0VBQ0UseUVBQUE7QUR3RUY7QUN0RUE7RUFBQTtBQUVBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUR5RUY7QUN2RUE7RUFDRSxVQUFBO0FEMEVGO0FDeEVBOztFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUQyRUY7QUN6RUE7RUFDRSxTQUFBO0FENEVGO0FDMUVBO0VBQUE7QUFFQTtFQUNFLG1CQUFBO0FENkVGO0FDM0VBOzs7RUFHRSxtQkFBQTtBRDhFRjtBQzVFQTs7RUFBQTtBQUdBOztFQUdFLHNCQUFBO0FEK0VGO0FDN0VBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZ0ZGO0FDOUVBOztFQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURpRkY7QUMvRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRGtGRjtBQ2hGQTs7RUFBQTtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRG1GRjtBQ2pGQTtFQUNFLGdCQUFBO0FEb0ZGO0FDbEZBO0VBQ0UsZ0JBQUE7QURxRkY7QUNuRkE7O0VBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FEc0ZGO0FDcEZBO0VBRUUsK0JBQUE7QUR1RkY7QUNyRkE7RUFFRSw4QkFBQTtBRHdGRjtBQ3RGQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUR5RkY7QUN2RkE7RUFDRSxZQUFBO0FEMEZGO0FDeEZBO0VBQ0UsWUFBQTtBRDJGRjtBQ3pGQTs7RUFBQTtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRDRGRjtBQzFGQTtFQUVFLGdDQUFBO0VBQ0Esa0JBQUE7QUQ2RkY7QUMzRkE7RUFFRSw0QkFBQTtBRDhGRjtBQzVGQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUQrRkY7QUM3RkE7RUFDRSxXQUFBO0FEZ0dGO0FDOUZBO0VBQ0UsV0FBQTtBRGlHRjtBQy9GQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGtHRjtBQ2hHQTtFQUVFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QURtR0Y7QUNqR0E7RUFFRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FEb0dGO0FFM1hBO0VBQ0UsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FGOFhGO0FFNVhFO0VBQ0UseUJIR0k7RUdGSixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FGOFhKO0FFNVhJO0VBQ0UscUJIUkc7RUdTSCxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUY4WE47QUU1WE07RUFFRSxhQUFBO0FGNlhSO0FFMVhNO0VBQ0UsYUFBQTtBRjRYUjtBRXpYTTtFQUVFLGNBQUE7QUYwWFI7QUVyWEU7RUFDRSxXQUFBO0FGdVhKO0FFcFhFO0VBQ0UseUJIbkNLO0FDeVpUO0FHM1pNO0VBQ0UsZUFBQTtBSDhaUjtBRzFaTTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUptRE87RUlsRFAsbUJBQUE7QUg0WlI7QUd4Wkk7RUFDRSxlQUFBO0FIMFpOO0FHdlpJO0VBQ0Usc0JBQUE7QUh5Wk47QUd0WlE7RUFDRSxZQUFBO0FId1pWO0FHclpRO0VBQ0UsY0piRDtBQ29hVDtBR3BaUTtFQUNFLGNKbkJKO0FDeWFOO0FHOVlNO0VBQ0UsbUJBQUE7QUhnWlI7QUc3WU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUgrWVI7QUc1WU07RUFDRSxXQUFBO0FIOFlSO0FHNVlRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FIOFlWO0FHNVlVO0VBQ0UsYUFBQTtBSDhZWjtBR3pZTTtFQUNFLGNKNUNDO0VJNkNELGVBQUE7QUgyWVI7QUd0WU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtBSHdZUjtBR3JZTTtFQUNFLGdCQUFBO0FIdVlSO0FHbllJO0VBQ0UsaUJBQUE7QUhxWU47QUdsWUk7RUFDRSxjQUFBO0FIb1lOO0FHallJO0VBQ0UseUJKeEVFO0VJeUVGLFdKckVFO0VJc0VGLGVKNUJTO0VJNkJULGlCQUFBO0VBQ0EscUJKdkJlO0VJd0JmLGlCQUFBO0FIbVlOO0FHL1hNO0VBQ0UsYUFBQTtBSGlZUjtBRzdYUTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBSCtYVjtBR3pYRTtFQUNFLHFCQUFBO0FINFhKO0FHdFhNO0VBRUUsZ0JBQUE7QUh3WFI7QUdyWE07O0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FIdVhSO0FHcFhNO0VBSUUsVUFBQTtBSG1YUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXhhbWVzL2xpc3Qvc3R5bGVzL2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIldGQge1xuICAgIGNvbG9yOiBncmF5c2NhbGUoJGNvbG9yOiAjMDAwMDAwKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZy1sZztcbiAgICAucHJvZmlsZS1waWMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG4udGFibGUtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC50YWJsZSB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmcteHhzO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi50YWJsZS1zdHJpcGVzIHtcbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXlzY2FsZSgkY29sb3I6ICNlOWU3ZTcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi50YWJsZS1saW5lcyB7XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5uZzItc21hcnQtdGFibGUge1xuICAgIHRhYmxlIHtcbiAgICAgICAgQGV4dGVuZCAudGFibGU7XG4gICAgICAgIEBleHRlbmQgLnRhYmxlLXN0cmlwZXM7XG4gICAgfVxufSIsIi8vIENvbG9yc1xuJHZpb2xldDogIzRlMDE5MjtcbiRwaW5rOiAjZmY4N2YzO1xuJHBpbmsyOiAjMjA4ZjMyO1xuJHBpbmszOiAjZjJlM2ZmO1xuJGJlaWdlOiAjZjRmM2VmO1xuJGJlaWdlMjogI2ZmZjNmNDtcbiRhcXVhOiAjNTBlM2MyO1xuJHB1cnBsZTogIzM5NDIwMjtcbiRwdXJwbGUyOiAjMWI4MzIzO1xuJGdyZXk6ICM5YjliOWI7XG4kZ3JleTI6ICNmNmY2ZjY7XG4kZ3JleTM6ICNkYmRiZGI7XG4kZ3JleTQ6ICNlMWUxZTE7XG4kZ3JleTU6ICM1NTU7XG4kZ3JleTY6ICNmNGYzZWY7XG4kZ3JleTc6ICNmMGYwZjA7XG4kZ3JleTg6ICM0YTRhNGE7XG4kcmVkOiAjZmYwMDFmO1xuJHJlZDI6ICNkMDAxMWI7XG4keWVsbG93OiAjZjhlODFjO1xuJG9yYW5nZTogI2Y2YTYyMztcbiRvcmFuZ2UyOiAjZjVhNjIzO1xuJGdyZWVuOiAjM2M2ZDBjO1xuJGdyZWVuMjogIzdkZDMyMTljO1xuJGdyZWVuMzogIzdjOTEwOTtcbiRncmVlbjQ6ICMzOTQyMDI7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kYmx1ZTogIzI2MDRhZjtcbiRibHVlLWZiOiAjM2I1OTk4O1xuJHNreWJsdWU6ICMwNGFiZmY7XG5cblxuJGJvZHktYmctY29sb3I6ICRiZWlnZTtcblxuJG5hdi1iZy10b3AtY29sb3I6ICRncmVlbjtcbiRuYXYtYmctYnRtLWNvbG9yOiAkZ3JlZW47XG5cbiRpbmFjdGl2ZS1iZy1jb2xvcjogJGdyZXkzO1xuXG4kY2FyZC1iZy1jb2xvcjogJHdoaXRlO1xuJGNhcmQtdHh0LWNvbG9yOiAkZ3JlZW40O1xuXG4kZm9ybS1sYWJlbC1iaWctY29sb3I6ICRncmVlbjQ7XG4kZm9ybS1sYWJlbC1jb2xvcjogJGdyZXk7XG4kZm9ybS1pbnB1dC1jb2xvcjogJGdyZXk4O1xuJGZvcm0taW5wdXQtYnJvZGVyLWNvbG9yOiAkZ3JleTQ7XG4kZm9ybS1pbnB1dC1icm9kZXItcmFkaXVzOiA0cHg7XG4kZm9ybS1jaGVja2JveC1yYWRpby1jb2xvcjogJGdyZWVuMjtcbiRmb3JtLWVycm9yLWNvbG9yOiAkcmVkMjtcbiRmb3JtLWVycm9yLWJrZy1jb2xvcjogJGJlaWdlMjtcbiRmb3JtLXRhZy1jb2xvcjogJGdyZWVuO1xuJGZvcm0tc2xpZGVyLWNvbG9yOiAkZ3JlZW47XG5cbiRzaGFkb3c6IDAgMnB4IDlweCAwIHJnYmEoMCwgMCwgMCwgLjA2KTtcbiRzaGFkb3ctaG92ZXI6IDAgMnB4IDlweCAwIHJnYmEoMCwgMCwgMCwgLjUpO1xuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjMyKTtcbiRzaGFkb3ctaW5zZXQ6IGluc2V0IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAuMik7XG5cbi8vIFRleHRzXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUteHh4bGc6IDU3cHg7XG4kZm9udC1zaXplLXh4bGc6IDQwcHg7XG4kZm9udC1zaXplLXhsZzogMzJweDtcbiRmb250LXNpemUtbGc6IDIycHg7XG4kZm9udC1zaXplLW1kOiAxN3B4O1xuJGZvbnQtc2l6ZS1zbTogMTRweDtcbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXh4czogOXB4O1xuXG4kbGV0dGVyLXNwYWNpbmctbGc6IDIuM3B4O1xuJGxldHRlci1zcGFjaW5nLW1kOiAyLjFweDtcbiRsZXR0ZXItc3BhY2luZy1zbTogMS44cHg7XG4kbGV0dGVyLXNwYWNpbmcteHM6IDEuNXB4O1xuJGxldHRlci1zcGFjaW5nLXh4czogMS4zcHg7XG4kbGV0dGVyLXNwYWNpbmcteHh4czogMS4xcHg7XG5cbi8vIE1lYXN1cmVzXG4kY2hlY2tib3gtcmFkaW8tc2l6ZTogMTJweDtcbiRpbnB1dC1oZWlnaHQ6IDM4cHg7XG4kc2VwYXJhdGlvbjogMTVweDtcbiRzaWRlLW1lbnUtd2lkdGg6IDI2MHB4O1xuJHRvcC1uYXZiYXItYnJlYWtwb2ludDogOTEwcHg7XG5cbi8vIEltYWdlcyAtIFByZWxvYWQgaW1hZ2VzXG4kcHJlbG9hZC1pbWFnZS1iZzogcmdiYShkYXJrZW4oJHdoaXRlLCAxMCksIC4yNSk7XG5cbi8vIEltYWdlcyAtIFByZWxvYWQgaW1hZ2VzIC0gU3Bpbm5lciBvbiBsb2FkXG4kc3Bpbm5lci1zaXplOiAyOHB4O1xuJHNwaW5uZXItY29sb3I6ICRncmV5O1xuIiwiLnRhYmxlLXdyYXBwZXIgLnRhYmxlIHRib2R5IHRyIHRkLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQsIG5nMi1zbWFydC10YWJsZSAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZCwgLnRhYmxlLXdyYXBwZXIgLnRhYmxlIHRoZWFkIHRyIHRkLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUgdGhlYWQgdHIgdGQsIG5nMi1zbWFydC10YWJsZSAudGFibGUtd3JhcHBlciB0YWJsZSB0aGVhZCB0ciB0ZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMi4zcHg7XG59XG4udGFibGUtd3JhcHBlciAudGFibGUgdGJvZHkgdHIgdGQgLnByb2ZpbGUtcGljLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUgdGJvZHkgdHIgdGQgLnByb2ZpbGUtcGljLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQgLnByb2ZpbGUtcGljLCAudGFibGUtd3JhcHBlciAudGFibGUgdGhlYWQgdHIgdGQgLnByb2ZpbGUtcGljLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUgdGhlYWQgdHIgdGQgLnByb2ZpbGUtcGljLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQgdHIgdGQgLnByb2ZpbGUtcGljIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZSB0aCwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRoLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGgge1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZSB0aGVhZCB0ciB0aCwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQgdHIgdGgge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZSB0Ym9keSB0ciwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRib2R5IHRyLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZSB0Ym9keSB0cjpob3ZlciwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRib2R5IHRyOmhvdmVyLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiICFpbXBvcnRhbnQ7XG59XG4udGFibGUtd3JhcHBlciAudGFibGUgdGJvZHkgdHIgdGQsIC50YWJsZS13cmFwcGVyIG5nMi1zbWFydC10YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZCwgbmcyLXNtYXJ0LXRhYmxlIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZS50YWJsZS1zdHJpcGVzIHRoZWFkIHRyIHRoLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUudGFibGUgdGhlYWQgdHIgdGgsIG5nMi1zbWFydC10YWJsZSAudGFibGUtd3JhcHBlciB0YWJsZS50YWJsZSB0aGVhZCB0ciB0aCwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlLnRhYmxlLXN0cmlwZXMgdGhlYWQgdHIgdGgsIC50YWJsZS13cmFwcGVyIG5nMi1zbWFydC10YWJsZSB0YWJsZSB0aGVhZCB0ciB0aCwgbmcyLXNtYXJ0LXRhYmxlIC50YWJsZS13cmFwcGVyIHRhYmxlLnRhYmxlLXN0cmlwZXMgdGhlYWQgdHIgdGgsIG5nMi1zbWFydC10YWJsZSAudGFibGUtd3JhcHBlciB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4udGFibGUtd3JhcHBlciAudGFibGUudGFibGUtc3RyaXBlcyB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChvZGQpLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLnRhYmxlLXdyYXBwZXIgLnRhYmxlLnRhYmxlLXN0cmlwZXMgdGJvZHkgdHIgdGQsIC50YWJsZS13cmFwcGVyIG5nMi1zbWFydC10YWJsZSB0YWJsZS50YWJsZSB0Ym9keSB0ciB0ZCwgbmcyLXNtYXJ0LXRhYmxlIC50YWJsZS13cmFwcGVyIHRhYmxlLnRhYmxlIHRib2R5IHRyIHRkLCAudGFibGUtd3JhcHBlciBuZzItc21hcnQtdGFibGUgdGFibGUudGFibGUtc3RyaXBlcyB0Ym9keSB0ciB0ZCwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHRib2R5IHRyIHRkLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUudGFibGUtc3RyaXBlcyB0Ym9keSB0ciB0ZCwgbmcyLXNtYXJ0LXRhYmxlIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi50YWJsZS13cmFwcGVyIC50YWJsZS50YWJsZS1saW5lcyB0aGVhZCB0ciB0aCwgLnRhYmxlLXdyYXBwZXIgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlLnRhYmxlLWxpbmVzIHRoZWFkIHRyIHRoLCBuZzItc21hcnQtdGFibGUgLnRhYmxlLXdyYXBwZXIgdGFibGUudGFibGUtbGluZXMgdGhlYWQgdHIgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiEgbm91aXNsaWRlciAtIDExLjAuMyAtIDIwMTgtMDEtMjEgMTQ6MDQ6MDcgKi9cbi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXG4gKi9cbi5ub1VpLXRhcmdldCxcbi5ub1VpLXRhcmdldCAqIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubm9VaS10YXJnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4ubm9VaS1iYXNlLFxuLm5vVWktY29ubmVjdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxuICovXG4ubm9VaS1jb25uZWN0cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ub1VpLWNvbm5lY3QsXG4ubm9VaS1vcmlnaW4ge1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuLyogT2Zmc2V0IGRpcmVjdGlvblxuICovXG5odG1sOm5vdChbZGlyPXJ0bF0pIC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxuICogY29ubmVjdCBlbGVtZW50cy5cbiAqL1xuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ubm9VaS1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XG4gKi9cbi5ub1VpLWhvcml6b250YWwge1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGVmdDogLTE3cHg7XG4gIHRvcDogLTZweDtcbn1cblxuLm5vVWktdmVydGljYWwge1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMzRweDtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiAtMTdweDtcbn1cblxuaHRtbDpub3QoW2Rpcj1ydGxdKSAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIHJpZ2h0OiAtMTdweDtcbiAgbGVmdDogYXV0bztcbn1cblxuLyogU3R5bGluZztcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxuICovXG4ubm9VaS10YXJnZXQge1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xufVxuXG4ubm9VaS1jb25uZWN0cyB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XG59XG5cbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XG4gKi9cbi5ub1VpLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IG5zLXJlc2l6ZTtcbn1cblxuLm5vVWktaGFuZGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XG59XG5cbi5ub1VpLWFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XG59XG5cbi8qIEhhbmRsZSBzdHJpcGVzO1xuICovXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDZweDtcbn1cblxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgbGVmdDogMTdweDtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDE0cHg7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XG4gIHRvcDogMTdweDtcbn1cblxuLyogRGlzYWJsZWQgc3RhdGU7XG4gKi9cbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XG59XG5cbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBCYXNlO1xuICpcbiAqL1xuLm5vVWktcGlwcyxcbi5ub1VpLXBpcHMgKiB7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5vVWktcGlwcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi8qIFZhbHVlcztcbiAqXG4gKi9cbi5ub1VpLXZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub1VpLXZhbHVlLXN1YiB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi8qIE1hcmtpbmdzO1xuICpcbiAqL1xuLm5vVWktbWFya2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xufVxuXG4ubm9VaS1tYXJrZXItc3ViIHtcbiAgYmFja2dyb3VuZDogI0FBQTtcbn1cblxuLm5vVWktbWFya2VyLWxhcmdlIHtcbiAgYmFja2dyb3VuZDogI0FBQTtcbn1cblxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XG4gKlxuICovXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGhlaWdodDogODBweDtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbn1cblxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xufVxuXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLyogVmVydGljYWwgbGF5b3V0O1xuICpcbiAqL1xuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSwgMCk7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xufVxuXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xuICB3aWR0aDogMTVweDtcbn1cblxuLm5vVWktdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDEyMCU7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMjAlO1xufVxuXG5ub3Vpc2xpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5ub3Vpc2xpZGVyIC5ub1VpLWhvcml6b250YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogM3B4O1xufVxubm91aXNsaWRlciAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIGJvcmRlci1jb2xvcjogIzM5NDIwMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTVweDtcbn1cbm5vdWlzbGlkZXIgLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGU6OmJlZm9yZSwgbm91aXNsaWRlciAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxubm91aXNsaWRlciAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSAubm9VaS10b29sdGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm5vdWlzbGlkZXIgLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGU6aG92ZXIgLm5vVWktdG9vbHRpcCwgbm91aXNsaWRlciAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZTphY3RpdmUgLm5vVWktdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubm91aXNsaWRlciAubm9VaS1iYXNlIHtcbiAgaGVpZ2h0OiAzcHg7XG59XG5ub3Vpc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0MjAyO1xufVxuXG4jc21hcnQtdGFibGVzIC50YWJsZS0xLWZpbHRlcnMgLmRhdGUtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jc21hcnQtdGFibGVzIC50YWJsZS0xLWZpbHRlcnMgLnJlc2V0LWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cbiNzbWFydC10YWJsZXMgbm91aXNsaWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cbiNzbWFydC10YWJsZXMgLm1hdC1jZWxsIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiNzbWFydC10YWJsZXMgLm1hdC1jZWxsW2NlbGwtbmFtZT1zdGF0dXNdW2NlbGwtdmFsdWU9Q29tcGxldGVkXSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiNzbWFydC10YWJsZXMgLm1hdC1jZWxsW2NlbGwtbmFtZT1zdGF0dXNdW2NlbGwtdmFsdWU9XCJJbiBQcm9ncmVzc1wiXSB7XG4gIGNvbG9yOiAjZjhlODFjO1xufVxuI3NtYXJ0LXRhYmxlcyAubWF0LWNlbGxbY2VsbC1uYW1lPXN0YXR1c11bY2VsbC12YWx1ZT1DYW5jZWxsZWRdIHtcbiAgY29sb3I6ICNmZjAwMWY7XG59XG4jc21hcnQtdGFibGVzIC5wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzbWFydC10YWJsZXMgLnBhZ2luYXRvciAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuI3NtYXJ0LXRhYmxlcyAucGFnaW5hdG9yIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZS1zZWxlY3Qge1xuICBtYXJnaW46IDBweDtcbn1cbiNzbWFydC10YWJsZXMgLnBhZ2luYXRvciAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jc21hcnQtdGFibGVzIC5wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNzbWFydC10YWJsZXMgLnBhZ2luYXRvciAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zIHtcbiAgY29sb3I6ICMzOTQyMDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNzbWFydC10YWJsZXMgLmZpbHRlci13cmFwcGVyIC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jc21hcnQtdGFibGVzIC5maWx0ZXItd3JhcHBlciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbiNzbWFydC10YWJsZXMgLmJ0bi1jbGVhciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuI3NtYXJ0LXRhYmxlcyAucm93LWlucHV0IHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4jc21hcnQtdGFibGVzIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M2ZDBjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xuICBwYWRkaW5nOiA3cHggMzBweDtcbn1cbiNzbWFydC10YWJsZXMgLmludGVyZXN0cy13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuI3NtYXJ0LXRhYmxlcyAuaW50ZXJlc3RzLXdyYXBwZXIgLmludGVyZXN0cy1saXN0IC5tYXQtY2hpcC1yZW1vdmUge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi50ZXh0LWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIgLmNhcmQtaWNvbiArIC5jYXJkLXRpdGxlLFxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyIC5jYXJkLWljb24gKyAuY2FyZC1jYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiAuY2FyZC10aXRsZSwgLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXRleHQgLmNhcmQtdGl0bGUsIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIC5jYXJkLWNhdGVnb3J5LCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCAuY2FyZC1jYXRlZ29yeSB7XG4gIG1hcmdpbjogMTA7XG59IiwiLyohIG5vdWlzbGlkZXIgLSAxMS4wLjMgLSAyMDE4LTAxLTIxIDE0OjA0OjA3ICovXG4vKiBGdW5jdGlvbmFsIHN0eWxpbmc7XG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxuICovXG4ubm9VaS10YXJnZXQsXG4ubm9VaS10YXJnZXQgKiB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ub1VpLXRhcmdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ubm9VaS1iYXNlLFxuLm5vVWktY29ubmVjdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cbiAqL1xuLm5vVWktY29ubmVjdHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwO1xufVxuLm5vVWktY29ubmVjdCxcbi5ub1VpLW9yaWdpbiB7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuLyogT2Zmc2V0IGRpcmVjdGlvblxuICovXG5odG1sOm5vdChbZGlyPVwicnRsXCJdKSAubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxuICovXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xuICB3aWR0aDogMDtcbn1cbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcbiAgaGVpZ2h0OiAwO1xufVxuLm5vVWktaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG4ubm9VaS1zdGF0ZS1kcmFnICoge1xuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xuICovXG4ubm9VaS1ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsZWZ0OiAtMTdweDtcbiAgdG9wOiAtNnB4O1xufVxuLm5vVWktdmVydGljYWwge1xuICB3aWR0aDogMThweDtcbn1cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogLTE3cHg7XG59XG5odG1sOm5vdChbZGlyPVwicnRsXCJdKSAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIHJpZ2h0OiAtMTdweDtcbiAgbGVmdDogYXV0bztcbn1cbi8qIFN0eWxpbmc7XG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcbiAqL1xuLm5vVWktdGFyZ2V0IHtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcbn1cbi5ub1VpLWNvbm5lY3RzIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XG59XG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xuICovXG4ubm9VaS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbn1cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbnMtcmVzaXplO1xufVxuLm5vVWktaGFuZGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XG59XG4ubm9VaS1hY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xufVxuLyogSGFuZGxlIHN0cmlwZXM7XG4gKi9cbi5ub1VpLWhhbmRsZTpiZWZvcmUsXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XG4gIGxlZnQ6IDE0cHg7XG4gIHRvcDogNnB4O1xufVxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgbGVmdDogMTdweDtcbn1cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAxNHB4O1xufVxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgdG9wOiAxN3B4O1xufVxuLyogRGlzYWJsZWQgc3RhdGU7XG4gKi9cbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XG59XG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi8qIEJhc2U7XG4gKlxuICovXG4ubm9VaS1waXBzLFxuLm5vVWktcGlwcyAqIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5vVWktcGlwcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM5OTk7XG59XG4vKiBWYWx1ZXM7XG4gKlxuICovXG4ubm9VaS12YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vVWktdmFsdWUtc3ViIHtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi8qIE1hcmtpbmdzO1xuICpcbiAqL1xuLm5vVWktbWFya2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xufVxuLm5vVWktbWFya2VyLXN1YiB7XG4gIGJhY2tncm91bmQ6ICNBQUE7XG59XG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xuICBiYWNrZ3JvdW5kOiAjQUFBO1xufVxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XG4gKlxuICovXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGhlaWdodDogODBweDtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG59XG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG59XG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XG4gIGhlaWdodDogMTBweDtcbn1cbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLyogVmVydGljYWwgbGF5b3V0O1xuICpcbiAqL1xuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUsIDApO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG59XG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xuICB3aWR0aDogMTBweDtcbn1cbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XG4gIHdpZHRoOiAxNXB4O1xufVxuLm5vVWktdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAxMjAlO1xufVxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDEyMCU7XG59XG4iLCJAaW1wb3J0ICcuL19ub3Vpc2xpZGVyJztcblxuLy8gTm9VSVNsaWRlciBvdmVycmlkZVxubm91aXNsaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5ub1VpLWhvcml6b250YWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5NDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBoZWlnaHQ6IDNweDtcblxuICAgIC5ub1VpLWhhbmRsZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRwdXJwbGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICByaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5ub1VpLXRvb2x0aXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5ub1VpLXRvb2x0aXAsXG4gICAgICAmOmFjdGl2ZSAubm9VaS10b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vVWktYmFzZSB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gIH1cblxuICAubm9VaS1jb25uZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xuICB9XG59XG4iLCIgIEBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzJztcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL190YWJsZXMnO1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvX25vdWlzbGlkZXItb3ZlcnJpZGUnO1xuXG4gICNzbWFydC10YWJsZXMge1xuICAgIC50YWJsZS0xLWZpbHRlcnMge1xuICAgICAgLmRhdGUtaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgXG4gICAgICB9XG5cbiAgICAgIC5yZXNldC1kYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm91aXNsaWRlciB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLm1hdC1jZWxsIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICZbY2VsbC1uYW1lPSdzdGF0dXMnXSB7XG4gICAgICAgICZbY2VsbC12YWx1ZT0nQ29tcGxldGVkJ10ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2VsbC12YWx1ZT0nSW4gUHJvZ3Jlc3MnXSB7XG4gICAgICAgICAgY29sb3I6ICR5ZWxsb3c7XG4gICAgICAgIH1cblxuICAgICAgICAmW2NlbGwtdmFsdWU9J0NhbmNlbGxlZCddIHtcbiAgICAgICAgICBjb2xvcjogJHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0b3Ige1xuXG4gICAgICAvL21hdGVyaWFsIHBhZ2luYXRvclxuICAgICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zIHtcbiAgICAgICAgY29sb3I6ICRncmVlbjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlsdGVyLXdyYXBwZXIge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1jbGVhciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG5cbiAgICAucm93LWlucHV0IHtcbiAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZy14eHM7XG4gICAgICBwYWRkaW5nOiA3cHggMzBweDtcbiAgICB9XG5cbiAgICAuaW50ZXJlc3RzLXdyYXBwZXIge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRlcmVzdHMtbGlzdCB7XG4gICAgICAgIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRleHQtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNhcmQtc3RhdHMge1xuICAgIC5jYXJkLWhlYWRlciB7XG5cbiAgICAgICYuY2FyZC1oZWFkZXItaWNvbixcbiAgICAgICYuY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWljb24rLmNhcmQtdGl0bGUsXG4gICAgICAuY2FyZC1pY29uKy5jYXJkLWNhdGVnb3J5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cblxuICAgICAgJi5jYXJkLWhlYWRlci1pY29uIC5jYXJkLXRpdGxlLFxuICAgICAgJi5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLXRpdGxlLFxuICAgICAgJi5jYXJkLWhlYWRlci1pY29uIC5jYXJkLWNhdGVnb3J5LFxuICAgICAgJi5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLWNhdGVnb3J5IHtcbiAgICAgICAgbWFyZ2luOiAxMDtcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=app-content-exames-exames-module.js.map