(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/breadcrumb/breadcrumb.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/breadcrumb/breadcrumb.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"content-header-left col-md-6 col-12 mb-2 breadcrumb-new\" *ngIf=\"breadcrumb\">\n    <h3 class=\"content-header-title mb-0 d-inline-block\">{{breadcrumb.mainlabel}}</h3>\n    <div class=\"row breadcrumbs-top d-inline-block\">\n      <div class=\"breadcrumb-wrapper col-12\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\" *ngFor=\"let link of breadcrumb.links\">\n            <a *ngIf=\"link.isLink\" routerLink=\"{{link.link}}\">{{link.name}}</a>\n            <span *ngIf=\"!link.isLink\">{{link.name}}</span>\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/customizer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/customizer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customizer border-left ft-blue-grey border-left ft-lighten-4 d-none d-xl-block\" id=\"customizer\">\n  <a [routerLink]=\"\" class=\"customizer-close\" (click)=\"toggleCustomizer($event)\"><i class=\"feather ft-x font-medium-3\"></i></a>\n  <a [routerLink]=\"\" class=\"customizer-toggle bg-danger box-shadow-3\" (click)=\"toggleCustomizer($event)\"><i\n      class=\"feather ft-settings font-medium-3 spinner white\"></i></a>\n  <div class=\"customizer-content p-2\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n    <h4 class=\"text-uppercase mb-0\">Customizaçao de Temas</h4>\n    <hr>\n    <p>Escolha as opções de Customização </p>\n    <h5 class=\"mt-1 mb-1 text-bold-500\">Opçoes de cores do menu</h5>\n    <div class=\"form-group\">\n      <!-- Outline Button group -->\n      <div class=\"btn-group customizer-sidebar-options\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-info _light\" (click)=\"setMenuColor('menu-light',$event)\"\n          data-sidebar=\"menu-light\" id=\"light-menu\">Light Menu\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-info _dark active\" (click)=\"setMenuColor('menu-dark',$event)\"\n          data-sidebar=\"menu-dark\" id=\"dark-menu\">Dark Menu\n        </button>\n\n         <button type=\"button\" class=\"btn btn-outline-info _green\" (click)=\"setMenuColor('menu-green',$event)\"\n          data-sidebar=\"menu-green\" id=\"green-menu\">Green Menu\n        </button>\n\n         <button type=\"button\" class=\"btn btn-outline-info _blue\" (click)=\"setMenuColor('menu-blue',$event)\"\n          data-sidebar=\"menu-blue\" id=\"blue-menu\">Blue Menu\n        </button>\n      </div>\n    </div>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Opções de Layout</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified layout-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Layouts</ng-template>\n              <ng-template ngbTabContent>\n                <div role=\"tabpanel\" class=\"tab-panel active px-1 pt-1\" id=\"tabIcon21\" aria-expanded=\"true\"\n                  aria-labelledby=\"baseIcon-tab21\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"_themeSettingsConfig.menu == 'collapse'\" (change)=\"toggleFixMenu($event)\"\n                    [(ngModel)]=\"isCollapsedMenu\"  name=\"collapsed-sidebar\" id=\"collapsed-sidebar\" >\n                    <label class=\"custom-control-label\" for=\"collapsed-sidebar\">Menu Collapsed</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\"\n                      name=\"fixed-layout\" id=\"fixed-layout\" (ngModelChange)=\"toggleLayout('fixed')\" [(ngModel)]=\"isfixChecked\">\n                    <label class=\"custom-control-label\" for=\"fixed-layout\">Fixed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\"\n                      name=\"boxed-layout\" id=\"boxed-layout\" (ngModelChange)=\"toggleLayout('boxed')\" [(ngModel)]=\"isboxChecked\">\n                    <label class=\"custom-control-label\" for=\"boxed-layout\">Boxed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"setLayout('static',$event)\"\n                    [(ngModel)]=\"isStaticLayout\" name=\"static-layout\" id=\"static-layout\">\n                    <label class=\"custom-control-label\" for=\"static-layout\">Static Layout</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Navegação</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon22\" aria-labelledby=\"baseIcon-tab22\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"right-side-icons\"\n                    [(ngModel)]=\"isRightSideIcons\" (change)=\"setNavigation('menu-icon-right',$event)\" id=\"right-side-icons\">\n                    <label class=\"custom-control-label\" for=\"right-side-icons\">Icones do lado Direito</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"bordered-navigation\"\n                    [(ngModel)]=\"isBorderedNavigation\" (change)=\"setNavigation('menu-bordered',$event)\" id=\"bordered-navigation\">\n                    <label class=\"custom-control-label\" for=\"bordered-navigation\">Bordas entre Itens</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"flipped-navigation\"\n                    [(ngModel)]=\"isFlippedNavigation\" (change)=\"setNavigation('menu-flipped',$event)\" id=\"flipped-navigation\">\n                    <label class=\"custom-control-label\" for=\"flipped-navigation\">Inverter </label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"collapsible-navigation\"\n                    [(ngModel)]=\"isCollapsibleNavigation\" (change)=\"setNavigation('menu-collapsible',$event)\" id=\"collapsible-navigation\">\n                    <label class=\"custom-control-label\" for=\"collapsible-navigation\">Navegação Collapsible </label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"static-navigation\"\n                    [(ngModel)]=\"isStaticNavigation\" (change)=\"setNavigation('menu-static',$event)\" id=\"static-navigation\">\n                    <label class=\"custom-control-label\" for=\"static-navigation\">Navegação Estatica</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Barra de Navegação</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon23\" aria-labelledby=\"baseIcon-tab23\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"navbar-static-top\"\n                    [(ngModel)]=\"isStaticTop\" (change)=\"setNavbar($event)\" id=\"navbar-static-top\">\n                    <label class=\"custom-control-label\" for=\"navbar-static-top\">Estatica no Topo</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Opções de Cores de Navegação</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified color-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset (tabChange)=\"changeNavbarFontColor($event)\">\n            <ngb-tab id=\"semi-dark\">\n              <ng-template ngbTabTitle>Semi Dark</ng-template>\n              <ng-template ngbTabContent class=\"px-1\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" checked class=\"custom-control-input bg-default\"\n                        (click)=\"setColor('bg-default')\" id=\"opt-default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-default')\"\n                        for=\"opt-default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"opt-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\"\n                        for=\"opt-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"opt-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\"\n                        for=\"opt-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"opt-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\"\n                        for=\"opt-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"opt-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"opt-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"opt-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"opt-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"opt-pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"opt-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"semi-light\">\n              <ng-template ngbTabTitle>Semi Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h6>Solid</h6>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h6>Gradient</h6>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-gradient-x-pink')\" id=\"bg-gradient-x-pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"dark\">\n              <ng-template ngbTabTitle>Dark</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h3>Solid</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h3>Gradient</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        id=\"bg-gradient-x-pink\" (click)=\"setColor('bg-gradient-x-pink')\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"light\">\n              <ng-template ngbTabTitle>Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-pane\" id=\"clrOpt4\" aria-labelledby=\"color-opt-4\">\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue-grey\"\n                      (click)=\"setColor('bg-blue-grey bg-lighten-4')\" id=\"light-blue-grey\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey bg-lighten-4')\"\n                      for=\"light-blue-grey\">Default</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-primary\"\n                      (click)=\"setColor('bg-primary bg-lighten-4')\" id=\"light-primary\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-primary bg-lighten-4')\"\n                      for=\"light-primary\">Primary</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-danger\"\n                      (click)=\"setColor('bg-danger bg-lighten-4')\" id=\"light-danger\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-danger bg-lighten-4')\"\n                      for=\"light-danger\">Danger</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-success\"\n                      (click)=\"setColor('bg-success bg-lighten-4')\" id=\"light-success\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-success bg-lighten-4')\"\n                      for=\"light-success\">Success</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue\"\n                      (click)=\"setColor('bg-blue bg-lighten-4')\" id=\"light-blue\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue bg-lighten-4')\"\n                      for=\"light-blue\">Blue</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-cyan\"\n                      (click)=\"setColor('bg-cyan bg-lighten-4')\" id=\"light-cyan\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan bg-lighten-4')\"\n                      for=\"light-cyan\">Cyan</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-pink\"\n                      (click)=\"setColor('bg-pink bg-lighten-4')\" id=\"light-pink\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-pink bg-lighten-4')\"\n                      for=\"light-pink\">Pink</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customizer border-left ft-blue-grey border-left ft-lighten-4 d-none d-xl-block\" id=\"customizer\">\n  <a [routerLink]=\"\" class=\"customizer-close\" (click)=\"toggleCustomizer($event)\"><i class=\"feather ft-x font-medium-3\"></i></a>\n  <a [routerLink]=\"\" class=\"customizer-toggle bg-danger box-shadow-3\" (click)=\"toggleCustomizer($event)\"><i\n      class=\"feather ft-settings font-medium-3 spinner white\"></i></a>\n  <div class=\"customizer-content p-2\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n    <h4 class=\"text-uppercase mb-0\">Theme Customizer</h4>\n    <hr>\n    <p>Customize e veja em tempo real</p>\n    <h5 class=\"mt-1 mb-1 text-bold-500\">Opções de Cores para o Menu</h5>\n    <div class=\"form-group\">\n      <!-- Outline Button group -->\n      <div class=\"btn-group customizer-sidebar-options\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-info _light active\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-light\" id=\"light-menu\">Light Menu\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-info _dark\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-dark\" id=\"dark-menu\">Dark Menu\n        </button>\n         <button type=\"button\" class=\"btn btn-outline-info _green\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-greeen\" id=\"blue-menu\">Green Menu\n        </button>\n         <button type=\"button\" class=\"btn btn-outline-info _blue\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-blu\" id=\"blue-menu\">Blue Menu\n        </button>\n      </div>\n    </div>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Opções de Layout</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified layout-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Layouts</ng-template>\n              <ng-template ngbTabContent>\n                <div role=\"tabpanel\" class=\"tab-panel active px-1 pt-1\" id=\"tabIcon21\" aria-expanded=\"true\"\n                  aria-labelledby=\"baseIcon-tab21\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"toggleFixMenu($event)\"\n                      [(ngModel)]=\"isCollapsedMenu\" name=\"collapsed-sidebar\" id=\"collapsed-sidebar\">\n                    <label class=\"custom-control-label\" for=\"collapsed-sidebar\">Menu Recolhido</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"fixed-layout\" id=\"fixed-layout\"\n                      [(ngModel)]=\"isfixChecked\" (ngModelChange)=\"toggleLayout('fixed')\">\n                    <label class=\"custom-control-label\" for=\"fixed-layout\">Layout Fixo</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"isboxChecked\"\n                      (ngModelChange)=\"toggleLayout('boxed')\" name=\"boxed-layout\" id=\"boxed-layout\">\n                    <label class=\"custom-control-label\" for=\"boxed-layout\">Layout com Margem</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"setLayout('static',$event)\"\n                      [(ngModel)]=\"isStaticLayout\" name=\"static-layout\" id=\"static-layout\">\n                    <label class=\"custom-control-label\" for=\"static-layout\">Layout Estático</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Navegação</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon22\" aria-labelledby=\"baseIcon-tab22\">\n\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"right-side-icons\"\n                      [(ngModel)]=\"isRightSideIcons\" (click)=\"setNavigation('navbar-icon-right',$event)\"\n                      id=\"right-side-icons\">\n                    <label class=\"custom-control-label\" for=\"right-side-icons\">Icons a Direita</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Opções de Cores para a Barra de Navegação</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified color-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset [activeId]=\"activeIdString\" (tabChange)=\"changeNavbarFontColor($event)\">\n            <ngb-tab id=\"dark\">\n              <ng-template ngbTabTitle>Dark</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h3>Solid</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h3>Gradient</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        id=\"bg-gradient-x-pink\" (click)=\"setColor('bg-gradient-x-pink')\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"light\">\n              <ng-template ngbTabTitle>Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-pane\" id=\"clrOpt4\" aria-labelledby=\"color-opt-4\">\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue-grey\"\n                      (click)=\"setColor('bg-blue-grey bg-lighten-4')\" id=\"light-blue-grey\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey bg-lighten-4')\"\n                      for=\"light-blue-grey\">Default</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-primary\"\n                      (click)=\"setColor('bg-primary bg-lighten-4')\" id=\"light-primary\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-primary bg-lighten-4')\"\n                      for=\"light-primary\">Primary</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-danger\"\n                      (click)=\"setColor('bg-danger bg-lighten-4')\" id=\"light-danger\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-danger bg-lighten-4')\"\n                      for=\"light-danger\">Danger</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-success\"\n                      (click)=\"setColor('bg-success bg-lighten-4')\" id=\"light-success\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-success bg-lighten-4')\"\n                      for=\"light-success\">Success</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue\"\n                      (click)=\"setColor('bg-blue bg-lighten-4')\" id=\"light-blue\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue bg-lighten-4')\"\n                      for=\"light-blue\">Blue</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-cyan\"\n                      (click)=\"setColor('bg-cyan bg-lighten-4')\" id=\"light-cyan\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan bg-lighten-4')\"\n                      for=\"light-cyan\">Cyan</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-pink\"\n                      (click)=\"setColor('bg-pink bg-lighten-4')\" id=\"light-pink\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-pink bg-lighten-4')\"\n                      for=\"light-pink\">Pink</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\" class=\"footer footer-static footer-light navbar-border navbar-shadow\" *ngIf=\"showFooter\">\n  <p class=\"clearfix blue-grey lighten-2 text-sm-center mb-0 px-2\"><span\n      class=\"float-md-left d-block d-md-inline-block\">Copyright &copy; 2019 <a [routerLink]=\"\"\n        class=\"text-bold-800 grey darken-2\" href=\"http://condsolution.com.br\"\n        target=\"_blank\">WAGNER ALVES </a></span><span\n      class=\"float-md-right d-block d-md-inline-block d-none d-lg-block\">Direitos Reservados <i\n        class=\"feather ft-heart pink\"></i>\n      <span id=\"scroll-top\"></span></span></p>\n</footer>\n\n<footer id=\"footer\" class=\"footer fixed-bottom footer-dark navbar-border navbar-shadow\" *ngIf=\"!showFooter\">\n  <p class=\"clearfix blue-grey lighten-2 text-sm-center mb-0 px-2\"><span\n      class=\"float-md-left d-block d-md-inline-block\">Copyright &copy; 2019 <a [routerLink]=\"\"\n        class=\"text-bold-800 grey darken-2\" href=\"http://condsolution.com.br\"\n        target=\"_blank\">WAGNER ALVES</a></span><span class=\"float-md-right d-none d-lg-block\">Direitos Reservados <i\n        class=\"feather ft-heart pink\"></i><span id=\"scroll-top\"></span></span></p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/full-layout/full-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/full-layout/full-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-full-layout-navbar *ngIf=\"showNavbar\"></app-full-layout-navbar>\n<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n<app-footer *ngIf=\"showFooter\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-dark navbar-shadow\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <li class=\"nav-item mobile-menu d-md-none mr-auto\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs\"\n            [routerLink]=\"\"></a></li>\n        <li class=\"nav-item\"><a class=\"navbar-brand\" [routerLink]=\"['/dashboard/sales']\"><img class=\"brand-logo\"\n              alt=\"modern admin logo\" src=\"../../../../assets/images/logo/logo.png\">\n            <h3 class=\"brand-text\">Modern Admin</h3>\n          </a></li>\n        <li class=\"nav-item d-md-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"navbar-container\">\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link mr-2 nav-link-label\" [routerLink]=\"['/dashboard/sales']\"><i\n                class=\"ficon feather ft-arrow-left\"></i></a></li>\n          <li class=\"dropdown nav-item\"><a class=\"nav-link mr-2 nav-link-label\" [routerLink]=\"\"\n              data-toggle=\"dropdown\"><i class=\"ficon feather ft-settings\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"layout === 'vertical'\">\n  <app-header-vertical></app-header-vertical>\n</ng-container>\n\n<ng-container *ngIf=\"layout === 'horizontal'\" (window:resize)=\"onResize($event)\">\n  <app-header-horizontal></app-header-horizontal>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/horizontal/horizontal.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/horizontal/horizontal.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- fixed-top-->\n<nav\n  class=\"top-header header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow navbar-static-top navbar-light navbar-brand-center\"\n  id=\"top-header\" [ngClass]=\"selectedHeaderNavBarClass\">\n  <div class=\"navbar-wrapper\">\n    <div id=\"navbar-header\" class=\"navbar-header\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <li class=\"nav-item mobile-menu d-md-none mr-auto\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs11\"\n            (click)=\"toggleNavigation($event)\"><i class=\"feather ft-menu font-large-1\"></i></a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/dashboard/sales']\" class=\"navbar-brand\"><img class=\"brand-logo\"\n              alt=\"modern admin logo\" src=\"../../../../assets/images/logo/logo.jpg\">\n            <h3 class=\"brand-text\">IMAGE Admin</h3>\n          </a></li>\n\n        <li class=\"nav-item d-md-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"navbar-container content\">\n      <div class=\"collapse navbar-collapse show\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav mr-auto float-left\">\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-menu-main menu-toggle hidden-xs\"\n              (click)=\"toggleFixMenu($event)\"><i class=\"feather ft-menu\"></i></a></li>\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-link-expand\"\n              (click)=\"toggleFullScreen()\"><i class=\"ficon feather ft-maximize\"></i></a></li>\n          <li class=\"nav-item nav-search\"><a [routerLink]=\"\" class=\"nav-link nav-link-search\" (click)=\"clickSearch()\"><i\n                class=\"ficon feather ft-search\"></i></a>\n            <div class=\"search-input\" [ngClass]=\"{'open': isHeaderSearchOpen}\">\n              <input class=\"input\" type=\"text\" placeholder=\"Explore Modern...\">\n            </div>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav float-right\">\n\n          <li class=\"dropdown-user nav-item\" ngbDropdown [placement]=\"placement\">\n            <a class=\"nav-link dropdown-user-link\" ngbDropdownToggle>\n              <span *ngIf=\"currentUser.displayName\"\n                class=\"mr-1 user-name text-bold-700\">{{currentUser.displayName}}</span>\n              <span *ngIf=\"!currentUser.displayName\" class=\"mr-1 user-name text-bold-700\">Sem Nome </span>\n              <span class=\"avatar avatar-online\">\n                <img *ngIf=\"currentUser.photoURL\" src=\"{{currentUser.photoURL}}\" alt=\"avatar\">\n                <img *ngIf=\"!currentUser.photoURL\" src=\"../../../../assets/images/portrait/small/avatar-s-19.png\"\n                  alt=\"avatar\">\n                <i></i>\n              </span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownProfileMenu\">\n              <a class=\"dropdown-item\" [routerLink]=\"['/user/user-profile']\"><i class=\"feather ft-user\"></i> Editar Dados  </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\"><i class=\"feather ft-power\"></i> Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/vertical/vertical.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/vertical/vertical.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-shadow\"\n  [ngClass]=\"selectedHeaderNavBarClass\">\n  <div class=\"navbar-wrapper\">\n    <div id=\"navbar-header\" class=\"navbar-header\" [ngClass]=\"selectedNavBarHeaderClass\"\n      (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <!-- Remove position relative in responsive -->\n        <li class=\"nav-item mobile-menu d-lg-none mr-auto\"><a\n            class=\"nav-link nav-menu-main menu-toggle hidden-xs11\" (click)=\"toggleNavigation($event)\">\n            <i class=\"feather ft-menu font-large-1\"></i></a></li>\n        <li class=\"nav-item mr-auto\"><a [routerLink]=\"['/dashboard/sales']\" class=\"navbar-brand\" routerLink=\"/dashboard/sales\"><img\n              class=\"brand-logo\" alt=\"IMAGE admin logo\" [src]=\"_themeSettingsConfig.brand.logo.value\">\n            <h3 class=\"brand-text\">{{_themeSettingsConfig.brand.brand_name}}</h3>\n          </a></li>\n        <li class=\"nav-item d-none d-md-block nav-toggle\">\n          <a [routerLink]=\"\" class=\"nav-link modern-nav-toggle pr-0\" data-toggle=\"collapse\"\n            (click)=\"toggleFixMenu($event)\">\n            <i class=\"feather toggle-icon font-medium-3 white\"\n              [ngClass]=\"{'ft-toggle-left': _themeSettingsConfig.menu == 'collapse','ft-toggle-right': _themeSettingsConfig.menu == 'expand'}\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item d-lg-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <!-- New-->\n    <div class=\"navbar-container content\" [hidden]=\"isMobile && !showNavbar\">\n      <div class=\"collapse navbar-collapse\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav mr-auto float-left\">\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-link-expand\"\n              (click)=\"toggleFullScreen()\"><i class=\"ficon feather ft-maximize\"></i></a></li>\n          <li class=\"nav-item nav-search\"><a [routerLink]=\"\" class=\"nav-link nav-link-search\" (click)=\"clickSearch()\"><i\n                class=\"ficon feather ft-search\"></i></a>\n            <div class=\"search-input\" [ngClass]=\"{'open': isHeaderSearchOpen}\">\n              <input class=\"input\" type=\"text\" placeholder=\"Explore Modern...\">\n            </div>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav float-right\">\n\n          <li class=\"dropdown-user nav-item\" ngbDropdown [placement]=\"placement\">\n            <a class=\"nav-link dropdown-user-link\" ngbDropdownToggle>\n              <span *ngIf=\"currentUser.displayName\"\n                class=\"mr-1 user-name text-bold-700\">{{currentUser.displayName}}</span>\n              <span *ngIf=\"!currentUser.displayName\" class=\"mr-1 user-name text-bold-700\">Sem Nome</span>\n              <span class=\"avatar avatar-online\">\n                <img *ngIf=\"currentUser.photoURL\" src=\"{{currentUser.photoURL}}\" alt=\"avatar\">\n                <img *ngIf=\"!currentUser.photoURL\" src=\"../../../assets/images/portrait/small/avatar-s-19.png\"\n                  alt=\"avatar\">\n                <i></i>\n              </span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownProfileMenu\">\n              <a class=\"dropdown-item\" [routerLink]=\"['/user/user-profile']\"><i class=\"feather ft-user\"></i> Editar Dados </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\"><i class=\"feather ft-power\"></i> Sair</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- New-->\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/horizontalnav/horizontalnav.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/horizontalnav/horizontalnav.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sticky-wrapper\" class=\"sticky-wrapper\">\n  <div\n    class=\"menu-header header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-dark navbar-without-dd-arrow navbar-shadow\"\n    role=\"navigation\" data-menu=\"menu-wrapper\" (scroll)=\"onWindowScroll($event);\" id=\"menu-header\">\n    <div class=\"navbar-container main-menu-content\" data-menu=\"menu-container\">\n      <ul class=\"nav navbar-nav\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\n        <li *ngFor=\"let child of _menuSettingsConfig.horizontal_menu.items\" class=\"nav-item\" [ngClass]=\"{\n          'dropdown nav-item ':(child.title && child.submenu),\n          'nav-item' : true,\n          'open': child.isOpen,\n        'active': child.isSelected }\" [attr.data-menu]=\"child.submenu? 'dropdown' : ''\"\n          (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\n          <!-- Top Menu -->\n          <a class=\"nav-link \" [ngClass]=\"{'dropdown-item dropdown-toggle active': child.submenu}\"\n            [attr.data-toggle]=\"child.submenu? 'dropdown' : ''\" (click)=\"toggleMenu($event, child)\"\n            routerLink=\"{{child.page != 'null'?child.page:router.url}}\" *ngIf=\"!child.isExternalLink\">\n            <i class=\"la\" [ngClass]=\"child.icon\"></i><span data-i18n=\"nav.dash.main\">{{child.title}}</span>\n          </a>\n          <a class=\"nav-link \" [ngClass]=\"{'dropdown-item dropdown-toggle active': child.submenu}\"\n            [attr.data-toggle]=\"child.submenu? 'dropdown' : ''\" (click)=\"toggleMenu($event, child)\" [href]=\"child.page\"\n            target=\"_blank\" *ngIf=\"!child.section && child.isExternalLink\">\n            <i class=\"la\" [ngClass]=\"child.icon\"></i><span data-i18n=\"nav.dash.main\">{{child.title}}</span>\n          </a>\n\n          <ul class=\"dropdown-menu\" *ngIf=\"child.submenu\">\n            <li *ngFor=\"let subchild of child.submenu.items\" class=\"\"\n              [ngClass]=\"{'dropdown dropdown-submenu':(subchild.submenu), 'dropdown-divider':(subchild.title =='horizontal-divider'), 'active': subchild.isSelected }\"\n              (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\"\n              [attr.data-menu]=\"subchild.submenu? 'dropdown-submenu' : ''\">\n              <a class=\"dropdown-item\" (click)=\"toggleMenu($event, subchild)\"\n                routerLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\" data-toggle=\"dropdown\"\n                *ngIf=\"!subchild.isExternalLink\">\n                <i class=\"la\" [ngClass]=\"subchild.icon\"></i> <span data-i18n=\"nav.dash.main\">{{subchild.title}}</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/navigation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/navigation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (window:resize)=\"onResize($event)\">\n\t<app-header></app-header>\n\t<ng-container *ngIf=\"layout === 'vertical' || isMobile == true\">\n\t\t<app-verticalnav></app-verticalnav>\n\t</ng-container>\n\n\t<ng-container *ngIf=\"layout === 'horizontal' && isMobile == false\">\n\t\t<app-horizontalnav></app-horizontalnav>\n\t</ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/verticalnav/verticalnav.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/verticalnav/verticalnav.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" id=\"main-menu\"\n\tclass=\"main-menu menu-fixed menu-dark menu-accordion menu-shadow\" data-scroll-to-active=\"true\">\n\t<div id=\"main-menu-content\" class=\"main-menu-content ps-container ps-theme-light\" fxFlex=\"auto\"\n\t\t[perfectScrollbar]=\"config\">\n\t\t<ul class=\"navigation navigation-main\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\n\t\t\t<!-- Menu -->\n\t\t\t{{child?child.title:''}}\n\t\t\t<li *ngFor=\"let child of _menuSettingsConfig.vertical_menu.items\" class=\"\" [ngClass]=\"{\n            'has-sub': child.submenu,\n            'open': child.isOpen && child.submenu,\n            'nav-item': child.title,\n            'navigation-header':child.section,\n            'active': child.isSelected && !child.submenu,\n            'menu-collapsed-open': child.isSelected && child.submenu,\n            'hover': child.hover\n          }\">\n\t\t\t\t<!-- Section -->\n\t\t\t\t<span class=\"menu-title\" *ngIf=\"child.section\">{{child.section}}</span>\n\t\t\t\t<i class=\"la\" *ngIf=\"child.section\" [ngClass]=\"child.icon\" data-toggle=\"tooltip\" data-placement=\"right\"\n\t\t\t\t\tdata-original-title=\"Support\"></i>\n\n\t\t\t\t<!-- Root Menu -->\n\t\t\t\t<a *ngIf=\"child.title && !child.submenu && !child.excludeInVertical && !child.isExternalLink && !child.issupportExternalLink\"\n\t\t\t\t\trouterLink=\"{{child.page != 'null'?child.page:router.url}}\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t\t<a *ngIf=\"child.title && !child.submenu && !child.excludeInVertical && child.isExternalLink\"\n          [href]=\"child.page\"  target=\"_blank\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\n\n\t\t\t\t<!-- Submenu -->\n\t\t\t\t<a *ngIf=\"child.title && child.submenu && !child.excludeInVertical\"\n\t\t\t\t\trouterLink=\"{{child.page != 'null'?child.page:router.url}}\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t\t<ul *ngIf=\"child.submenu\" class=\"menu-content\" [@popOverState]=\"child.isOpen\">\n          <!-- Submenu of Submenu -->\n\t\t\t\t\t<li *ngFor=\"let subchild of child.submenu.items\" class=\"isShown\"\n\t\t\t\t\t\t[ngClass]=\"{'has-sub':(subchild.submenu),'active': subchild.isSelected && !subchild.submenu, 'open': subchild.isOpen && subchild.submenu}\">\n\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"!subchild.submenu && !subchild.excludeInVertical\" (click)=\"toggleMenu($event, subchild, true)\"\n\t\t\t\t\t\t\trouterLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\">{{subchild.title}}</a>\n\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"subchild.submenu && !subchild.excludeInVertical\" (click)=\"toggleMenu($event, subchild, true)\"\n\t\t\t\t\t\t\trouterLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\">{{subchild.title}}</a>\n\t\t\t\t\t\t<ul *ngIf=\"subchild.submenu && !subchild.excludeInVertical\" class=\"menu-content\">\n\t\t\t\t\t\t\t<li *ngFor=\"let subchild of subchild.submenu.items\" [ngClass]=\"{'active': subchild.isSelected && !subchild.submenu}\">\n\t\t\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"!subchild.event\"\n\t\t\t\t\t\t\t\t\trouterLink=\"{{subchild.page}}\" (click)=\"toggleMenu($event, subchild, true)\">{{subchild.title}}</a>\n\t\t\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"subchild.event\"\n\t\t\t\t\t\t\t\t\t(click)=\"callFunction(subchild.event, subchild)\">{{subchild.title}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/private-layout/private-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/private-layout/private-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (window:resize)=\"onResize($event)\"></div>\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n<app-footer></app-footer>\n<div *ngIf =\"customizer === 'on'\">\n<app-customizer *ngIf=\"layout === 'vertical'\"></app-customizer>\n<app-horizontal-customizer *ngIf=\"layout === 'horizontal'\"></app-horizontal-customizer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/public-layout/public-layout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/public-layout/public-layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\n\n<ngx-loading-bar [includeSpinner]='false' height='3px' color=\"#FF4961\"></ngx-loading-bar>\n<app-alert></app-alert>\n<router-outlet *ngIf=\"showContent\"></router-outlet>\n\n<!-- credits -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/changelog/changelog.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changelog/changelog.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n       <div class=\"content-body\">\n      <section id=\"drag-area\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" *blockUI=\"'changelog'; message: 'Loading'\">\n            <m-card [options]=\"options\" (reloadFunction)=\"reloadChangelog($event)\">\n              <ng-container mCardHeaderTitle>\n                Versão Inicial\n              </ng-container>\n              <ng-container mCardBody>\n                <h5 class=\"my-2\">28-110-2019 [V1.1]</h5>\n                <div class=\"card-text\">\n                  <ul>\n                    <li>primeiro release</li>\n                  </ul>\n                </div>\n              </ng-container>\n            </m-card>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/general/card/card.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/general/card/card.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--begin::Card-->\n<div mCard #mCard [options]=\"options\" class=\"card\">\n  <div class=\"card-header\" #mCardHeader>\n    <h4 class=\"card-title\" #mCardHeaderTitle>\n      <ng-content select=\"[mCardHeaderTitle]\"></ng-content>\n    </h4>\n    <a class=\"heading-elements-toggle\" (click)=\"toggleMobileMenu()\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\n    <div class=\"heading-elements\" #mCardHeaderTools>\n      <ng-content select=\"[mCardHeaderTools]\"></ng-content>\n      <ul class=\"list-inline mb-0\">\n        <li *ngIf=\"options && options.minimize\"><a data-action=\"collapse\"><i class=\"feather ft-minus\"\n              (click)=\"toggleCollpase($event)\"></i></a></li>\n        <li *ngIf=\"options && options.reload\"><a data-action=\"reload\"><i class=\"feather ft-rotate-cw\"\n              (click)=\"reload()\"></i></a></li>\n        <li *ngIf=\"options && options.expand\"><a data-action=\"expand\"><i class=\"feather ft-maximize\"\n              (click)=\"toggleExpand($event)\"></i></a></li>\n        <li *ngIf=\"options && options.close\"><a data-action=\"close\"><i class=\"feather ft-x\" (click)=\"close($event)\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collpase show\" #mCardContent>\n    <ng-content select=\"[mCardContent]\"></ng-content>\n    <div class=\"card-body\" #mCardBody>\n      <ng-content select=\"[mCardBody]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"card-footer\" #mCardFooter>\n    <ng-content select=\"[mCardFooter]\"></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n    <div class=\"content-wrapper\">\n        <div class=\"content-header row mb-1\">\n        </div>\n        <div class=\"content-body\">\n            <section class=\"flexbox-container\">\n                <div class=\"col-12 d-flex align-items-center justify-content-center\">\n                    <div class=\"col-md-4 col-10 box-shadow-2 p-0\">\n                        <div class=\"card border-grey border-lighten-3 px-1 py-1 m-0\">\n                            <div class=\"card-header border-0\">\n                                <div class=\"card-title text-center\">\n                                    <img src=\"assets/images/logo/logo-dark.png\" alt=\"branding logo\">\n                                </div>\n                            </div>\n                            <div class=\"card-content\">\n\n                                <p class=\"card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1\"><span>Digite seus\n                    Dados Pessoais</span></p>\n                                <div class=\"card-body\">\n                                    <form class=\"form-horizontal\" [formGroup]=\"loginForm\" (ngSubmit)=\"tryLogin()\">\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" id=\"user-name\" placeholder=\"Seu Usuário\" required>\n                                            <div class=\"form-control-position\">\n                                                <i class=\"feather ft-user\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Nome de Usuário é Requerido</div>\n                                            </div>\n                                        </fieldset>\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"password\" placeholder=\" Sua Senha\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                            <div class=\"form-control-position\">\n                                                <i class=\"la la-key\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Senha é Requerida</div>\n                                            </div>\n\n                                        </fieldset>\n                                        <div class=\"form-group row\">\n                                            <div class=\"col-md-6 col-12 text-center text-sm-left\">\n                                                <div class=\"custom-control custom-checkbox mb-1\">\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"remember-me\" id=\"remember-me\">\n                                                    <label class=\"custom-control-label\" for=\"remember-me\">Guardar meu Login</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 col-12 float-sm-left text-center text-sm-right\"><a href=\"recover-password.html\" class=\"card-link\">Esqueceu a Senha?</a></div>\n                                        </div>\n                                        <button type=\"submit\" class=\"btn btn-outline-info btn-block\">\n                      <i class=\"fa fa-refresh fa-spin\" *ngIf=\"submitted\"></i>\n                      <i class=\"feather ft-unlock\" *ngIf=\"!submitted\"></i> Entrar\n                    </button>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n        <div class=\"content-wrapper\">\n          <div class=\"content-header row mb-1\">\n          </div>\n          <div class=\"content-body\"><section class=\"flexbox-container\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n          <div class=\"col-md-4 col-10 box-shadow-2 p-0\">\n              <div class=\"card border-grey border-lighten-3 px-1 py-1 m-0\">\n                  <div class=\"card-header border-0 pb-0\">\n                      <div class=\"card-title text-center\">\n                          <img src=\"assets/images/logo/logo-dark.png\" alt=\"branding logo\">\n                      </div>\n                      <h6 class=\"card-subtitle line-on-side text-muted text-center font-small-3 pt-2\"><span>Usando Redes Sociais</span></h6>\n                  </div>\n                  <div class=\"card-content\">\n                        <app-social-signin></app-social-signin>\n                      <p class=\"card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1\"><span>OU Usando Dados Pessoais</span></p>\n                      <div class=\"card-body\">\n                          <form class=\"form-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"tryRegister()\">\n                              <fieldset class=\"form-group position-relative has-icon-left\">\n                                  <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                                    placeholder=\"User Name\">\n                                  <div class=\"form-control-position\">\n                                      <i class=\"feather ft-user\"></i>\n                                  </div>\n                                  <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.firstName.errors.required\">Usuário é Requerido </div>\n                                    </div>\n                              </fieldset>\n                              <fieldset class=\"form-group position-relative has-icon-left\">\n                                  <input type=\"email\" formControlName=\"email\" class=\"form-control\" email [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                                  placeholder=\"Your Email Address\" required>\n                                  <div class=\"form-control-position\">\n                                      <i class=\"feather ft-mail\"></i>\n                                  </div>\n                                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.email.errors.required\">Email é Requerido</div>\n                                    </div>\n                              </fieldset>\n                              <fieldset class=\"form-group position-relative has-icon-left\">\n                                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                                   id=\"user-password\" placeholder=\"Enter Password\" required>\n                                  <div class=\"form-control-position\">\n                                      <i class=\"la la-key\"></i>\n                                  </div>\n                                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.password.errors.required\">Senha é Requerida</div>\n                                        <div *ngIf=\"f.password.errors.minlength\">Senha tem que ter mais de 6 caracteres</div>\n                                    </div>\n                              </fieldset>\n                              <div class=\"form-group row\">\n                                  <div class=\"col-md-6 col-12 text-center text-sm-left\">\n                                    <div class=\"custom-control custom-checkbox mb-1\">\n                                      <input type=\"checkbox\" class=\"custom-control-input\" name=\"remember-me\" id=\"remember-me\">\n                                      <label class=\"custom-control-label\" for=\"remember-me\">Guarde meus dados</label>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-6 col-12 float-sm-left text-center text-sm-right\"><a href=\"recover-password.html\" class=\"card-link\">Forgot Password?</a></div>\n                              </div>\n                              <button type=\"submit\" class=\"btn btn-outline-info btn-block\">\n                                  <i class=\"fa fa-refresh fa-spin\" *ngIf=\"submitted\"></i>\n                                <i class=\"feather ft-user\" *ngIf=\"!submitted\"></i> Registrar\n                              </button>\n                          </form>\n                      </div>\n                      <div class=\"card-body\">\n                          <a [routerLink]=\"['/login']\" class=\"btn btn-outline-danger btn-block\"><i class=\"feather ft-unlock\"></i> Login</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </section>\n\n          </div>\n        </div>\n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/social-signin/social-signin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-signin/social-signin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n    <a (click)=\"tryFacebookLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\"><span class=\"la la-facebook\"></span></a>\n    <a (click)=\"tryTwitterLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\"><span class=\"la la-twitter\"></span></a>\n    <a (click)=\"tryGoogleLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\"><span class=\"la la-google font-medium-4\"></span></a>\n    <a (click)=\"tryGithubLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\"><span class=\"la la-github font-medium-4\"></span></a>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/content/cadastros/cadastros.module": [
		"./src/app/content/cadastros/cadastros.module.ts",
		"default~app-content-cadastros-cadastros-module~app-content-exames-exames-module",
		"app-content-cadastros-cadastros-module"
	],
	"../app/content/dashboard/dashboard.module": [
		"./src/app/content/dashboard/dashboard.module.ts",
		"app-content-dashboard-dashboard-module"
	],
	"../app/content/exames/exames.module": [
		"./src/app/content/exames/exames.module.ts",
		"default~app-content-cadastros-cadastros-module~app-content-exames-exames-module",
		"app-content-exames-exames-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
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


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
    ]; };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __importDefault(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html")).default
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/card.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/_directives/card.directive.ts ***!
  \***********************************************/
/*! exports provided: CardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDirective", function() { return CardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var CardDirective = /** @class */ (function () {
    function CardDirective(el) {
        this.el = el;
        this.class = this.el.nativeElement.classList;
    }
    CardDirective.prototype.ngOnInit = function () { };
    CardDirective.prototype.ngAfterViewInit = function () {
    };
    CardDirective.prototype.ngOnDestroy = function () {
    };
    CardDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], CardDirective.prototype, "class", void 0);
    CardDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mCard]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CardDirective);
    return CardDirective;
}());



/***/ }),

/***/ "./src/app/_directives/match-height.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/_directives/match-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeightFunction(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeightFunction(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.matchHeightFunction = function (parent, className) {
        // match height logic here
        if (!parent) {
            return;
        }
        var children = parent.getElementsByClassName(className);
        if (!children) {
            return;
        }
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        if (window.innerWidth > 1200) {
            // apply max height
            Array.from(children)
                .forEach(function (x) { return x.style.height = maxHeight + "px"; });
            parent.style.height = maxHeight + "px";
            parent.style.marginBottom = "1.875rem";
        }
        else {
            Array.from(children)
                .forEach(function (x) { return x.style.height = 'unset'; });
            parent.style.height = 'unset';
            parent.style.marginBottom = "1.875rem";
        }
    };
    MatchHeightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/app.constants.ts":
/*!*******************************************!*\
  !*** ./src/app/_helpers/app.constants.ts ***!
  \*******************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.MOBILE_RESPONSIVE_WIDTH = 992;
    AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL = 768;
    AppConstants.NAVIGATION_TYPE_COLLAPSIBLE = 'menu-collapsible';
    AppConstants.NAVIGATION_TYPE_ACCORDATION = 'menu-accordation';
    AppConstants.LAYOUT_STYLE_HORIZONTAL = 'horizontal';
    AppConstants.LAYOUT_STYLE_VERTICAL = 'vertical';
    AppConstants.fireRefreshEventOnWindow = function () {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
    };
    return AppConstants;
}());



/***/ }),

/***/ "./src/app/_layout/blockui/block-template.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_layout/blockui/block-template.component.ts ***!
  \*************************************************************/
/*! exports provided: BlockTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTemplateComponent", function() { return BlockTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlockTemplateComponent = /** @class */ (function () {
    function BlockTemplateComponent() {
    }
    BlockTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-temp',
            template: "\n    <div class=\"block-ui-template\">\n      <i class=\"feather ft-refresh-cw icon-spin font-medium-2\" aria-hidden=\"true\"></i>\n      <div><strong>{{message}}</strong></div>\n    </div>\n  ",
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        })
    ], BlockTemplateComponent);
    return BlockTemplateComponent;
}());



/***/ }),

/***/ "./src/app/_layout/breadcrumb/breadcrumb.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu.arrow {\n    margin-top: 50px;\n    margin-left: 97px;\n}\n\n.dropdown-menu.arrow:before {\n    left: 70px !important;\n    border-bottom-color: #ffffff;\n}\n\n.dropdown-menu.arrow:after {\n    top: 0px;\n}\n\n@media only screen and (max-width:767px) {\n  ._dropdown_mob {\n      margin-left: 150px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0VBQ0U7TUFDSSw2QkFBNkI7RUFDakM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS5hcnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOTdweDtcbn1cblxuLmRyb3Bkb3duLW1lbnUuYXJyb3c6YmVmb3JlIHtcbiAgICBsZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRyb3Bkb3duLW1lbnUuYXJyb3c6YWZ0ZXIge1xuICAgIHRvcDogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgLl9kcm9wZG93bl9tb2Ige1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/_layout/breadcrumb/breadcrumb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.processBreadCrumbLinks();
    };
    BreadcrumbComponent.prototype.processBreadCrumbLinks = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "breadcrumb", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __importDefault(__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/breadcrumb/breadcrumb.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/_layout/breadcrumb/breadcrumb.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/_layout/breadcrumb/breadcrumb.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.module.ts ***!
  \*********************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/content/partials/general/card/card.module */ "./src/app/content/partials/general/card/card.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/_layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
            ],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]],
            exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());



/***/ }),

/***/ "./src/app/_layout/customizer/customizer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabsborder{\n    border-bottom: none !important;\n  }\n\n.h6, h6 {\n  font-size: 1rem;\n}\n\n:host ::ng-deep .tab-content{\n  padding: 1rem;\n}\n\n:host ::ng-deep .layout_space{\n  padding: 0%;\n}\n\n:host ::ng-deep .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n\n:host ::ng-deep .btn-outline-info .active {\n  background: rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9fbGF5b3V0L2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnNib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbi5oNiwgaDYge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFiLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGF5b3V0X3NwYWNle1xuICBwYWRkaW5nOiAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMubmF2LXVuZGVybGluZSAubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZS1pbmZvIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/_layout/customizer/customizer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var colors = __webpack_require__(/*! ../../../assets/data/customizer/customizerColor.json */ "./src/assets/data/customizer/customizerColor.json");
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.isBorderedNavigation = false;
        this.isFlippedNavigation = false;
        this.isCollapsibleNavigation = false;
        this.isStaticNavigation = false;
        this.isStaticTop = false;
        this.config = { wheelPropagation: false };
        this.collapsed = true;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    CustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    CustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        if (layout === 'static' && e.currentTarget.checked === true) {
            this.staticLayout(e);
        }
        else if (layout === 'static' && e.currentTarget.checked === false) {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(mainMenu.item(0), 'menu-fixed');
            this.isStaticLayout = false;
        }
    };
    CustomizerComponent.prototype.toggleFixMenu = function (e) {
        var toggleIcon = document.getElementsByClassName('toggle-icon');
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            this._themeCustomizerConfig.navbar = 'collapse';
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-right');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this._themeCustomizerConfig.navbar = 'expand';
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-left');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-right');
            this.isCollapsedMenu = false;
        }
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        this.resetOpenMenu();
    };
    CustomizerComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuCustomizerConfig.vertical_menu.items.length; i++) {
            var menu = this._menuCustomizerConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    CustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('header-navbar');
        var navbarHeaderElement = document.getElementsByClassName('navbar-header');
        if ($event.nextId === 'semi-dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
            this._themeCustomizerConfig.colorTheme = 'semi-dark';
        }
        else if ($event.nextId === 'semi-light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
            this._themeCustomizerConfig.colorTheme = 'semi-light';
        }
        else if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
            this._themeCustomizerConfig.colorTheme = 'dark';
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._themeCustomizerConfig.colorTheme = 'light';
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    CustomizerComponent.prototype.setMenuColor = function (colorClass, event) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        var greenMenuButton = document.getElementById('green-menu');
        var blueMenuButton = document.getElementById('blue-menu');
        if (event.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.addClass(darkMenuButton, 'active');
        }
        else if (event.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.addClass(lightMenuButton, 'active');
        }
        else if (event.currentTarget.className === 'btn btn-outline-info _green') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.addClass(greenMenuButton, 'active');
        }
        else if (event.currentTarget.className === 'btn btn-outline-info _blue') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.addClass(blueMenuButton, 'active');
        }
        this._themeSettingsService.config = {
            menuColor: colorClass,
        };
    };
    CustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('main-menu');
        var element = document.getElementById('customizer');
        if (event.target.checked === true && navigationClass !== 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
            if (navigationClass === 'menu-flipped') {
                this._renderer.removeClass(element, 'open');
            }
            else if (navigationClass === 'menu-static') {
                this._renderer.removeClass(navigationElement, 'menu-fixed');
            }
        }
        else if (event.target.checked === false && navigationClass !== 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
            if (navigationClass === 'menu-static') {
                this._renderer.addClass(navigationElement, 'menu-fixed');
            }
        }
        if (event.target.checked === true && navigationClass === 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
        }
        else if (event.target.checked === false && navigationClass === 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
        if (navigationClass === 'menu-bordered' && event.currentTarget.checked === true) {
            this.isBorderedNavigation = true;
        }
        else if (navigationClass === 'menu-bordered' && event.currentTarget.checked === false) {
            this.isBorderedNavigation = false;
        }
        if (navigationClass === 'menu-flipped' && event.currentTarget.checked === true) {
            this.isFlippedNavigation = true;
        }
        else if (navigationClass === 'menu-flipped' && event.currentTarget.checked === false) {
            this.isFlippedNavigation = false;
        }
        if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === true) {
            this.isCollapsibleNavigation = true;
        }
        else if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === false) {
            this.isCollapsibleNavigation = false;
        }
        if (navigationClass === 'menu-static' && event.currentTarget.checked === true) {
            this.isStaticNavigation = true;
        }
        else if (navigationClass === 'menu-static' && event.currentTarget.checked === false) {
            this.isStaticNavigation = false;
        }
    };
    CustomizerComponent.prototype.setNavbar = function (event) {
        var navbarElement = document.getElementsByClassName('header-navbar');
        var navigationElement = document.getElementById('main-menu');
        if (event.target.checked === true) {
            this._renderer.removeClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(navbarElement.item(0), 'fixed-top');
            this._renderer.removeClass(navigationElement, 'menu-fixed');
            this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.addClass(navigationElement, 'menu-static');
            this.isStaticTop = true;
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.removeClass(navigationElement, 'menu-static');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(navbarElement.item(0), 'fixed-top');
            this._renderer.addClass(navigationElement, 'menu-fixed');
            this.isStaticTop = false;
        }
    };
    CustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    CustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        if (layout === 'boxed' && this.isboxChecked === false) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._themeSettingsConfig.layout.pattern = '';
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
    };
    CustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(document.body, 'container');
        this._renderer.addClass(footer, 'fixed-bottom');
        if (this.isStaticLayout === true) {
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(footer, 'fixed-bottom');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    CustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(document.body, 'fixed-navbar');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    CustomizerComponent.prototype.staticLayout = function (e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        this._renderer.removeClass(document.body, 'fixed-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.removeClass(mainMenu.item(0), 'menu-fixed');
        this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
        this._renderer.addClass(footer, 'footer-static');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this.isStaticLayout = true;
        this._themeSettingsConfig.layout.pattern = 'static';
    };
    CustomizerComponent.prototype.onResize = function () {
        if (this.document.body.classList.contains('menu-expanded')) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;
        }
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"])
    ], CustomizerComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"])
    ], CustomizerComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomizerComponent.prototype, "onResize", null);
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/customizer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customizer.component.css */ "./src/app/_layout/customizer/customizer.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabsborder{\n    border-bottom: none !important;\n  }\n\n.h6, h6 {\n  font-size: 1rem;\n}\n\n:host ::ng-deep .tab-content{\n  padding: 1rem;\n}\n\n:host ::ng-deep .layout_space{\n  padding: 0%;\n}\n\n:host ::ng-deep .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9jdXN0b21pemVyL2hvcml6b250YWwtY3VzdG9taXplci9ob3Jpem9udGFsLWN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9fbGF5b3V0L2N1c3RvbWl6ZXIvaG9yaXpvbnRhbC1jdXN0b21pemVyL2hvcml6b250YWwtY3VzdG9taXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnNib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbi5oNiwgaDYge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFiLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGF5b3V0X3NwYWNle1xuICBwYWRkaW5nOiAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMubmF2LXVuZGVybGluZSAubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HorizontalCustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCustomizerComponent", function() { return HorizontalCustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var colors = __webpack_require__(/*! ../../../../assets/data/customizer/customizerColor.json */ "./src/assets/data/customizer/customizerColor.json");
var HorizontalCustomizerComponent = /** @class */ (function () {
    function HorizontalCustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.activeIdString = 'light';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    HorizontalCustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    HorizontalCustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    HorizontalCustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('top-header');
        if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-shadow');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-shadow');
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    HorizontalCustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    HorizontalCustomizerComponent.prototype.setMenuColor = function (e) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        var greenMenuButton = document.getElementById('green-menu');
        var blueMenuButton = document.getElementById('blue-menu');
        var menuHeaderElement = document.getElementById('menu-header');
        if (e.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-light');
            this._renderer.removeClass(menuHeaderElement, 'navbar-green');
            this._renderer.removeClass(menuHeaderElement, 'navbar-blue');
            this._renderer.addClass(darkMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-dark');
        }
        else if (e.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
            this._renderer.removeClass(menuHeaderElement, 'navbar-green');
            this._renderer.removeClass(menuHeaderElement, 'navbar-blue');
            this._renderer.addClass(lightMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-light');
        }
        else if (e.currentTarget.className === 'btn btn-outline-info _green') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(blueMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-light');
            this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
            this._renderer.removeClass(menuHeaderElement, 'navbar-blue');
            this._renderer.addClass(greenMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-green');
        }
        else if (e.currentTarget.className === 'btn btn-outline-info _blue') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(greenMenuButton, 'active');
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-light');
            this._renderer.removeClass(menuHeaderElement, 'navbar-green');
            this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
            this._renderer.addClass(lightMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-blue');
        }
        // this._themeSettingsService.config = {
        //   menuColor: colorClass, // menu-dark, menu-light
        // };
    };
    HorizontalCustomizerComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-right');
            e.srcElement.classList.add('ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-left');
            e.srcElement.classList.add('ft-toggle-right');
            this.isCollapsedMenu = false;
        }
    };
    HorizontalCustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var isSticky = document.getElementsByClassName('sticky-wrapper');
        var element = document.getElementById('sticky-wrapper');
        if (e.currentTarget.checked === true && layout === 'static') {
            // this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
            this.isStaticLayout = true;
            this._themeSettingsConfig.layout.pattern = 'static';
            element.classList.add('is-static');
            if (this.isboxChecked === false) {
                this._renderer.removeClass(footer, 'fixed-bottom');
            }
        }
        else {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.removeClass(menuHeader, 'navbar-static');
            this._renderer.removeClass(isSticky.item(0), 'is-static');
            this.isStaticLayout = false;
            if (this.isboxChecked === true) {
                this.boxedLayout();
            }
            if (this.isfixChecked === true) {
                this.fixedLayout();
            }
        }
    };
    HorizontalCustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('menu-header');
        if (event.target.checked === true) {
            this._themeSettingsService.config = {
                navigation: navigationClass,
            };
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
    };
    HorizontalCustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var element = document.getElementById('sticky-wrapper');
        if (layout === 'boxed' && this.isboxChecked === true) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === false) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            element.classList.remove('container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
    };
    HorizontalCustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.addClass(footer, 'fixed-bottom');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(document.body, 'container');
        element.classList.remove('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    HorizontalCustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        element.classList.add('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    HorizontalCustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"])
    ], HorizontalCustomizerComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"])
    ], HorizontalCustomizerComponent.prototype, "directiveRef", void 0);
    HorizontalCustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-customizer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./horizontal-customizer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./horizontal-customizer.component.css */ "./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"]])
    ], HorizontalCustomizerComponent);
    return HorizontalCustomizerComponent;
}());



/***/ }),

/***/ "./src/app/_layout/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../full-layout/full-layout.component */ "./src/app/_layout/full-layout/full-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var FooterComponent = /** @class */ (function () {
    function FooterComponent(renderer, _renderer, router, document, spinner, _themeSettingsService) {
        var _this = this;
        this.renderer = renderer;
        this._renderer = _renderer;
        this.router = router;
        this.document = document;
        this.spinner = spinner;
        this._themeSettingsService = _themeSettingsService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            var footerElement = document.getElementsByClassName('footer');
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                if ((_this.router.url === '/chats' || _this.router.url === '/email') && footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'footer-static');
                    _this.renderer.addClass(footerElement.item(0), 'fixed-bottom');
                }
                else if (footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'fixed-bottom');
                    _this.renderer.addClass(footerElement.item(0), 'footer-static');
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0) ||
            (this.router.url.indexOf('searchPage') >= 0)) {
            this.showFooter = false;
        }
        else if (_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_7__["FullLayoutComponent"]) {
            this.showFooter = true;
        }
        else {
            this.showFooter = true;
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
        var footerElement = document.getElementsByClassName('footer');
        if (this.router.url === '/chats' || this.router.url === '/email' && footerElement.item(0)) {
            this._renderer.removeClass(footerElement.item(0), 'footer-static');
            this._renderer.addClass(footerElement.item(0), 'fixed-bottom');
        }
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/footer/footer.component.html")).default,
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            Document,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/_layout/full-layout/full-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(renderer, router, document) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.showFooter = true;
        this.showNavbar = true;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        this.renderer.removeClass(document.body, 'vertical-overlay-menu');
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        this.renderer.removeClass(document.body, 'vertical-menu-modern');
        this.renderer.addClass(document.body, 'blank-page');
        this.renderer.addClass(document.body, 'pace-done');
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0)) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.addClass(document.body, 'fixed-navbar');
            this.renderer.removeClass(document.body, 'blank-page');
        }
        else if (this.router.url.indexOf('WithBgImage') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-full-screen-image');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('WithBg') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('Simple') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('searchPage') >= 0) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url === '/others/bgImage') {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonOne');
        }
        else if (this.router.url.indexOf('bgVideo') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonVideo');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url.indexOf('error400') >= 0 && this.router.url.indexOf('error400Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error401') >= 0 && this.router.url.indexOf('error401Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error403') >= 0 && this.router.url.indexOf('error403Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error404') >= 0 && this.router.url.indexOf('error404Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error500') >= 0 && this.router.url.indexOf('error500Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('maintenance') >= 0 || this.router.url.indexOf('recoverPassword') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('unlockUser') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'bg-cyan');
            this.renderer.removeClass(document.body, 'bg-lighten-2');
        }
    };
    FullLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/full-layout/full-layout.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Document])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 767.98px) {\n    .collapse:not(.show) {\n        display: flex !important;\n    }\n}\n\n@media (min-width: 767.98px) {\n    .justify-content-end {\n        display: flex !important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9oZWFkZXIvZnVsbC1sYXlvdXQtbmF2YmFyL2Z1bGwtbGF5b3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9fbGF5b3V0L2hlYWRlci9mdWxsLWxheW91dC1uYXZiYXIvZnVsbC1sYXlvdXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FullLayoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutNavbarComponent", function() { return FullLayoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FullLayoutNavbarComponent = /** @class */ (function () {
    function FullLayoutNavbarComponent(document) {
        this.document = document;
    }
    FullLayoutNavbarComponent.prototype.ngOnInit = function () {
    };
    FullLayoutNavbarComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    FullLayoutNavbarComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    FullLayoutNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./full-layout-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./full-layout-navbar.component.css */ "./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], FullLayoutNavbarComponent);
    return FullLayoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/_layout/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_renderer, document, _themeSettingsService, deviceService) {
        this._renderer = _renderer;
        this.document = document;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.isMobile = false;
        this.selectedColorClass = '';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
            _this.refreshView();
        });
    };
    HeaderComponent.prototype.refreshView = function () {
        var self = this;
        var headerElement = document.getElementsByClassName('header-navbar');
        if (headerElement.item(0)) {
            var currentHeaderClassList = [];
            var navbar = this.document.getElementById('navbar-mobile');
            // Layout
            if (self._themeSettingsConfig.layout.style === 'horizontal') {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu',
                    'navbar-without-dd-arrow', 'navbar-static-top'];
                var topHeaderElement = document.getElementById('top-header');
                if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
                    currentHeaderClassList.push('fixed-top');
                    this._renderer.removeClass(topHeaderElement, 'navbar-brand-center');
                    navbar.classList.remove('show');
                }
                else {
                    currentHeaderClassList.push('navbar-brand-center');
                    this._renderer.removeClass(topHeaderElement, 'fixed-top');
                    navbar.classList.add('show');
                }
            }
            else {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'fixed-top',
                    'navbar-shadow'];
                if (self._themeSettingsConfig.colorTheme === 'semi-light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    if (self._themeSettingsConfig.layout.style === 'vertical') {
                        // currentHeaderClassList.push('bg-info');
                    }
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                }
                else if (self._themeSettingsConfig.colorTheme === 'semi-dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
            }
            currentHeaderClassList.forEach(function (c) {
                self._renderer.addClass(headerElement.item(0), c);
            });
        }
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HeaderComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        this.refreshView();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/header.component.html")).default
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_layout/header/horizontal/horizontal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767.98px) {\n    .header-navbar .navbar-header {\n        width: 100% !important;\n        top: 3px;\n    }\n}\n\n/* .navbar-light {\n    z-index: 1038 !important;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9oZWFkZXIvaG9yaXpvbnRhbC9ob3Jpem9udGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixRQUFRO0lBQ1o7QUFDSjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvaGVhZGVyL2hvcml6b250YWwvaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG59XG5cbi8qIC5uYXZiYXItbGlnaHQge1xuICAgIHotaW5kZXg6IDEwMzggIWltcG9ydGFudDtcbn0gKi9cbiJdfQ== */");

/***/ }),

/***/ "./src/app/_layout/header/horizontal/horizontal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.ts ***!
  \*******************************************************************/
/*! exports provided: HorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalComponent", function() { return HorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent(document, _renderer, renderer, navbarService, authService, router, _menuSettingsService, _themeSettingsService, deviceService) {
        this.document = document;
        this._renderer = _renderer;
        this.renderer = renderer;
        this.navbarService = navbarService;
        this.authService = authService;
        this.router = router;
        this._menuSettingsService = _menuSettingsService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.placement = 'bottom-right';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    HorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
    };
    HorizontalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        var currentBodyClassList = [];
        if (window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL && this._themeSettingsConfig.layout.style === 'horizontal') {
            currentBodyClassList = ['horizontal-layout', '2-columns', 'vertical-overlay-menu', 'menu-hide'];
            currentBodyClassList.push('fixed-navbar');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
    };
    HorizontalComponent.prototype.logout = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                _this.router.navigate(['/login']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    HorizontalComponent.prototype.refreshView = function () {
        var topHeaderElement = document.getElementsByClassName('top-header');
        var menuColorElement = document.getElementsByClassName('menu-header');
        var navigationElement = document.getElementsByClassName('menu-header');
        if (topHeaderElement) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-light');
            }
        }
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'navbar-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'navbar-icon-right');
            }
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'navbar-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-light');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'navbar-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-light');
            }
        }
    };
    HorizontalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    HorizontalComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    HorizontalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        var navbar = this.document.getElementById('navbar-mobile');
        if (this.document.body.classList.contains('menu-hide') || this.document.body.classList.contains('menu-collapsed')) {
            this.document.body.classList.remove('menu-hide');
            this.document.body.classList.remove('menu-collapsed');
            this._renderer.removeClass(sidenav, 'd-none');
            this._renderer.addClass(sidenav, 'd-block');
            this.document.body.classList.add('menu-open');
            this.document.body.classList.add('menu-expanded');
            navbar.classList.remove('show');
        }
        else {
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-hide');
            this._renderer.addClass(sidenav, 'd-none');
            // this._renderer.removeClass(contentOverlay, 'show');
            navbar.classList.remove('show');
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    HorizontalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    HorizontalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    HorizontalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    HorizontalComponent.prototype.onResize = function (event) {
        var sidenav = document.getElementById('sidenav-overlay');
        if (event.target.innerWidth <= 767) {
            this.document.body.classList.add('vertical-overlay-menu');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.addClass(sidenav, 'd-none');
        }
    };
    HorizontalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    HorizontalComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"])
    ], HorizontalComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], { static: true }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"])
    ], HorizontalComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HorizontalComponent.prototype, "onResize", null);
    HorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-horizontal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./horizontal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/horizontal/horizontal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./horizontal.component.css */ "./src/app/_layout/header/horizontal/horizontal.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"]])
    ], HorizontalComponent);
    return HorizontalComponent;
}());



/***/ }),

/***/ "./src/app/_layout/header/vertical/vertical.component.css":
/*!****************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu-right {\n    right: 0;\n    left: auto;\n    top: auto;\n}\n\n.header-navbar .navbar-container ul.nav li a.dropdown-user-link .user-name {\n    margin-left: 0rem !important;\n}\n\n.border_bottom {\n    border-bottom: none !important;\n}\n\n:host ::ng-deep .dropdown-item:active {\n    color: #fff !important;\n}\n\n@media (max-width: 991.98px) {\n  .ft-toggle-right {\n    display: none !important;\n  }\n\n  .ft-toggle-left {\n        display: none !important;\n  }\n\n  .collapse:not(.show) {\n    display: unset !important;\n  }\n}\n\n.header-navbar .navbar-header .navbar-brand .brand-text {\n  padding-left: 11px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9oZWFkZXIvdmVydGljYWwvdmVydGljYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7UUFDTSx3QkFBd0I7RUFDOUI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvaGVhZGVyL3ZlcnRpY2FsL3ZlcnRpY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0b3A6IGF1dG87XG59XG5cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHVsLm5hdiBsaSBhLmRyb3Bkb3duLXVzZXItbGluayAudXNlci1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyX2JvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmZ0LXRvZ2dsZS1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZ0LXRvZ2dsZS1sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCAuYnJhbmQtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTFweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/_layout/header/vertical/vertical.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.ts ***!
  \***************************************************************/
/*! exports provided: VerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalComponent", function() { return VerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var VerticalComponent = /** @class */ (function () {
    function VerticalComponent(document, _renderer, navbarService, _themeSettingsService, _menuSettingsService, authService, router, elementRef) {
        this.document = document;
        this._renderer = _renderer;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.isMobile = false;
        this.showNavbar = false;
        this.placement = 'bottom-right';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    VerticalComponent.prototype.logout = function () {
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                window.location.href = '/';
            }, function (err) {
                console.log(err);
            });
        }
    };
    VerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].MOBILE_RESPONSIVE_WIDTH;
        if (!this.isMobile) {
            this.showNavbar = true;
        }
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
    };
    VerticalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    VerticalComponent.prototype.refreshView = function () {
        var iconElement = document.getElementsByClassName('toggle-icon');
        var menuColorElement = document.getElementsByClassName('main-menu');
        var navigationElement = document.getElementsByClassName('main-menu');
        var navbarElement = document.getElementsByClassName('header-navbar');
        var themeColorElement = document.getElementsByClassName('header-navbar');
        var element = document.getElementsByClassName('navbar-header');
        var boxelement = document.getElementById('customizer');
        if (iconElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(iconElement.item(0), 'white');
                this._renderer.addClass(iconElement.item(0), 'blue-grey');
                this._renderer.addClass(iconElement.item(0), 'darken-3');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(iconElement.item(0), 'white');
                this._renderer.removeClass(iconElement.item(0), 'blue-grey');
                this._renderer.removeClass(iconElement.item(0), 'darken-3');
            }
        }
        if (this._themeSettingsConfig.colorTheme === 'semi-light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
            this.selectedHeaderNavBarClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'dark') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'menu-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-green');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-blue');
                this._renderer.addClass(menuColorElement.item(0), 'menu-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'menu-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-green');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-blue');
                this._renderer.addClass(menuColorElement.item(0), 'menu-light');
            }
            else if (this._themeSettingsConfig.menuColor === 'menu-green') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-blue');
                this._renderer.addClass(menuColorElement.item(0), 'menu-green');
            }
            else if (this._themeSettingsConfig.menuColor === 'menu-blue') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
                this._renderer.removeClass(menuColorElement.item(0), 'menu-green');
                this._renderer.addClass(menuColorElement.item(0), 'menu-blue');
            }
        }
        if (themeColorElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
            }
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'menu-native-scroll') {
                this._renderer.addClass(navigationElement.item(0), 'menu-native-scroll');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'menu-icon-right');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-bordered') {
                this._renderer.addClass(navigationElement.item(0), 'menu-bordered');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-flipped') {
                this._renderer.addClass(document.body, 'menu-flipped');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-collapsible') {
                this._renderer.addClass(navigationElement.item(0), 'menu-collapsible');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-static') {
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'navbar-static-top') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'semi-light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-light bg-gradient-x-grey-blue');
            }
            else if (this._themeSettingsConfig.menu === 'semi-dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-dark');
            }
            else if (this._themeSettingsConfig.menu === 'dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menu === 'light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-light');
            }
        }
    };
    VerticalComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    // example to update badge value dynamically from another component
    VerticalComponent.prototype.updateMenuBadgeValue = function () {
        for (var i = 0; i < this._menuSettingsConfig.items.length; i++) {
            if (this._menuSettingsConfig.items[i].badge) {
                this._menuSettingsConfig.items[i].badge.value = 19;
            }
        }
        this._menuSettingsService.config = this._menuSettingsConfig;
    };
    VerticalComponent.prototype.handleCollapseOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.remove('hover');
            element.classList.add('menu-collapsed-open');
        }
    };
    VerticalComponent.prototype.handleExpandOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') &&
            element.classList.contains('menu-collapsed-open')) {
            element.classList.remove('menu-collapsed-open');
            element.classList.add('open');
            element.classList.add('hover');
        }
    };
    VerticalComponent.prototype.toggleMenu = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var parent = target.parentElement;
        if (parent && parent.classList.contains('has-sub')) {
            this.openSubMenuUsingParent(parent);
        }
        else {
            var parentOfParent = parent.parentElement;
            this.openSubMenuUsingParent(parentOfParent);
        }
    };
    VerticalComponent.prototype.openSubMenuUsingParent = function (parent) {
        if (parent.classList && parent.classList.contains('has-sub') &&
            !parent.classList.contains('open')) {
            parent.classList.add('open');
        }
        else if (parent.classList && parent.classList.contains('has-sub') &&
            parent.classList.contains('open')) {
            parent.classList.remove('open');
        }
    };
    VerticalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    VerticalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    VerticalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    VerticalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._themeSettingsConfig.menu = 'collapse';
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._themeSettingsConfig.menu = 'expand';
        }
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        this._renderer.addClass(navBar, 'expanded');
        this._renderer.addClass(mainMenu, 'expanded');
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    VerticalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        if (this.document.body.classList.contains('menu-open') && (this.router.url === '/todos' || this.router.url === '/contacts' ||
            this.router.url === '/email' || this.router.url === '/chats')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.removeClass(contentOverlay, 'show');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else if (this.document.body.classList.contains('menu-open')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else {
            this._renderer.removeClass(sidenav, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this._renderer.addClass(sidenav, 'd-block');
            this.showNavbar = false;
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    VerticalComponent.prototype.toggleNavbar = function (e) {
        if (this.showNavbar) {
            this.showNavbar = false;
        }
        else {
            this.showNavbar = true;
        }
    };
    VerticalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    VerticalComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
            this.showNavbar = false;
        }
        else {
            this.isMobile = false;
            this.showNavbar = true;
        }
    };
    VerticalComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"])
    ], VerticalComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"], { static: true }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"])
    ], VerticalComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VerticalComponent.prototype, "onResize", null);
    VerticalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-vertical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vertical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/vertical/vertical.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vertical.component.css */ "./src/app/_layout/header/vertical/vertical.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VerticalComponent);
    return VerticalComponent;
}());



/***/ }),

/***/ "./src/app/_layout/navigation/horizontalnav/horizontalnav.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-sticky {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  z-index: 999;\n}\n\n.container {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.is-static {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 999;\n}\n\n:host ::ng-deep .navbar-dark .navbar-nav .nav-link {\n  color: white !important;\n}\n\n:host ::ng-deep .navbar-light .navbar-nav .nav-link {\n  color: #6b6f82 !important;\n}\n\n.dropdown-menu .dropdown-submenu>a:after {\n  top: 14px;\n}\n\n.dropdown .dropdown-menu {\n  min-width: 13rem !important;\n}\n\n.navbar-horizontal .dropdown-menu .dropdown-submenu>a:after,\n.navbar-horizontal .dropdown-menu .dropdown-submenu>button:after {\n  right: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheW91dC9uYXZpZ2F0aW9uL2hvcml6b250YWxuYXYvaG9yaXpvbnRhbG5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvX2xheW91dC9uYXZpZ2F0aW9uL2hvcml6b250YWxuYXYvaG9yaXpvbnRhbG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXN0aWNreSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlzLXN0YXRpYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogIzZiNmY4MiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudT5hOmFmdGVyIHtcbiAgdG9wOiAxNHB4O1xufVxuXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDEzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudT5hOmFmdGVyLFxuLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmJ1dHRvbjphZnRlciB7XG4gIHJpZ2h0OiAwLjVyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HorizontalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalnavComponent", function() { return HorizontalnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var HorizontalnavComponent = /** @class */ (function () {
    function HorizontalnavComponent(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router) {
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    HorizontalnavComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this.setActiveRouteInNavbar();
    };
    HorizontalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    HorizontalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    HorizontalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    HorizontalnavComponent.prototype.callFunction = function (event) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
    };
    HorizontalnavComponent.prototype.refreshView = function () {
        var menuHeaderElement = document.getElementsByClassName('menu-header');
        // Theme
        if (menuHeaderElement && menuHeaderElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.addClass(menuHeaderElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'menu-static');
            }
        }
    };
    HorizontalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu &&
                this._menuSettingsConfig.horizontal_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    HorizontalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        var target = event.target || event.srcElement || event.currentTarget;
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        child['isSelected'] = true;
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
    };
    HorizontalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (selectedChild.page !== 'null') {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = false;
            }
            this.handleSubmenuItems(this._menuSettingsConfig.horizontal_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    HorizontalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        var isSelectedChildExist = false;
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.title === parentItem['submenu']['items'][j].title) {
                    isSelectedChildExist = true;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
                if (parentItem['submenu']['items'][j]['isSelected'] === true) {
                    isSelectedChildExist = true;
                }
            }
            if (!isSelectedChildExist) {
                parentItem['isSelected'] = false;
            }
            else {
                parentItem['isSelected'] = true;
            }
        }
        else if (parentItem.title !== selectedChild.title && !isSubmenuOfSubmenu) {
            parentItem['isSelected'] = false;
        }
    };
    HorizontalnavComponent.prototype.onWindowScroll = function (e) {
        var element = document.getElementById('sticky-wrapper');
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            if (this._themeSettingsConfig.layout.pattern === 'fixed' ||
                this._themeSettingsConfig.layout.pattern === '') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.remove('container');
                }
                else {
                    element.classList.remove('is-sticky');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.add('container');
                }
                else {
                    element.classList.remove('is-sticky');
                    element.classList.remove('container');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'static') {
                element.classList.remove('is-sticky');
                element.classList.remove('container');
                element.classList.add('is-static');
            }
        }
    };
    HorizontalnavComponent.prototype.mouseEnter = function (e) {
        var _event = e;
        _event.srcElement.classList.add('show');
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    HorizontalnavComponent.prototype.mouseLeave = function (event) {
        var _event = event;
        _event.srcElement.classList.remove('show');
    };
    HorizontalnavComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HorizontalnavComponent.prototype, "onWindowScroll", null);
    HorizontalnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontalnav',
            template: __importDefault(__webpack_require__(/*! raw-loader!./horizontalnav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/horizontalnav/horizontalnav.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)]),
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./horizontalnav.component.css */ "./src/app/_layout/navigation/horizontalnav/horizontalnav.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], HorizontalnavComponent);
    return HorizontalnavComponent;
}());



/***/ }),

/***/ "./src/app/_layout/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
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






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_renderer, _themeSettingsService, deviceService) {
        this._renderer = _renderer;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.isMobile = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
        });
    };
    NavigationComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavigationComponent.prototype, "onResize", null);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/navigation.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/_layout/navigation/verticalnav/verticalnav.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/_layout/navigation/verticalnav/verticalnav.component.ts ***!
  \*************************************************************************/
/*! exports provided: VerticalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalnavComponent", function() { return VerticalnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var VerticalnavComponent = /** @class */ (function () {
    function VerticalnavComponent(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router, ngZone) {
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this.ngZone = ngZone;
        this.config = { wheelPropagation: true };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    VerticalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        // TODO Patch to reset menu after login
        this.resetMainMenu();
        this.setActiveRouteInNavbar();
    };
    VerticalnavComponent.prototype.resetMainMenu = function () {
        var nodes = this.document.getElementById('main-menu-navigation').childNodes;
        for (var i = 0; i < nodes.length; i++) {
            this.resetCollapseMenu(nodes[i]);
        }
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['isOpen'] = false;
            this.resetSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i]);
        }
    };
    VerticalnavComponent.prototype.resetCollapseMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('hover');
            element.classList.remove('menu-collapsed-open');
        }
    };
    VerticalnavComponent.prototype.resetSubmenuItems = function (parentItem) {
        if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            parentItem['isOpen'] = false;
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                parentItem['submenu']['items'][j]['isSelected'] = false;
                this.resetSubmenuItems(parentItem['submenu']['items'][j]);
            }
        }
    };
    VerticalnavComponent.prototype.refreshView = function () {
        var mainMenuElement = document.getElementsByClassName('main-menu');
        if (mainMenuElement && mainMenuElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-fixed');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-static');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-fixed');
            }
        }
    };
    VerticalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            if (!this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalnavComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.callFunction = function (event, child, isSubmenuOfSubmenu) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        child['isSelected'] = true;
    };
    VerticalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    VerticalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    VerticalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    VerticalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this.handleSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    VerticalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            if (parentItem.title !== selectedChild.title && parentItem['isOpen'] === true && !isSubmenuOfSubmenu &&
                this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE) {
                parentItem['isOpen'] = false;
            }
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.page !== 'null') {
                    parentItem['submenu']['items'][j]['isSelected'] = false;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
            }
        }
        else if (parentItem.title !== selectedChild.title && !selectedChild.submenu
            && this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE
            && parentItem['isOpen'] === true) {
            parentItem['isOpen'] = false;
        }
    };
    VerticalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        var target = event.target || event.srcElement || event.currentTarget;
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        if (child['isSelected'] === true) {
            child['isSelected'] = false;
        }
        else {
            child['isSelected'] = true;
        }
        if (child['hover'] === true) {
            child['hover'] = false;
        }
        else {
            child['hover'] = true;
        }
        if (child['isOpen'] === true) {
            child['isOpen'] = false;
        }
        else {
            child['isOpen'] = true;
        }
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
    };
    VerticalnavComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_8__["MenuSettingsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"])
    ], VerticalnavComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"])
    ], VerticalnavComponent.prototype, "directiveRef", void 0);
    VerticalnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verticalnav',
            template: __importDefault(__webpack_require__(/*! raw-loader!./verticalnav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/verticalnav/verticalnav.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: '1',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: '0',
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('200ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('200ms ease-in-out'))
                ])
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_8__["MenuSettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], VerticalnavComponent);
    return VerticalnavComponent;
}());



/***/ }),

/***/ "./src/app/_layout/private-layout/private-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_layout/private-layout/private-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: PrivateLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function() { return PrivateLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/navbar.service */ "./src/app/_services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var PrivateLayoutComponent = /** @class */ (function () {
    function PrivateLayoutComponent(renderer, document, router, navbarService, _themeSettingsService, deviceService) {
        var _this = this;
        this.renderer = renderer;
        this.document = document;
        this.router = router;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.deviceInfo = null;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                // Hide loading indicator
                if (_this.router.url === '/chats') {
                    _this.renderer.addClass(document.body, 'chat-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'chat-application');
                }
                if (_this.router.url === '/email') {
                    _this.renderer.addClass(document.body, 'email-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'email-application');
                }
                if (_this.router.url === '/contacts') {
                    _this.renderer.addClass(document.body, 'app-contacts');
                }
                else {
                    _this.renderer.removeClass(document.body, 'app-contacts');
                }
                if (_this.router.url === '/todos') {
                    _this.renderer.addClass(document.body, 'todo');
                }
                else {
                    _this.renderer.removeClass(document.body, 'todo');
                }
                if (_this.router.url === '/cadastros') {
                    _this.renderer.addClass(document.body, 'cadastros');
                }
                else {
                    _this.renderer.removeClass(document.body, 'cadastros');
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"]) {
                // Hide loading indicator
            }
        });
    }
    PrivateLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (localStorage.getItem('currentLayoutStyle')) {
                _this._themeSettingsConfig.layout.style = localStorage.getItem('currentLayoutStyle');
            }
        });
        this.deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
        this.handleCollapsibleMenu();
    };
    PrivateLayoutComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        if (this._themeSettingsConfig.layout.style === 'vertical') {
            _self.renderer.setAttribute(document.body, 'data-menu', 'vertical-menu-modern');
        }
        else {
            _self.renderer.setAttribute(document.body, 'data-menu', 'horizontal-menu-modern');
        }
        var currentBodyClassList = [];
        this.layout = this._themeSettingsConfig.layout.style;
        this.customizer = this._themeSettingsConfig.customizer;
        // Vertical resposive view
        if (this._themeSettingsConfig.layout.style === 'vertical' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                currentBodyClassList = ['vertical-layout', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['vertical-layout', '2-columns', 'vertical-overlay-menu', 'pace-done', 'menu-hide'];
            }
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Horizontal resposive view
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            currentBodyClassList = ['horizontal-layout', 'horizontal-menu', '2-columns', 'pace-done',
                'fixed-navbar', 'menu-hide'];
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Normal view
        }
        else {
            var previosBodyClassList = [].slice.call(document.body.classList);
            var callapseOrExpanded_1 = '';
            previosBodyClassList.forEach(function (c) {
                if (c === 'menu-collapsed') {
                    callapseOrExpanded_1 = 'menu-collapsed';
                }
                else if (c === 'menu-expanded') {
                    callapseOrExpanded_1 = 'menu-expanded';
                }
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                if (callapseOrExpanded_1 === '') {
                    var toggleIcon = document.getElementsByClassName('toggle-icon');
                    if (toggleIcon.item && toggleIcon.item(0) &&
                        toggleIcon.item(0).classList.contains('ft-toggle-right')) {
                        callapseOrExpanded_1 = 'menu-expanded';
                    }
                    else {
                        callapseOrExpanded_1 = 'menu-collapsed';
                    }
                }
                // callapseOrExpanded = callapseOrExpanded !== '' ? callapseOrExpanded : 'menu-collapsed';
                currentBodyClassList = ['vertical-layout', 'vertical-menu-modern', '2-columns', 'pace-done', 'menu-close', callapseOrExpanded_1];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === '') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                    this.renderer.addClass(document.body, 'fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['horizontal-layout', '2-columns', 'horizontal-menu'];
                if (window.innerWidth >= _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    currentBodyClassList.push('menu-expanded');
                }
                else {
                    currentBodyClassList.push('menu-collapsed');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                }
            }
        }
        var footer = document.getElementById('footer');
        // if (this.router.url == '/chats') {
        // const footer = document.getElementById('footer');
        if (this.router.url === '/chats') {
            currentBodyClassList.push('chat-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('chat-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/email') {
            currentBodyClassList.push('email-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('email-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/contacts') {
            currentBodyClassList.push('app-contacts');
        }
        if (this.router.url === '/todos') {
            currentBodyClassList.push('todo');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
        this.handleFullScreen();
    };
    PrivateLayoutComponent.prototype.handleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (window.innerWidth === screen.width && window.innerHeight === screen.height && toggleIcon.item(0)) {
            this.renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0)) {
            this.renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    PrivateLayoutComponent.prototype.handleCollapsibleMenu = function () {
        if (this._themeSettingsConfig.menu === 'collapse') {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    PrivateLayoutComponent.prototype.onResize = function (event) {
        var menuClose = document.body.getElementsByClassName('menu-close');
        var toggle = document.getElementsByClassName('content-overlay');
        var sidenavOverlay = document.getElementsByClassName('sidenav-overlay');
        var emailMenu = document.getElementsByClassName('email-app-menu');
        var toggleIcon = document.getElementById('sidebar-left');
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.handleBody(true);
            if (menuClose) {
                this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
                this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            }
        }
        else {
            this.handleBody(false);
        }
        if (toggle && (this.router.url === '/chats' || this.router.url === '/todos' || this.router.url === '/contacts') &&
            event.target.innerWidth > _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            this.renderer.removeClass(toggleIcon, 'show');
        }
        if ((toggle || sidenavOverlay) && this.router.url === '/email' && event.target.innerWidth > 767) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(emailMenu.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
        }
    };
    PrivateLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PrivateLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PrivateLayoutComponent.prototype, "onResize", null);
    PrivateLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./private-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/private-layout/private-layout.component.html")).default,
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])
    ], PrivateLayoutComponent);
    return PrivateLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/public-layout/public-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_layout/public-layout/public-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        this.setBodyClass();
    };
    PublicLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PublicLayoutComponent.prototype.setBodyClass = function () {
        var previosBodyClassList = [].slice.call(document.body.classList);
        var self = this;
        previosBodyClassList.forEach(function (c) {
            self.renderer.removeClass(document.body, c);
        });
        var currentBodyClassList = ['vertical-layout', 'bg-full-screen-image', 'vertical-overlay-menu',
            '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
        currentBodyClassList.forEach(function (c) {
            self.renderer.addClass(document.body, c);
        });
    };
    PublicLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    PublicLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./public-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/public-layout/public-layout.component.html")).default,
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document])
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/settings/menu-settings.config.ts":
/*!**********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.config.ts ***!
  \**********************************************************/
/*! exports provided: MenuSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsConfig", function() { return MenuSettingsConfig; });
// Default menu settings configurations
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MenuSettingsConfig = {
    horizontal_menu: {
        items: [
            {
                title: 'Posição do Menu',
                icon: 'la-television',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Horizontal',
                            page: 'null'
                        },
                        {
                            title: 'Vertical',
                            page: 'null'
                        },
                    ]
                }
            },
            {
                title: 'Cadastros Gerais',
                icon: 'la-desktop',
                page: '/cadastros',
            },
            {
                title: 'Listagem ',
                icon: 'la-desktop',
                page: '/app',
            },
            {
                title: 'Estatísticas',
                icon: 'la-pie-chart',
                page: ''
            },
            {
                title: 'Calendários',
                icon: 'la-calendar',
                page: ''
            }
        ]
    },
    vertical_menu: {
        items: [
            {
                title: 'Posição do Menu',
                icon: 'la-television',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Horizontal',
                            page: 'null'
                        },
                        {
                            title: 'Vertical',
                            page: 'null'
                        },
                    ]
                }
            },
            { section: 'GERAL' },
            {
                title: 'Cadastros',
                icon: 'la-plus',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Exames',
                            page: '/cadastros/exames'
                        },
                        {
                            title: 'Máscaras',
                            page: '/cadastros/mascaras'
                        }
                    ]
                }
            },
            { section: 'REGISTROS' },
            {
                title: 'Listagem',
                icon: 'la-plus',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Laudos',
                            page: '/app/listCirur'
                        }
                    ]
                }
            },
            { section: 'Graficos' },
            {
                title: 'Estatísticas',
                icon: 'la-pie-chart',
                page: '/dashboard/painel'
            },
            { section: 'Aplicações' },
            {
                title: 'Calendários',
                icon: 'la-calendar',
                page: ''
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/_layout/settings/menu-settings.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.service.ts ***!
  \***********************************************************/
/*! exports provided: MENU_SETTINGS_CONFIG, MenuSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SETTINGS_CONFIG", function() { return MENU_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsService", function() { return MenuSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var MENU_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('menuCustomConfig');
var MenuSettingsService = /** @class */ (function () {
    function MenuSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    MenuSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this._configSubject.getValue());
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(MenuSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_4__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: true,
        configurable: true
    });
    MenuSettingsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MENU_SETTINGS_CONFIG,] }] }
    ]; };
    MenuSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(MENU_SETTINGS_CONFIG)),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], MenuSettingsService);
    return MenuSettingsService;
}());



/***/ }),

/***/ "./src/app/_layout/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/_layout/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-settings.service */ "./src/app/_layout/settings/theme-settings.service.ts");
/* harmony import */ var _menu_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SettingsModule = /** @class */ (function () {
    function SettingsModule(parentModule) {
        if (parentModule) {
            throw new Error('SettingsModule is already loaded. Import it in the AppModule only!');
        }
    }
    SettingsModule_1 = SettingsModule;
    SettingsModule.forRoot = function (themeConfig, menuConfig) {
        return {
            ngModule: SettingsModule_1,
            providers: [
                {
                    provide: _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["THEME_SETTINGS_CONFIG"],
                    useValue: themeConfig
                },
                {
                    provide: _menu_settings_service__WEBPACK_IMPORTED_MODULE_2__["MENU_SETTINGS_CONFIG"],
                    useValue: menuConfig
                }
            ]
        };
    };
    var SettingsModule_1;
    SettingsModule.ctorParameters = function () { return [
        { type: SettingsModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
    ]; };
    SettingsModule = SettingsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [SettingsModule])
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/_layout/settings/theme-settings.config.ts":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.config.ts ***!
  \***********************************************************/
/*! exports provided: ThemeSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsConfig", function() { return ThemeSettingsConfig; });
// Default theme settings configurations
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ThemeSettingsConfig = {
    colorTheme: 'dark',
    layout: {
        style: 'vertical',
        pattern: 'fixed' // fixed, boxed, static
    },
    menuColor: 'menu-dark',
    navigation: 'menu-collapsible',
    menu: 'expand',
    header: 'fix',
    footer: 'static',
    customizer: 'on',
    brand: {
        brand_name: 'IMAGE Admin',
        logo: {
            type: 'internal',
            value: 'assets/custom/images/logo.jpg' // recommended location for custom images
            // type:'url',
            // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
        },
    },
    defaultTitleSuffix: 'IMAGE Admin'
};


/***/ }),

/***/ "./src/app/_layout/settings/theme-settings.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.service.ts ***!
  \************************************************************/
/*! exports provided: THEME_SETTINGS_CONFIG, ThemeSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_SETTINGS_CONFIG", function() { return THEME_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsService", function() { return ThemeSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var THEME_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('themeCustomConfig');
var ThemeSettingsService = /** @class */ (function () {
    function ThemeSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    ThemeSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this._configSubject.getValue());
                // Reset the layout from the default config
                // config.layout = _.cloneDeep(this._defaultConfig.layout);
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(ThemeSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_4__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: true,
        configurable: true
    });
    ThemeSettingsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [THEME_SETTINGS_CONFIG,] }] }
    ]; };
    ThemeSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(THEME_SETTINGS_CONFIG)),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], ThemeSettingsService);
    return ThemeSettingsService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        var _this = this;
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        setTimeout(function () {
            _this.subject.next();
        }, 3000);
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        var _this = this;
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        setTimeout(function () {
            _this.subject.next();
        }, 3000);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.afs = afs;
        this.userCol = this.afs.collection('users');
    }
    AuthService.prototype.doAnonymousLogin = function () {
        return this.afAuth.auth.signInAnonymously();
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGitHubLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GithubAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.createUser = function (dados) {
        var _this = this;
        var bairro = dados.bairro;
        var complemento = dados.complemento;
        var password = 'sanep01';
        var email = dados.email;
        var endereco = dados.endereco;
        var firstname = dados.firstname;
        var lastname = dados.lastname;
        var observacao = dados.observacao;
        var phone = dados.phone;
        console.log('service', dados);
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .createUserWithEmailAndPassword(email, password)
            .then(function (credential) {
            var userDados = {
                bairro: bairro,
                complemento: complemento,
                email: email,
                endereco: firstname,
                lastname: lastname,
                observacao: observacao,
                phone: phone,
                id: credential.user.uid
            };
            _this.addUser(userDados);
        }).catch(function (error) {
            return error;
        });
    };
    AuthService.prototype.addUser = function (userDados) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userDados.datePub = new Date();
                        userDados.monthPub = new Date().getMonth() + 1;
                        userDados.yearPub = new Date().getFullYear();
                        return [4 /*yield*/, this.userCol.add(JSON.parse(JSON.stringify(userDados)))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                localStorage.removeItem('currentUser');
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                localStorage.removeItem('currentUser');
                reject();
            }
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/data.api.ts":
/*!***************************************!*\
  !*** ./src/app/_services/data.api.ts ***!
  \***************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataApiService = /** @class */ (function () {
    function DataApiService(http) {
        this.http = http;
        this.apiBaseURL = 'assets/data';
        this.loadDataURL = null;
        this.loadDataURL = this.apiBaseURL + "/chartist/charts/chartist.json";
    }
    DataApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Error
            console.error('error:', error.error.message);
        }
        else {
            // Error
            console.error("Api server returned " + error.status + ", " +
                ("error body: " + error.error));
        }
        // throwError is observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error has happened');
    };
    DataApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    DataApiService.prototype.getDashboardData = function () {
        return this.http.get(this.loadDataURL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/app/_services/navbar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/navbar.service.ts ***!
  \*********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.mouseInMenuRegion = false;
        this.fixedMenu = false;
    }
    NavbarService.prototype.isMouseInRegion = function () {
        return this.mouseInMenuRegion;
    };
    NavbarService.prototype.setMouseInRegion = function (flag) {
        this.mouseInMenuRegion = flag;
    };
    NavbarService.prototype.isFixedMenu = function () {
        return this.fixedMenu;
    };
    NavbarService.prototype.setFixedMenu = function (flag) {
        this.fixedMenu = flag;
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/app-material/material.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-material/material.module.ts ***!
  \*************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
/* harmony import */ var _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/settings/menu-settings.service */ "./src/app/_layout/settings/menu-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var AppComponent = /** @class */ (function () {
    function AppComponent(spinner, document, router, loader, deviceService, _menuSettingsService, titleService) {
        this.spinner = spinner;
        this.document = document;
        this.router = router;
        this.loader = loader;
        this.deviceService = deviceService;
        this._menuSettingsService = _menuSettingsService;
        this.titleService = titleService;
        this.showContent = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.setTitle();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                _this.loader.increment(35);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"]) {
                _this.loader.increment(75);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
                _this.showContent = true;
                // close menu for mobile view
                if (_this.deviceService.isMobile() || window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    if (document.body.classList.contains('menu-open')) {
                        document.body.classList.remove('menu-open');
                        document.body.classList.add('menu-close');
                    }
                }
            }
        });
    };
    AppComponent.prototype.setTitle = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                for (var i = 0; i < _this._menuSettingsConfig.vertical_menu.items.length; i++) {
                    if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                        _this._menuSettingsConfig.vertical_menu.items[i].page === _this.router.url) {
                        _this.title = _this._menuSettingsConfig.vertical_menu.items[i].title;
                        break;
                    }
                    else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                        // Level 1 menu
                        for (var j = 0; j < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                            if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                                _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === _this.router.url) {
                                _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].title;
                                break;
                            }
                            else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                                // Level 2 menu
                                for (var k = 0; k < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                                    if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === _this.router.url) {
                                        _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].title;
                                    }
                                }
                            }
                        }
                    }
                }
                if (_this.title && _this.router.url !== '/') {
                    _this.titleService.setTitle(_this.title + '-  Admin ');
                }
                else {
                    if (_this.router.url === '/') {
                        _this.title = 'Login';
                        _this.titleService.setTitle(_this.title + '- Admin ');
                        _this.title = '';
                    }
                    else if (_this.router.url === '/login') {
                        _this.title = 'Login';
                        _this.titleService.setTitle(_this.title + '- Admin ');
                        _this.title = '';
                    }
                    else if (_this.router.url === '/register') {
                        _this.title = 'Register';
                        _this.titleService.setTitle(_this.title + '- Admin ');
                        _this.title = '';
                    }
                }
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] },
        { type: _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"],
            _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_layout/settings/settings.module */ "./src/app/_layout/settings/settings.module.ts");
/* harmony import */ var _layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_layout/settings/theme-settings.config */ "./src/app/_layout/settings/theme-settings.config.ts");
/* harmony import */ var _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_layout/settings/menu-settings.config */ "./src/app/_layout/settings/menu-settings.config.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_layout/header/header.component */ "./src/app/_layout/header/header.component.ts");
/* harmony import */ var _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_layout/header/vertical/vertical.component */ "./src/app/_layout/header/vertical/vertical.component.ts");
/* harmony import */ var _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_layout/header/horizontal/horizontal.component */ "./src/app/_layout/header/horizontal/horizontal.component.ts");
/* harmony import */ var _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_layout/header/full-layout-navbar/full-layout-navbar.component */ "./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_layout/footer/footer.component */ "./src/app/_layout/footer/footer.component.ts");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_layout/navigation/navigation.component */ "./src/app/_layout/navigation/navigation.component.ts");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "./src/app/_layout/public-layout/public-layout.component.ts");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "./src/app/_layout/private-layout/private-layout.component.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./social-signin/social-signin.component */ "./src/app/social-signin/social-signin.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./changelog/changelog.component */ "./src/app/changelog/changelog.component.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_services/navbar.service */ "./src/app/_services/navbar.service.ts");
/* harmony import */ var _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_layout/navigation/verticalnav/verticalnav.component */ "./src/app/_layout/navigation/verticalnav/verticalnav.component.ts");
/* harmony import */ var _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_layout/navigation/horizontalnav/horizontalnav.component */ "./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_layout/customizer/customizer.component */ "./src/app/_layout/customizer/customizer.component.ts");
/* harmony import */ var _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./content/partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_layout/breadcrumb/breadcrumb.module */ "./src/app/_layout/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var _services_data_api__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_services/data.api */ "./src/app/_services/data.api.ts");
/* harmony import */ var _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_layout/customizer/horizontal-customizer/horizontal-customizer.component */ "./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_layout/blockui/block-template.component */ "./src/app/_layout/blockui/block-template.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./content/partials/general/match-height/match-height.module */ "./src/app/content/partials/general/match-height/match-height.module.ts");
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ "./src/app/_layout/full-layout/full-layout.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./app-material/material.module */ "./src/app/app-material/material.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












// Routing

// Components



















// perfect scroll bar

// spinner





















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_37__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_43__["MatchHeightModule"],
                _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_38__["BreadcrumbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_50__["NgxPaginationModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_51__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_45__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_46__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_47__["AngularFireAuthModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                // Settings modules
                _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_13__["SettingsModule"].forRoot(_layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_14__["ThemeSettingsConfig"], _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_15__["MenuSettingsConfig"]),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_34__["DeviceDetectorModule"].forRoot(),
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_33__["LoadingBarRouterModule"],
                _app_material_material_module__WEBPACK_IMPORTED_MODULE_49__["MaterialModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_42__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_41__["BlockTemplateComponent"]
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_22__["PublicLayoutComponent"],
                _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_23__["PrivateLayoutComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_19__["FullLayoutNavbarComponent"],
                _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_18__["HorizontalComponent"],
                _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_17__["VerticalComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_21__["NavigationComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _register__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_25__["SocialSigninComponent"],
                _login__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_27__["ChangelogComponent"],
                _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_29__["VerticalnavComponent"],
                _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_30__["HorizontalnavComponent"],
                _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_36__["CustomizerComponent"],
                _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_40__["HorizontalCustomizerComponent"],
                _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_41__["BlockTemplateComponent"],
                _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_44__["FullLayoutComponent"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_28__["NavbarService"],
                _services_data_api__WEBPACK_IMPORTED_MODULE_39__["DataApiService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                    useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]
                },
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_46__["AngularFirestore"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_48__["AngularFireAuth"]
            ],
            entryComponents: [
                _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_41__["BlockTemplateComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "./src/app/_layout/public-layout/public-layout.component.ts");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "./src/app/_layout/private-layout/private-layout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelog/changelog.component */ "./src/app/changelog/changelog.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var appRoutes = [
    // Public layout
    {
        path: '',
        component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicLayoutComponent"],
        children: [
            { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: '', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
        ]
    },
    // Private layout
    {
        path: '',
        component: _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrivateLayoutComponent"],
        children: [
            { path: 'logout', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'changelog', component: _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__["ChangelogComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'cadastros', loadChildren: '../app/content/cadastros/cadastros.module#CadastrosModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'dashboard', loadChildren: '../app/content/dashboard/dashboard.module#DashboardModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'app', loadChildren: '../app/content/exames/exames.module#ExamesModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
        ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'changelog' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });


/***/ }),

/***/ "./src/app/changelog/changelog.component.css":
/*!***************************************************!*\
  !*** ./src/app/changelog/changelog.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/changelog/changelog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
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


var ChangelogComponent = /** @class */ (function () {
    function ChangelogComponent() {
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
    }
    ChangelogComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'ChangeLog',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'ChangeLog',
                    'isLink': false,
                    'link': '#'
                },
            ]
        };
    };
    ChangelogComponent.prototype.reloadChangelog = function () {
        var _this = this;
        this.blockUIChangelog.start('Loading..');
        setTimeout(function () {
            _this.blockUIChangelog.stop();
        }, 2500);
    };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_1__["BlockUI"])('changelog'),
        __metadata("design:type", Object)
    ], ChangelogComponent.prototype, "blockUIChangelog", void 0);
    ChangelogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./changelog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/changelog/changelog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./changelog.component.css */ "./src/app/changelog/changelog.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ChangelogComponent);
    return ChangelogComponent;
}());



/***/ }),

/***/ "./src/app/content/partials/general/card/card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFydGlhbHMvZ2VuZXJhbC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/content/partials/general/card/card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "./src/app/_helpers/app.constants.ts");
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



var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.reloadFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.elHeader && this.elHeader.nativeElement.children.length === 0) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['headerClass']) {
            this.options['headerClass'].forEach(function (element) {
                _this.elHeader.nativeElement.classList.add(element);
            });
        }
        if (this.elHeaderTitle && (this.elHeaderTitle.nativeElement.children.length === 0
            && this.elHeaderTitle.nativeElement.innerText.trim().length === 0)) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        if (this.elFooter && this.elFooter.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elHeaderTools && this.elHeaderTools.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elContent && this.elContent.nativeElement.children.length === 0) {
            this.elContent.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['contentClass']) {
            this.options['contentClass'].forEach(function (element) {
                _this.elContent.nativeElement.classList.add(element);
            });
        }
        if (this.elBody && this.elBody.nativeElement.children.length === 0) {
            this.elBody.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['bodyClass']) {
            this.options['bodyClass'].forEach(function (element) {
                _this.elBody.nativeElement.classList.add(element);
            });
        }
        if (this.options && this.options['cardClass']) {
            this.options['cardClass'].forEach(function (element) {
                _this.elCard.nativeElement.classList.add(element);
            });
        }
    };
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.toggleCollpase = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elContent.nativeElement.classList.contains('show')) {
            this.elContent.nativeElement.classList.add('collapse');
            this.elContent.nativeElement.classList.remove('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            target.classList.add('ft-maximize');
            target.classList.remove('ft-minimize');
            target.classList.remove('ft-minus');
            target.classList.add('ft-plus');
        }
        else {
            this.elContent.nativeElement.classList.add('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            this.elContent.nativeElement.classList.remove('collapse');
            target.classList.remove('ft-plus');
            target.classList.add('ft-minus');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.reload = function () {
        this.reloadFunction.emit(this.options);
    };
    CardComponent.prototype.close = function () {
        this.elCard.nativeElement.classList.add('hidden');
        this.elCard.nativeElement.classList.remove('card-fullscreen');
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleExpand = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elCard.nativeElement.classList.contains('card-fullscreen')) {
            this.elCard.nativeElement.classList.remove('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.add('ft-maximize');
            target.classList.remove('ft-minimize');
        }
        else {
            this.elCard.nativeElement.classList.add('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.remove('ft-maximize');
            target.classList.add('ft-minimize');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleMobileMenu = function () {
        if (this.elHeaderTools.nativeElement.classList.contains('visible')) {
            this.elHeaderTools.nativeElement.classList.remove('visible');
        }
        else {
            this.elHeaderTools.nativeElement.classList.add('visible');
        }
        // fire resize event for graphs
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], CardComponent.prototype, "loading$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "reloadFunction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCard', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardHeader', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardHeaderTitle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elHeaderTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardContent', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardBody', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardFooter', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mCardHeaderTools', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardComponent.prototype, "elHeaderTools", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/general/card/card.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./card.component.css */ "./src/app/content/partials/general/card/card.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/content/partials/general/card/card.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.module.ts ***!
  \**************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/content/partials/general/card/card.component.ts");
/* harmony import */ var src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_directives/card.directive */ "./src/app/_directives/card.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_3__["CardDirective"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/app/content/partials/general/match-height/match-height.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/partials/general/match-height/match-height.module.ts ***!
  \******************************************************************************/
/*! exports provided: MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ "./src/app/_directives/match-height.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ }),

/***/ "./src/app/content/partials/partials.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/partials/partials.module.ts ***!
  \*****************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general/card/card.module */ "./src/app/content/partials/general/card/card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _general_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ]
        })
    ], PartialsModule);
    return PartialsModule;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-left-5{\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQtNXtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, alertService, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout();
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var value = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.doLogin(value)
            .then(function (res) {
            _this.setUserInStorage(res);
            localStorage.removeItem('currentLayoutStyle');
            var returnUrl = '/changelog';
            if (_this.returnUrl) {
                returnUrl = _this.returnUrl;
            }
            _this.router.navigate([returnUrl]);
        }, function (err) {
            _this.submitted = false;
            _this.alertService.error(err.message);
        });
    };
    LoginComponent.prototype.setUserInStorage = function (res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-left-5{\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQtNXtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, alertService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.errorMessage = '';
        this.successMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.doRegister(this.registerForm.value)
            .then(function (res) {
            _this.loading = false;
            console.log(res);
            _this.errorMessage = '';
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.alertService.error(err.message);
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/social-signin/social-signin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/social-signin/social-signin.component.ts ***!
  \**********************************************************/
/*! exports provided: SocialSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSigninComponent", function() { return SocialSigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var SocialSigninComponent = /** @class */ (function () {
    function SocialSigninComponent(route, router, alertService, authService) {
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.homeURL = '/home';
    }
    SocialSigninComponent.prototype.ngOnInit = function () {
    };
    SocialSigninComponent.prototype.tryAnonymousLogin = function () {
        return this.authService.doAnonymousLogin();
    };
    SocialSigninComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryGithubLogin = function () {
        var _this = this;
        this.authService.doGitHubLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.setUserInStorage = function (res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    SocialSigninComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    SocialSigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-signin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./social-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/social-signin/social-signin.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SocialSigninComponent);
    return SocialSigninComponent;
}());



/***/ }),

/***/ "./src/assets/data/customizer/customizerColor.json":
/*!*********************************************************!*\
  !*** ./src/assets/data/customizer/customizerColor.json ***!
  \*********************************************************/
/*! exports provided: colorArray, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"colorArray\":[{\"cssClass\":\"bg-blue-grey\"},{\"cssClass\":\"bg-primary\"},{\"cssClass\":\"bg-danger\"},{\"cssClass\":\"bg-success\"},{\"cssClass\":\"bg-blue\"},{\"cssClass\":\"bg-cyan\"},{\"cssClass\":\"bg-pink\"},{\"cssClass\":\"bg-gradient-x-grey-blue\"},{\"cssClass\":\"bg-gradient-x-primary\"},{\"cssClass\":\"bg-gradient-x-danger\"},{\"cssClass\":\"bg-gradient-x-success\"},{\"cssClass\":\"bg-gradient-x-blue\"},{\"cssClass\":\"bg-gradient-x-cyan\"},{\"cssClass\":\"bg-gradient-x-pink\"},{\"cssClass\":\"bg-default\"},{\"cssClass\":\"bg-blue-grey bg-lighten-4\"},{\"cssClass\":\"bg-primary bg-lighten-4\"},{\"cssClass\":\"bg-danger bg-lighten-4\"},{\"cssClass\":\"bg-success bg-lighten-4\"},{\"cssClass\":\"bg-blue bg-lighten-4\"},{\"cssClass\":\"bg-cyan bg-lighten-4\"},{\"cssClass\":\"bg-pink bg-lighten-4\"}]}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAQYFyuzvShqsLS0ZkVIS0x9pCDUadSyT0",
        authDomain: "sistatend-ae6a9.firebaseapp.com",
        databaseURL: "https://sistatend-ae6a9.firebaseio.com",
        projectId: "sistatend-ae6a9",
        storageBucket: "sistatend-ae6a9.appspot.com",
        messagingSenderId: "169324066077",
        appId: "1:169324066077:web:b84634b522455273"
    },
    googleApiKey: 'AIzaSyDyaiWYxbAOizjHJIV0jHW82iStHDWXK6g'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wagneralves/Desktop/Projetos/radiologiaback2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map