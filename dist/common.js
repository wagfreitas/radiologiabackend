(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_services/cirurgias.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/cirurgias.service.ts ***!
  \************************************************/
/*! exports provided: CirurgiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirurgiasService", function() { return CirurgiasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var CirurgiasService = /** @class */ (function () {
    function CirurgiasService(afs, db) {
        this.afs = afs;
        this.db = db;
        this.regCol = this.afs.collection('registros');
        this.exaCol = this.afs.collection('exames');
    }
    CirurgiasService.prototype.insert = function (cirurgia) {
        this.regCol.add(JSON.parse(JSON.stringify(cirurgia))).then(function (res) {
            console.log('resultado recebido', res);
            //  this.showToast('Registros Incluidos com Sucesso')
        });
    };
    CirurgiasService.prototype.update = function (cirurgia, key) {
        this.regCol.doc('key').set(cirurgia).then(function (res) {
            console.log('update feito', res);
        }).catch(function (error) {
            console.error(error);
        });
    };
    CirurgiasService.prototype.getAll = function () {
        return this.afs.collection('registros')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (doc) {
                var data = doc.payload.doc.data();
                return { data: data };
            });
        }));
    };
    CirurgiasService.prototype.getByName = function (nomeMascara) {
        console.log(nomeMascara);
        return this.afs.collection('mascaras').doc(nomeMascara).valueChanges();
    };
    CirurgiasService.prototype.createMascara = function (doc, record) {
        return this.afs.collection('mascaras').doc(doc).set(JSON.parse(JSON.stringify(Object.assign({}, record))));
    };
    CirurgiasService.prototype.editMascara = function (doc, record) {
        return this.afs.collection('mascaras').doc(doc).update(JSON.parse(JSON.stringify(Object.assign({}, record))));
    };
    CirurgiasService.prototype.deleteMascara = function (doc) {
        console.log(doc);
        return this.afs.collection('mascaras').doc(doc).delete();
    };
    CirurgiasService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    CirurgiasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CirurgiasService);
    return CirurgiasService;
}());



/***/ }),

/***/ "./src/app/_services/dados.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/dados.service.ts ***!
  \********************************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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


 // Firebase modules for Database, Data list and Single object


var DadosService = /** @class */ (function () {
    function DadosService(afs, db) {
        this.afs = afs;
        this.db = db;
        this.dbPath = '/exames';
        this.examesRef = afs.collection(this.dbPath);
    }
    DadosService.prototype.getAll = function () {
        this.regCol = this.afs.collection('exames');
        this.items = this.regCol.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
        return this.items;
    };
    DadosService.prototype.gravarExames = function (exame) {
        console.log(Object.assign({}, exame));
        this.regCol.add(JSON.parse(JSON.stringify(exame))).then(function (res) {
            console.log('resultado recebido', res);
            return res;
            //  this.showToast('Registros Incluidos com Sucesso')
        });
    };
    DadosService.prototype.create = function (exames) {
        return this.examesRef.add(__assign({}, exames));
    };
    // Fetch Single exame Object
    DadosService.prototype.GetExame = function (id) {
        this.exameRef = this.db.object('exames/' + id);
        return this.exameRef;
    };
    DadosService.prototype.updateExame = function (id) {
        this.afs.collection(this.dbPath).doc(id).set({
            status: "Baixado"
        }, { merge: true });
    };
    DadosService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    DadosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], DadosService);
    return DadosService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map