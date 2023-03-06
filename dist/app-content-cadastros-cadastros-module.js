(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-cadastros-cadastros-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/cad-equipe/cad-equipe.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/cad-equipe/cad-equipe.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <!-- Basic form layout section start -->\n      <section id=\"basic-form-layouts\">\n        <div class=\"row\" matchHeight=\"card\">\n          <div class=\"col-md-11\" *blockUI=\"'projectInfo'; message: 'Loading'\">\n            <m-card [options]=\"options\" >\n              <ng-container mCardHeaderTitle>\n                Cadastro de Exames por Paciente no Sistema\n              </ng-container>\n              <ng-container mCardBody>\n                <div class=\"card-text\">\n                  <p>Insira abaixo as informações dos pacientes e seus exames </p>\n                </div>\n                <form [formGroup]=\"cadEquipe\" (ngSubmit)=\"oncadEquipeSubmit(cadEquipe.value)\">\n                  <div class=\"form-body\">\n                    <h4 class=\"form-section\"><i class=\"feather ft-user\"></i> Informações Pessoais</h4>\n                    <div class=\"row\">\n                      <div class=\"col-md-7\">\n                        <div class=\"form-group\">\n                          <label for=\"nome\">Nome *</label>\n                          <input type=\"text\" id=\"nome\" class=\"form-control\" formControlName=\"firstName\"\n                            placeholder=\"Nome\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.firstName.errors\"\n                            class=\"invalid-feedback\">\n                            <div *ngIf=\" f.firstName.errors.required\">\n                              Nome é Requerido</div>\n                          </small>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"cpf\">CPF *</label>\n                          <input type=\"text\" id=\"cpf\" class=\"form-control\" formControlName=\"cpf\"\n                            placeholder=\"CPF\" [ngClass]=\"{ 'is-invalid': submitted && f.cpf.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.cpf.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cpf.errors.required\">\n                              CPF é requerido </div>\n                          </small>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label for=\"niver\">Data Nascimento *</label>\n                          <mat-form-field>\n                            <input matInput [matDatepicker]=\"niver\" placeholder=\"Input disabled\" disabled formControlName=\"niver\">\n                            <mat-datepicker-toggle matSuffix [for]=\"niver\"></mat-datepicker-toggle>\n                            <mat-datepicker #niver disabled=\"false\"></mat-datepicker>\n                          </mat-form-field>\n                      </div>\n                     </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"sexo\">Sexo *</label>\n                          <select\n                              formControlName=\"sexo\"\n                              id=\"sexo\"\n                              class=\"form-control\">\n                              <option *ngFor=\"let sexo of sexos\" [value]=\"sexo.id\">{{ sexo.label }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label for=\"medico\">Nome do Médico  *</label>\n                          <input type=\"text\" id=\"medico\" class=\"form-control\" formControlName=\"medico\"\n                            placeholder=\"Medico\" [ngClass]=\"{ 'is-invalid': submitted && f.medico.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.medico.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.medico.errors.required\">Fone é requerido</div>\n                          </small>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"exame\">Exame *</label>\n                          <select multiple\n                              formControlName=\"tipoexame\"\n                              id=\"exame\"\n                              class=\"form-control\">\n                              <option *ngFor=\"let exame of exames\" [ngValue]=\"exame\" (change)=\"changeTipoexame($event)\">{{exame}}\n                              </option>\n\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"equito\">Tipo Equipamento *</label>\n                          <select\n                              formControlName=\"equipamento\"\n                              id=\"equito\"\n                              class=\"form-control\">\n                              <option *ngFor=\"let equito of equipamentos\" [value]=\"equito.id\">{{ equito.label }}</option>\n                          </select>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label for=\"dp3\">Data Agendada *</label>\n                          <mat-form-field>\n                            <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled formControlName=\"data\">\n                            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                            <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                          </mat-form-field>\n                      </div>\n                    </div>\n                    </div>\n                      <div class=\"row\">\n\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"hora\">Hora *</label>\n                          <input type=\"text\" id=\"hora\" class=\"form-control\" formControlName=\"hora\" maxlength=\"2\"\n                            placeholder=\"08:00\" [ngClass]=\"{ 'is-invalid': submitted && f.hora.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.hora.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.hora.errors.required\">\n                              Data Agendada é Requerido </div>\n                          </small>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"min\">Min *</label>\n                          <input type=\"text\" id=\"min\" class=\"form-control\" formControlName=\"min\" maxlength=\"2\"\n                            placeholder=\"08:00\" [ngClass]=\"{ 'is-invalid': submitted && f.min.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.min.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.min.errors.required\">\n                              Data Agendada é Requerido </div>\n                          </small>\n                        </div>\n                      </div>\n\n\n\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"tecnico\">Tecnico *</label>\n                          <input type=\"text\" id=\"tecnico\" class=\"form-control\" formControlName=\"tecnico\"\n                            placeholder=\"Nome\" [ngClass]=\"{ 'is-invalid': submitted && f.tecnico.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.tecnico.errors\"\n                            class=\"invalid-feedback\">\n                            <div *ngIf=\" f.tecnico.errors.required\">\n                              Tecnico</div>\n                          </small>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"unidade\">Unidade *</label>\n                          <select\n                              formControlName=\"unidade\"\n                              id=\"unidade\"\n                              class=\"form-control\">\n                              <option *ngFor=\"let unidade of unidades\" [value]=\"unidade.id\">{{ unidade.label }}</option>\n\n                          </select>\n                        </div>\n                      </div>\n                       <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"unidade\">Laudo *</label>\n                          <select\n                              formControlName=\"laudo\"\n                              id=\"laudo\"\n                              class=\"form-control\">\n                              <option *ngFor=\"let laudo of laudos\" [value]=\"laudo.id\">{{ laudo.label }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                          <label for=\"descricao\">Desc Exame*</label>\n                          <input type=\"text\" id=\"descricao\" class=\"form-control\" formControlName=\"descricao\"\n                            placeholder=\"Descrição\" [ngClass]=\"{ 'is-invalid': submitted && f.descricao.errors }\" />\n                          <small class=\"form-text text-muted danger\" *ngIf=\"submitted && f.descricao.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.descricao.errors.required\">Descrição</div>\n                          </small>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <div class=\"form-actions\">\n                    <button type=\"button\" class=\"btn btn-warning mr-1\"  (click)=\"cancela()\">\n                      <i class=\"feather ft-x\"></i> Cancela\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-primary\" >\n                      <i class=\"la la-check\"></i> Confirma\n                    </button>\n                  </div>\n                </form>\n              </ng-container>\n            </m-card>\n          </div>\n        </div>\n      </section>\n\n      <!-- // Basic form layout section end -->\n    </div>\n  </div>\n</div>\n<!-- ////////////////////////////////////////////////////////////////////////////-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/mascaras/mascaras.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/mascaras/mascaras.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\"></div>\n    <div class=\"content-body\">\n      <!-- Basic form layout section start -->\n      <section id=\"basic-form-layouts\">\n        <div class=\"row\" matchHeight=\"card\">\n          <div *blockUI=\"'projectInfo'; message: 'Loading'\" class=\"col-md-11\">\n            <m-card [options]=\"options\">\n              <ng-container mCardHeaderTitle>\n                Cadastro de Máscara do Sistema da Imagem Radiologia\n              </ng-container>\n              <ng-container mCardBody>\n                <form\n                  (ngSubmit)=\"manage(maskForm.value)\"\n                  [formGroup]=\"maskForm\"\n                >\n                  <div class=\"form-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"nome\"> Nome da Máscara * </label>\n                          <input\n                            [ngClass]=\"{\n                              'is-invalid': submitted && f.mascara.errors\n                            }\"\n                            class=\"form-control\"\n                            formControlName=\"mascara\"\n                            id=\"mascara\"\n                            placeholder=\"Nome da Máscara\"\n                            type=\"text\"\n                          />\n                          <small\n                            *ngIf=\"submitted && f.mascara.errors\"\n                            class=\"invalid-feedback\"\n                          >\n                            <div *ngIf=\"f.mascara.errors.required\">\n                              Nome da máscara é requerido\n                            </div>\n                          </small>\n                        </div>\n                      </div>\n                    </div>\n\n                    <h4 class=\"form-section\">\n                      <i class=\"feather ft-map-pin\"></i> POSIÇÃO DO EXAME\n                      (DIREITO, ESQUERDO, COSTAS, FRENTE, ETC)\n                    </h4>\n                    <div formArrayName=\"examesposicao\">\n                      <div\n                        [formGroupName]=\"i\"\n                        *ngFor=\"\n                          let item of maskForm.get('examesposicao')['controls'];\n                          let i = index\n                        \"\n                      >\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                              <label (click)=\"removeItem()\" for=\"exames\">\n                                POSIÇÃO {{ i + 1 }}\n                              </label>\n                              <input [ngClass]=\"{'is-invalid':submitted && f.examesposicao.invalid}\"\n                                class=\"form-control\"\n                                formControlName=\"exames\"\n                                id=\"exames\"\n                                placeholder=\"Posição do Exame\"\n                                type=\"text\"\n                              />\n                              <small\n                                *ngIf=\"submitted && f.examesposicao.invalid\"\n                                class=\"invalid-feedback\"\n                              >\n                                <div>Dê um valor para a posição criada</div>\n                              </small>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <button\n                              (click)=\"removeExames(i)\"\n                              *ngIf=\"i > 0\"\n                              float-right\n                              type=\"button\"\n                            >\n                              X\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <button (click)=\"addExames()\" float-right type=\"button\">\n                          + NovoExame\n                        </button>\n                      </div>\n                    </div>\n                    <hr />\n                    <h4 class=\"form-section\"></h4>\n                    <hr />\n\n                    <h4 class=\"form-section\">\n                        <i class=\"feather ft-map-pin\"></i> DESCRIÇOES DE LAUDOS NORMAIS\n                      </h4>\n                      <div formArrayName=\"examesnormais\">\n                        <div\n                          [formGroupName]=\"i\"\n                          *ngFor=\"\n                            let item of maskForm.get('examesnormais')['controls'];\n                            let i = index\">\n                          <div class=\"row\">\n                            <div class=\"col-md-9\">\n                              <div class=\"form-group\">\n                                <label (click)=\"removeItem()\" for=\"laudosnormais\">\n                                  POSIÇÃO {{ i + 1 }}\n                                </label>\n                                <input [ngClass]=\"{\n                                    'is-invalid':\n                                      submitted && f.examesnormais.invalid\n                                  }\"\n                                  class=\"form-control\"\n                                  formControlName=\"laudosnormais\"\n                                  id=\"laudosnormais\"\n                                  placeholder=\"Descriçao para exame normal\"\n                                  type=\"text\"\n                                />\n                                <small\n                                  *ngIf=\"submitted && f.examesnormais.invalid\"\n                                  class=\"invalid-feedback\"\n                                >\n                                  <div>Descreva uma Normalidade</div>\n                                </small>\n                              </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                              <button\n                                (click)=\"removeExamesNormais(i)\"\n                                *ngIf=\"i > 0\"\n                                float-right\n                                type=\"button\"\n                              >\n                                X\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <button (click)=\"addExamesNormais()\" float-right type=\"button\">\n                            + NovoExame\n                          </button>\n                        </div>\n                      </div>\n                      <hr />\n                      <h4 class=\"form-section\"></h4>\n                      <hr />\n  \n\n                    <h4 class=\"form-section\">\n                      <i class=\"feather ft-list\"></i> LAUDOS\n                    </h4>\n                    <div formArrayName=\"laudossiglas\">\n                      <div\n                        [formGroupName]=\"i\"\n                        *ngFor=\"\n                          let item of maskForm.get('laudossiglas')['controls'];\n                          let i = index\n                        \"\n                      >\n                        <div class=\"row\">\n                          <div class=\"col-md-2\">\n                            <div class=\"form-group\">\n                              <label for=\"laudos\"> Sigla {{ i + 1 }}: </label>\n                              <input\n                                [ngClass]=\"{\n                                  'is-invalid':\n                                    submitted && f.laudossiglas.invalid\n                                }\"\n                                class=\"form-control\"\n                                formControlName=\"laudos\"\n                                id=\"laudos\"\n                                placeholder=\"Defina uma sigla\"\n                                type=\"text\"\n                              />\n                              <small\n                                *ngIf=\"submitted && f.laudossiglas.invalid\"\n                                class=\"invalid-feedback\"\n                              >\n                                <div>\n                                  Os dois campos precisam ser preenchidos\n                                </div>\n                              </small>\n                            </div>\n                          </div>\n                          <div class=\"col-md-7\">\n                            <div class=\"form-group\">\n                              <label for=\"descricao\"> Descrição: </label>\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"descricao\"\n                                id=\"descricao\"\n                                placeholder=\"Defina uma descrição para a sigla \"\n                                type=\"text\"\n                              />\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <button\n                              (click)=\"removeLaudos(i)\"\n                              *ngIf=\"i > 0\"\n                              float-right\n                              type=\"button\"\n                            >\n                              X\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <button (click)=\"addLaudos()\" float-right type=\"button\">\n                          + Novo\n                        </button>\n                      </div>\n                    </div>\n\n                    <hr />\n                    <h4 class=\"form-section\"></h4>\n                    <hr />\n\n                    <h4 class=\"form-section\">\n                      <i class=\"feather ft-list\"></i> DESCRIÇÕES DE LAUDOS\n                    </h4>\n                    <div formArrayName=\"laudosdesc\">\n                      <div\n                        [formGroupName]=\"i\"\n                        *ngFor=\"\n                          let item of maskForm.get('laudosdesc')['controls'];\n                          let i = index\n                        \"\n                      >\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                              <label for=\"laudosmin\">\n                                Descrição {{ i + 1 }}:\n                              </label>\n                              <input\n                                class=\"form-control\"\n                                formControlName=\"laudosmin\"\n                                id=\"laudosmin\"\n                                placeholder=\"Defina um descritivo para o laudo\"\n                                type=\"text\"\n                              />\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <button\n                              (click)=\"removeLaudosDesc(i)\"\n                              *ngIf=\"i > 0\"\n                              float-right\n                              type=\"button\"\n                            >\n                              X\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <button\n                          (click)=\"addLaudosDesc()\"\n                          float-right\n                          type=\"button\"\n                        >\n                          + Novo\n                        </button>\n                      </div>\n                    </div>\n\n                    <div class=\"form-actions\">\n                      <button class=\"btn btn-warning mr-1\" type=\"button\">\n                        <i class=\"feather ft-x\"></i> Cancela\n                      </button>\n                      <button class=\"btn btn-primary\" type=\"submit\">\n                        <i class=\"la la-check\"></i> Confirma\n                      </button>\n                    </div>\n                  </div>\n                </form>\n              </ng-container>\n            </m-card>\n          </div>\n        </div>\n      </section>\n\n      <!-- // Basic form layout section end -->\n    </div>\n  </div>\n</div>\n<!-- ////////////////////////////////////////////////////////////////////////////-->\n");

/***/ }),

/***/ "./src/app/content/cadastros/cad-equipe/cad-equipe.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/cadastros/cad-equipe/cad-equipe.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.is-invalid {\n    border-color: #CACFE7;\n    background-image: none !important;\n}\n\n.div.basicInfoCard {\n    height: 700px;\n}\n\n:host ::ng-deep .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n\n:host ::ng-deep .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n\n:host ::ng-deep .btn-light:not(:disabled):not(.disabled):active {\n    color: unset !important;\n    background-color: unset !important;\n    border-color: #d3d9df !important;\n}\n\n:host ::ng-deep .btn-light:hover:not(.disabled):active {\n    background-color: #e2e6ea !important;\n    border-color: #dae0e5 !important;\n}\n\n:host ::ng-deep .btn-light {\n    color: unset !important;\n    background-color: unset !important;\n    border-color: unset !important;\n}\n\n:host ::ng-deep .bg-primary {\n    background-color: #007bff !important;\n}\n\n:host ::ng-deep .text-white {\n    color: #fff !important;\n}\n\n:host ::ng-deep .custom-day {\n    text-align: center;\n    padding: .185rem .25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n}\n\n:host ::ng-deep .custom-day:active {\n    color: #6d7183 !important;\n    background-color: #fff !important;\n    border-block-color: rgb(2, 117, 216) !important;\n}\n\n.bg-light {\n    background-color: #f8f9fa !important;\n}\n\n:host ::ng-deep .hidden {\n    display: block !important;\n}\n\n.ngb-dp-weekday {\n    color: #17a2b8;\n}\n\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n    line-height: 2rem;\n    text-align: center;\n    font-style: italic;\n}\n\n.ngb-datepicker-month-view {\n    pointer-events: auto;\n}\n\n.small {\n    font-size: 80%;\n    font-weight: 400;\n}\n\n.ngb-dp-day {\n    cursor: pointer !important;\n}\n\n.ngb-dp-month {\n    pointer-events: none;\n}\n\n.btn-light:hover {\n    color: #212529 !important;\n    background-color: #e2e6ea !important;\n    border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view {\n    pointer-events: auto;\n}\n\n.ngb-dp-header {\n    border-bottom: 0;\n    border-radius: .25rem .25rem 0 0;\n    padding-top: .25rem;\n}\n\n.ngb-dp-day,\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n    width: 2rem;\n    height: 2rem;\n}\n\n.custom-day {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n}\n\n.custom-day.focused {\n    background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n}\n\n.custom-day.faded {\n    background-color: rgba(2, 117, 216, 0.5);\n}\n\n:host ::ng-deep .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jYWRhc3Ryb3MvY2FkLWVxdWlwZS9jYWQtZXF1aXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQztJQUNHLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVDO0lBQ0csb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQztJQUNHLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOztBQUVDO0lBQ0csb0NBQW9DO0FBQ3hDOztBQUVDO0lBQ0csc0JBQXNCO0FBQzFCOztBQUVDO0lBQ0csa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQztJQUNHLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVDO0lBQ0cseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUM7SUFDRywrQ0FBK0M7QUFDbkQiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NhZGFzdHJvcy9jYWQtZXF1aXBlL2NhZC1lcXVpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQ0FDRkU3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRpdi5iYXNpY0luZm9DYXJkIHtcbiAgICBoZWlnaHQ6IDcwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4gOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG4gOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbiA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbiA6aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuIDpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbiA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbiA6aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5uZ2ItZHAtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4gOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/content/cadastros/cad-equipe/cad-equipe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/cadastros/cad-equipe/cad-equipe.component.ts ***!
  \**********************************************************************/
/*! exports provided: CadEquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadEquipeComponent", function() { return CadEquipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/dados.service */ "./src/app/_services/dados.service.ts");
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





//import * as FileSaver from 'file-saver';


var CadEquipeComponent = /** @class */ (function () {
    function CadEquipeComponent(formBuilder, auth, alertService, datePipe, dadoService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.dadoService = dadoService;
        this.exames = [];
        this.equipamentos = [];
        this.unidades = [];
        this.sexos = [];
        this.laudos = [];
        this.formValid = false;
        this.model = {};
        this.options = {
            minimize: true,
            reload: false,
            expand: true,
            close: true
        };
        this.submitted = false;
        this.loading = false;
        this.errorMessage = '';
        this.successMessage = '';
    }
    CadEquipeComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Cadastro de Exames',
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
        this.cadEquipeForm();
        this.exames = [
            'ABDOME AGUDO',
            'ANTEBRACO  DIREITO',
            'ANTEBRACO ESQUERDO',
            'ARCO AORTICO',
            'ART ACROMIOCLAVICULAR DIREITO',
            'ART ESCAPULOUMERAL DIREITO',
            'ART ESCAPULOUMERAL ESQUERDO',
            'ART ESTERNOCLAVICULAR DIREITO',
            'ART TEMPOROMANDIBULAR BILAT',
            'ARTICULACAO ACROMIOCLAVICULAR ESQUERDO',
            'ARTICULACAO ESTERNOCLAVICULAR ESQUERDO',
            'ARTICULACOES SACROILIACAS',
            'ARTROGRAFIA',
            'BACIA',
            'BRACO DIREITO',
            'BRACO ESQUERDO',
            'CALCANEO DIREITO',
            'CALCANEO ESQUERDO',
            'CLAVICULA DIREITA',
            'CLAVICULA ESQUERDA',
            'CLISTER OPACO DUPLO CONTRASTE',
            'COLUNA CERVICAL 3 INCIDENCIAS',
            'COLUNA CERVICAL 5P',
            'COLUNA CERVICAL FUNC/DINAMICA',
            'COLUNA DORSAL 2 INCIDENCIAS',
            'COLUNA DORSOLOMBAR',
            'COLUNA LOMBOSSACRA 3 INCIDENCIAS',
            'COLUNA LOMBOSSACRA 5 INCIDENCIAS',
            'COLUNA LOMBOSSACRA FUNC/DINAMICA',
            'COLUNA PARA ESCOLIOSE DINAMICA',
            'COLUNA PARA ESCOLIOSE PA LATERAL',
            'CONDUTOS AUDITIVOS INTERNOS',
            'CORACAO VASOS BASE PA LAT',
            'CORACAO VASOS BASE PA LAT OBLIQ',
            'COSTELA HEMITORAX DIREITO',
            'COSTELA HEMITORAX ESQUERDO',
            'COTOVELO DIREITO',
            'COTOVELO ESQUERDO',
            'COXA DIREITA',
            'COXA ESQUERDA',
            'CRANIO PA LAT',
            'CRANIO PA LAT BRETTON',
            'CRANIO PA LAT OBL BRETTON HIRTZ',
            'ESCANOMETRIA',
            'ESOFAGO',
            'ESQUELETO CRAN COL BACIA MEMBROS',
            'ESTERNO',
            'ESTOMAGO E DUODENO',
            'ESTOMAGO ESOFAGO HIATO DUO EED',
            'ESTUDO DELGADO DUPLO CONTRA',
            'JOELHO DIREITO AP LAT AXIAL',
            'JOELHO DIREITO AP LAT OBL AXIAIS',
            'JOELHO DIREITO AP LATERAL',
            'JOELHO ESQUERD AP LAT OBL AXIAIS',
            'JOELHO ESQUERDO AP LAT AXIAL',
            'JOELHO ESQUERDO AP LATERAL',
            'LARINGE',
            'MAO DIREITA',
            'MAO ESQUERDA',
            'MAO/DEDO DIREITO',
            'MAO/DEDO ESQUERDO',
            'MASTOIDES',
            'MAXILAR INFERIOR',
            'MEDIASTINO',
            'ORBITAS PA LAT OBL HIRTZ',
            'ORELHA DIREITA',
            'ORELHA ESQUERDA',
            'OSSOS DA FACE',
            'PATELA DINAMICA DIREITA',
            'PATELA DINAMICA ESQUERDA',
            'PE DIREITO',
            'PE ESQUERDO',
            'PERNA DIREITA',
            'PERNA ESQUERDA',
            'PUNHO DIREITO AP LAT',
            'PUNHO ESQUERDO AP LAT',
            'QUADRIL DIREITO',
            'QUADRIL ESQUERDO',
            'SACROCOCCIX',
            'SEIOS FACE 3 POSICOES',
            'SEIOS FACE FN MN LAT HIRTZ',
            'SELA TURCA PA LAT BRETTON TOWNE',
            'TORAX 4P',
            'TORAX AP',
            'TORAX APICO LORDOTICA',
            'TORAX PA LAT OBLIQUAS',
            'TORAX PA PERFIL',
            'TORNOZELO DIREITO',
            'TORNOZELO ESQUERDO',
            'TRANSITO MORFOLOGIA DO DELGADO',
        ];
        this.equipamentos = [
            { id: "CR", label: "Computed Radiography" },
            { id: "CT", label: "Computed Tomography" },
            { id: "MR", label: "Magnetic Resonance" },
            { id: "US", label: "Ultrasound" },
            { id: "OT", label: "Other" },
            { id: "ES", label: "Endoscopy" },
            { id: "PT", label: "Positron emission tomography (PET)" },
            { id: "RG", label: "Radiographic imaging (conventional film/screen)" },
            { id: "XA", label: "X-Ray Angiography" },
            { id: "DX", label: "Digital Radiography" },
            { id: "NM", label: "Nuclear Medicine" },
            { id: "MG", label: "Mammography" }
        ];
        this.unidades = [
            { id: "1", label: "Hospital 1" },
            { id: "2", label: "Hospital 2" },
            { id: "3", label: "Hospital 3 " },
        ];
        this.sexos = [
            { id: "M", label: "Masculino" },
            { id: "F", label: "Feminino" },
            { id: "ND", label: "Não Declarar" },
        ];
        this.laudos = [
            { id: "S", label: "Com Laudos" },
            { id: "N", label: "Sem Laudos" }
        ];
    };
    Object.defineProperty(CadEquipeComponent.prototype, "f", {
        get: function () {
            return this.cadEquipe.controls;
        },
        enumerable: true,
        configurable: true
    });
    CadEquipeComponent.prototype.cadEquipeForm = function () {
        this.cadEquipe = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observacao: [''],
            cpf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            niver: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            medico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoexame: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            equipamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hora: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            min: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tecnico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            laudo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(CadEquipeComponent.prototype, "firstName", {
        // Accessing form control using getters
        get: function () {
            return this.cadEquipe.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "cpf", {
        get: function () {
            return this.cadEquipe.get('cpf');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "niver", {
        get: function () {
            return this.cadEquipe.get('niver');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "sexo", {
        get: function () {
            return this.cadEquipe.get('sexo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "medico", {
        // Accessing form control using getters
        get: function () {
            return this.cadEquipe.get('medico');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "equipamento", {
        get: function () {
            return this.cadEquipe.get('equipamento');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "data", {
        // Accessing form control using getters
        get: function () {
            return this.cadEquipe.get('data');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "hora", {
        get: function () {
            return this.cadEquipe.get('hora');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "min", {
        get: function () {
            return this.cadEquipe.get('min');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "tecnico", {
        get: function () {
            return this.cadEquipe.get('tecnico');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "descricao", {
        get: function () {
            return this.cadEquipe.get('descricao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "unidade", {
        get: function () {
            return this.cadEquipe.get('mobileNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "tipoexame", {
        get: function () {
            return this.cadEquipe.get('tipoexame');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadEquipeComponent.prototype, "laudo", {
        get: function () {
            return this.cadEquipe.get('laudo');
        },
        enumerable: true,
        configurable: true
    });
    CadEquipeComponent.prototype.resetForm = function () {
        this.cadEquipe.reset();
    };
    CadEquipeComponent.prototype.changeTipoexame = function (e) {
        console.log('eee', e);
        this.tipoexame.setValue(e.target.value, {
            onlySelf: true
        });
    };
    CadEquipeComponent.prototype.oncadEquipeSubmit = function (dados) {
        var _this = this;
        console.log(this.formValid);
        dados.status = 'Não Baixado';
        var niver = new Date(this.cadEquipe.value.niver);
        dados.horaConsulta = this.cadEquipe.value.hora + this.cadEquipe.value.min + '00';
        dados.meunr = '1.2.6965.20173498.' + this.datePipe.transform(this.cadEquipe.value.data, "yyyyMMddHHmmss") + "." + this.cadEquipe.value.unidade +
            this.datePipe.transform(this.cadEquipe.value.data, "sss");
        var anoNiver = niver.getFullYear();
        var mesNiver = niver.getMonth() + 1;
        var diaNiver = niver.getDay();
        var idade = this.idade(anoNiver, mesNiver, diaNiver);
        dados.idade = idade;
        this.submitted = true;
        if (this.cadEquipe.invalid) {
            console.log("formulario nao é valido", this.cadEquipe.value);
            return;
        }
        else {
            this.formValid = true;
            // console.log("Idade da pessoa ", dados )
            this.dadoService.create(dados).then(function () {
                _this.alertService.error('Dados Inseridos', true);
                //  window.location.reload();
                _this.submitted = true;
                _this.resetForm();
            });
        }
    };
    CadEquipeComponent.prototype.reloadProjectInfo = function () {
        var _this = this;
        this.blockUIProjectInfo.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectInfo.stop();
        }, 2500);
    };
    CadEquipeComponent.prototype.cancela = function () {
        this.cadEquipe.reset();
    };
    CadEquipeComponent.prototype.reloadUserProfile = function () {
        var _this = this;
        this.blockUIUserProfile.start('Loading..');
        setTimeout(function () {
            _this.blockUIUserProfile.stop();
        }, 2500);
    };
    CadEquipeComponent.prototype.idade = function (ano_aniversario, mes_aniversario, dia_aniversario) {
        var d = new Date;
        var ano_atual = d.getFullYear();
        var mes_atual = d.getMonth() + 1;
        var dia_atual = d.getDate();
        var quantos_anos = ano_atual - ano_aniversario;
        console.log('data que tratamos ', ano_aniversario, mes_aniversario, dia_aniversario);
        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            quantos_anos - 1;
        }
        return quantos_anos < 0 ? 0 : quantos_anos;
    };
    CadEquipeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f', { read: true, static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CadEquipeComponent.prototype, "userProfileForm", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectInfo'),
        __metadata("design:type", Object)
    ], CadEquipeComponent.prototype, "blockUIProjectInfo", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('userProfile'),
        __metadata("design:type", Object)
    ], CadEquipeComponent.prototype, "blockUIUserProfile", void 0);
    CadEquipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cad-equipe',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cad-equipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/cad-equipe/cad-equipe.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cad-equipe.component.css */ "./src/app/content/cadastros/cad-equipe/cad-equipe.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"]])
    ], CadEquipeComponent);
    return CadEquipeComponent;
}());



/***/ }),

/***/ "./src/app/content/cadastros/cadastros.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/content/cadastros/cadastros.module.ts ***!
  \*******************************************************/
/*! exports provided: CadastrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrosModule", function() { return CadastrosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/general/card/card.module */ "./src/app/content/partials/general/card/card.module.ts");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "./src/app/_layout/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_layout/blockui/block-template.component */ "./src/app/_layout/blockui/block-template.component.ts");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../partials/general/match-height/match-height.module */ "./src/app/content/partials/general/match-height/match-height.module.ts");
/* harmony import */ var _cad_equipe_cad_equipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cad-equipe/cad-equipe.component */ "./src/app/content/cadastros/cad-equipe/cad-equipe.component.ts");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-material/material.module */ "./src/app/app-material/material.module.ts");
/* harmony import */ var _mascaras_mascaras_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mascaras/mascaras.component */ "./src/app/content/cadastros/mascaras/mascaras.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var CadastrosModule = /** @class */ (function () {
    function CadastrosModule() {
    }
    CadastrosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cad_equipe_cad_equipe_component__WEBPACK_IMPORTED_MODULE_10__["CadEquipeComponent"], _mascaras_mascaras_component__WEBPACK_IMPORTED_MODULE_12__["MascarasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_9__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__["BlockTemplateComponent"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'exames',
                        component: _cad_equipe_cad_equipe_component__WEBPACK_IMPORTED_MODULE_10__["CadEquipeComponent"]
                    },
                    {
                        path: 'mascaras',
                        component: _mascaras_mascaras_component__WEBPACK_IMPORTED_MODULE_12__["MascarasComponent"]
                    },
                ])
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CadastrosModule);
    return CadastrosModule;
}());



/***/ }),

/***/ "./src/app/content/cadastros/mascaras/mascaras.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content/cadastros/mascaras/mascaras.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n    margin-top: 1.5rem;\n    margin-bottom: 0rem;\n    border: 10;\n    border-top: 3px solid rgba(0, 0, 0, 0);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jYWRhc3Ryb3MvbWFzY2FyYXMvbWFzY2FyYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY2FkYXN0cm9zL21hc2NhcmFzL21hc2NhcmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgYm9yZGVyOiAxMDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/content/cadastros/mascaras/mascaras.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/cadastros/mascaras/mascaras.component.ts ***!
  \******************************************************************/
/*! exports provided: MascarasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MascarasComponent", function() { return MascarasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_cirurgias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/cirurgias.service */ "./src/app/_services/cirurgias.service.ts");
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



var MascarasComponent = /** @class */ (function () {
    function MascarasComponent(fb, exameService) {
        this.fb = fb;
        this.exameService = exameService;
        this.submitted = false;
        this.dados = [];
        this.final = {};
    }
    MascarasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cadMaskForm();
        this.examesposicao = this.maskForm.get('examesposicao');
        var exames = [{
                exames: 'ESQUERDO',
                btncolor: 'primary'
            },
            {
                exames: 'DIREITO',
                btncolor: 'primary'
            },
            {
                exames: 'FRONTAL',
                btncolor: 'primary'
            }];
        exames.forEach(function (dados) {
            var cont = 0;
            var res = [];
            res.push(dados);
            _this.dados = res;
            console.log(dados);
        });
        //this.examesposicao.push({this.dados})
        console.log(this.examesposicao);
    };
    Object.defineProperty(MascarasComponent.prototype, "f", {
        get: function () {
            return this.maskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    MascarasComponent.prototype.cadMaskForm = function () {
        this.maskForm = this.fb.group({
            mascara: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            examesposicao: this.fb.array([
                this.initExamesFields()
            ]),
            examesnormais: this.fb.array([
                this.initExamesNormaisFields()
            ]),
            laudossiglas: this.fb.array([
                this.initLaudosFields()
            ]),
            laudosdesc: this.fb.array([
                this.initLaudosDescFields()
            ])
        });
    };
    MascarasComponent.prototype.editMascara = function () {
        var exames = [
            {
                exames: 'DIREITO',
                btncolor: 'primary'
            },
            {
                exames: 'ESQUERDO',
                btncolor: 'primary'
            }
        ];
        exames.forEach(function (dados) {
            console.log(dados);
        });
        this.examesposicao.patchValue(exames);
    };
    MascarasComponent.prototype.initExamesFields = function () {
        return this.fb.group({
            exames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            btncolor: ['primary']
        });
    };
    MascarasComponent.prototype.addExames = function () {
        console.log('aqui');
        this.examesposicao = this.maskForm.get('examesposicao');
        console.log('exames', this.examesposicao);
        this.examesposicao.push(this.initExamesFields());
    };
    MascarasComponent.prototype.removeExames = function (i) {
        this.examesposicao = this.maskForm.get('examesposicao');
        this.examesposicao.removeAt(i);
    };
    MascarasComponent.prototype.removeExamesNormais = function (i) {
        this.examesnormais = this.maskForm.get('examesnormais');
        this.examesnormais.removeAt(i);
    };
    MascarasComponent.prototype.addExamesNormais = function () {
        console.log('aqui');
        this.examesnormais = this.maskForm.get('examesnormais');
        console.log('exames', this.examesposicao);
        this.examesnormais.push(this.initExamesNormaisFields());
    };
    MascarasComponent.prototype.initExamesNormaisFields = function () {
        return this.fb.group({
            laudosnormais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            btncolor: ['primary']
        });
    };
    MascarasComponent.prototype.initLaudosFields = function () {
        return this.fb.group({
            laudos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            btncolor: ['primary']
        });
    };
    MascarasComponent.prototype.addLaudos = function () {
        this.laudossiglas = this.maskForm.get('laudossiglas');
        this.laudossiglas.push(this.initLaudosFields());
    };
    MascarasComponent.prototype.removeLaudos = function (i) {
        this.laudossiglas = this.maskForm.get('laudossiglas');
        this.laudossiglas.removeAt(i);
    };
    MascarasComponent.prototype.initLaudosDescFields = function () {
        return this.fb.group({
            laudosmin: [''],
            btncolor: ['primary']
        });
    };
    MascarasComponent.prototype.addLaudosDesc = function () {
        this.laudosdesc = this.maskForm.get('laudosdesc');
        this.laudosdesc.push(this.initLaudosDescFields());
    };
    MascarasComponent.prototype.removeLaudosDesc = function (i) {
        this.laudosdesc = this.maskForm.get('laudosdesc');
        this.laudosdesc.removeAt(i);
    };
    MascarasComponent.prototype.manage = function (val) {
        var _this = this;
        var laudosnorm = {
            btncolor: 'primary',
            descricao: 'NORMAL'
        };
        this.submitted = true;
        if (!this.maskForm.valid) {
            console.log("formulario Inválido", this.f.exames.invalid);
            return;
        }
        else {
            this.final = {
                mascara: val.mascara,
                exames: val.examesposicao,
                examesnormais: val.examesnormais,
                laudosnorm: laudosnorm,
                laudos: val.laudossiglas,
                laudosmin: val.laudosdesc
            };
            console.log('objetofinal', this.final);
            this.exameService.createMascara(val.mascara, this.final).then(function (res) {
                console.log('resultado', res);
                _this.maskForm.reset();
            });
        }
    };
    MascarasComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: src_app_services_cirurgias_service__WEBPACK_IMPORTED_MODULE_2__["CirurgiasService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f', { read: true, static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], MascarasComponent.prototype, "userProfileForm", void 0);
    MascarasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mascaras',
            template: __importDefault(__webpack_require__(/*! raw-loader!./mascaras.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/cadastros/mascaras/mascaras.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./mascaras.component.css */ "./src/app/content/cadastros/mascaras/mascaras.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_cirurgias_service__WEBPACK_IMPORTED_MODULE_2__["CirurgiasService"]])
    ], MascarasComponent);
    return MascarasComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-content-cadastros-cadastros-module.js.map