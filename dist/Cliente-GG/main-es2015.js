(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alejandro/GlitchGaming/Front-GlitchGaming/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HomeComponent_div_341_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_341_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_341_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_341_small_1_Template, 2, 0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_341_small_2_Template, 2, 0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.homeContact.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.homeContact.get("email").hasError("email"));
} }
function HomeComponent_div_346_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_346_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_346_small_1_Template, 2, 0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.homeContact.get("nombre").hasError("required"));
} }
function HomeComponent_div_355_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El asunto es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_355_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_355_small_1_Template, 2, 0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.homeContact.get("asunto").hasError("required"));
} }
function HomeComponent_div_360_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El mensaje es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_360_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_360_small_1_Template, 2, 0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.homeContact.get("mensaje").hasError("required"));
} }
class HomeComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamation"];
        this.enviarCorreo = () => {
            if (this.homeContact.valid) {
                //Enviar 
                console.log('Valido');
                this.homeContact.reset();
            }
            else {
                console.log('No valido');
            }
        };
        this.homeContact = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            asunto: ['Quiero ser patrocinador', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            mensaje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.inscripciones = 1;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 366, vars: 23, consts: [["onload", "comprobarMedia()"], [1, "row", "m-0", "my-2", "justify-content-center"], ["id", "carousel", 1, "col-11", "col-md-8", "w-50"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/img/carrousel/BANNER_GG_YOUTUBE.png", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "m-0", "p-0"], [1, "col-12", "my-4"], [1, "separator-title", "font-Ethnocentric"], [1, "row", "m-0", "p-0", "justify-content-between"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-lol", "background-lol"], [1, "col-12"], [1, "text-center"], ["src", "../../../assets/juegos/LEAGUE OF LEGENDS.png", "alt", "LEAGUE OF LEGENDS LOGO", 1, "img-200px"], [1, "col-12", "my-4", "text-center"], [1, "m-0"], [1, "col-6", "my-4", "text-center"], [1, "d-block"], [3, "icon"], [1, "btn", "background-btn-lol", "text-white", "w-50", "p-2", "h4", "hover-btn-lol"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-valorant", "background-valorant"], ["src", "../../../assets/juegos/VALORANT.png", "alt", "VALORANT LOGO", 1, "img-200px"], [1, "btn", "background-btn-valorant", "text-white", "w-50", "p-2", "h4", "hover-btn-valorant"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-cod", "background-cod"], ["src", "../../../assets/juegos/CALL OF DUTY.png", "alt", "CALL OF DUTY LOGO", 1, "img-200px"], [1, "btn", "background-btn-cod", "text-white", "w-50", "p-2", "h4", "hover-btn-cod"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-fifa", "background-fifa"], ["src", "../../../assets/juegos/FIFA 21.png", "alt", "FIFA 21 LOGO", 1, "img-200px"], [1, "btn", "background-btn-fifa", "text-white", "w-50", "p-2", "h4", "hover-btn-fifa"], ["src", "../../../assets/juegos/LEAGUE OF LEGENDS.png", "alt", "LEAGUE OF LEGENDS LOGO", 1, "img-100px"], [1, "col-2"], [1, "col-10"], [1, "m-0", "text-start"], ["src", "../../../assets/juegos/VALORANT.png", "alt", "VALORANT LOGO", 1, "img-100px"], ["src", "../../../assets/juegos/CALL OF DUTY.png", "alt", "CALL OF DUTY LOGO", 1, "img-100px"], ["src", "../../../assets/juegos/FIFA 21.png", "alt", "FIFA 21 LOGO", 1, "img-100px"], ["id", "noticias-valorant", 1, "row", "m-0", "p-0"], [1, "col-12", "p-0"], [1, "m-0", "separator-title-valorant-news", "text-left", "font-Ethnocentric"], [1, "row", "my-2", "p-0", "justify-content-between"], [1, "col-12", "col-md-5", "p-4"], [1, "col-12", "col-md-5", "align-self-center", "p-4"], ["src", "../../../assets/noticias/VALORANT NOTICIAS.jpeg", 1, "w-100", "img-fluid"], ["id", "noticias-lol", 1, "row", "m-0", "p-0"], [1, "m-0", "separator-title-lol-news", "text-left", "font-Ethnocentric"], ["id", "lol_news_img", 1, "col-12", "col-md-5", "align-self-center", "p-4"], ["src", "../../../assets/noticias/LOL NOTICIAS.jpeg", 1, "w-100", "img-fluid"], ["id", "lol_news_description", 1, "col-12", "col-md-5", "p-4"], ["id", "lol_news_after", 1, "col-12", "col-md-5", "align-self-center", "p-4"], [1, "col-12", "col-md-5"], [1, "row", "m0", "p-0"], [1, "my-2", "text-center"], [1, "p-3", "m-3", 3, "formGroup", "ngSubmit"], [1, "py-2"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", "placeholder", "Introduzca su correo electr\u00F3nico", 1, "form-control", "m-auto", "my-2"], [4, "ngIf"], ["type", "text", "formControlName", "nombre", "name", "nombre", "id", "nombre", "placeholder", "Introduzca su nombre", 1, "form-control", "m-auto", "my-2"], ["formControlName", "asunto", "id", "asunto", 1, "form-control"], ["rows", "5", "formControlName", "mensaje", "id", "mensaje", "placeholder", "Escriba aqui el mensaje...", 1, "form-control"], [1, "py-2", "text-center"], [1, "btn", "btn-enviar", "w-25", 3, "disabled"], ["class", "alert-danger px-1", 4, "ngIf"], [1, "alert-danger", "px-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cabecera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00DALTIMOS TORNEOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Prize Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "100\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0Fin de inscripciones\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "15 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "N\u00FAmero de equipos inscritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u00A0Comienzo del torneo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "16 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "INSCRIBETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Prize Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "100\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u00A0Fin de inscripciones\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "15 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "N\u00FAmero de equipos inscritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\u00A0Comienzo del torneo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "16 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "INSCRIBETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Prize Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "100\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\u00A0Fin de inscripciones\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "15 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "N\u00FAmero de equipos inscritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "\u00A0Comienzo del torneo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "16 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "INSCRIBETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Prize Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "100\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "\u00A0Fin de inscripciones\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "15 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "N\u00FAmero de equipos inscritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "\u00A0Comienzo del torneo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "16 Mayo 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "INSCRIBETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "TOP JUGADORES / EQUIPOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "\u00DALTIMAS NOTICIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "VALORANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "\u00DAltima Hora. Camikaze readmitido en el equipo de Valorant de Glitch Gaming debido a que ha pedido disculpas al fundador Kiimpy, tras el env\u00EDo de un mensaje ofensivo. El jugador est\u00E1 en su momento cr\u00EDtico, ya que si continua haciendo el gamberro, ser\u00E1 expulsado permanentemente del club de eSports.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "LEAGUE OF LEGENDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](321, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "Kiimpy se pone a mandos de Syndra, pero no consigue nada, \u00BFpor que? Dicen por ah\u00ED que el jungla del equipo Marpe, le hace mas KS con su Nocturne \"Terror helado\" que un Maestro Yi dandole a la Q. En su ulti esconde m\u00E1s da\u00F1o que la ulti del Mordekaiser. La estela de su Q le da m\u00E1s velocidad de movimiento que el ca\u00F1on de Jinx, es una bala.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](325, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](328, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "\u00BFTienes dudas o quieres ser patrocinador?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "form", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_336_listener() { return ctx.enviarCorreo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](340, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](341, HomeComponent_div_341_Template, 3, 2, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](346, HomeComponent_div_346_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](348, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "select", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "Quiero ser patrocinador");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](354, "Tengo dudas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](355, HomeComponent_div_355_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "textarea", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](360, HomeComponent_div_360_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](365, " Otros enlaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.inscripciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faExclamation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.homeContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeContact.get("email").errors && ctx.homeContact.get("email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeContact.get("nombre").errors && ctx.homeContact.get("nombre").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeContact.get("asunto").errors && ctx.homeContact.get("asunto").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeContact.get("mensaje").errors && ctx.homeContact.get("mensaje").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.homeContact.invalid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".separator-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.separator-title[_ngcontent-%COMP%]::before, .separator-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #fff;\n}\n\n.separator-title[_ngcontent-%COMP%]:not(:empty)::before {\n  margin-right: 10px;\n}\n\n.separator-title[_ngcontent-%COMP%]:not(:empty)::after {\n  margin-left: 10px;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #f34453;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]::before, .separator-title-valorant-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #f34453;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]::before {\n  margin-right: 10px;\n  left: 0;\n  max-width: 10%;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]:not(:empty)::after {\n  margin-left: 10px;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #7d5c1c;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]::before, .separator-title-lol-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #7d5c1c;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]:not(:empty)::before {\n  margin-right: 10px;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]::after {\n  margin-left: 10px;\n  right: 0;\n  max-width: 10%;\n}\n\n.with-linear-gradient[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(323deg, black 21%, aqua) 1;\n     border-image: linear-gradient(323deg, black 21%, aqua) 1;\n}\n\n.with-linear-gradient-lol[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n     border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n}\n\n.background-lol[_ngcontent-%COMP%] {\n  background: #14212f;\n  background: linear-gradient(45deg, #14212f 0%, #32250c 100%);\n}\n\n.background-btn-lol[_ngcontent-%COMP%] {\n  background: #7d5c1c;\n  background: linear-gradient(41deg, #7d5c1c 0%, #8c671f 100%);\n}\n\n.hover-btn-lol[_ngcontent-%COMP%]:hover {\n  background: #3b2c0e;\n  color: white;\n}\n\n.with-linear-gradient-valorant[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n     border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n}\n\n.background-valorant[_ngcontent-%COMP%] {\n  background: #19080a;\n  background: linear-gradient(238deg, #19080a 0%, #391014 100%);\n}\n\n.background-btn-valorant[_ngcontent-%COMP%] {\n  background: #af323d;\n  background: linear-gradient(41deg, #af323d 0%, #b1323d 100%);\n}\n\n.hover-btn-valorant[_ngcontent-%COMP%]:hover {\n  background: #732128;\n  color: white;\n}\n\n.with-linear-gradient-cod[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n     border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n}\n\n.background-cod[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(238deg, #232e2f 0%, #545958 51%, #232e2f 100%);\n}\n\n.background-btn-cod[_ngcontent-%COMP%] {\n  background: #4b6365;\n  background: linear-gradient(41deg, #4b6365 0%, #4e6669 100%);\n}\n\n.hover-btn-cod[_ngcontent-%COMP%]:hover {\n  background: #2f3d3e;\n  color: white;\n}\n\n.with-linear-gradient-fifa[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n     border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n}\n\n.background-fifa[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(321deg, #232e2f 0%, #251442 50%, #3a0b4b 100%);\n}\n\n.background-btn-fifa[_ngcontent-%COMP%] {\n  background: #4e48a8;\n  background: linear-gradient(41deg, #4e48a8 0%, #4069a2 50%, #5640a7 100%);\n}\n\n.hover-btn-fifa[_ngcontent-%COMP%]:hover {\n  background: #323c73;\n  color: white;\n}\n\n.img-200px[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.img-100px[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.btn-enviar[_ngcontent-%COMP%] {\n  background: linear-gradient(41deg, #88008a 0%, #2ca6a7 100%);\n  color: white;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(41deg, #440045 0%, #1b6566 100%);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBOztFQUVJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBOztFQUVJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7O0VBRUksV0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtLQUFBLHdEQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0RBQUE7S0FBQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7S0FBQSw2REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw2REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEVBQUE7S0FBQSx5RUFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBU0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEVBQUE7S0FBQSx5RUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSx5RUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0FBTko7O0FBU0E7RUFDSSw0REFBQTtFQUNBLFlBQUE7QUFOSjs7QUFRQTtFQUNJLDREQUFBO0VBQ0EsWUFBQTtBQUxKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NFUEFSQURPUiBUSVRVTE9cbi5zZXBhcmF0b3ItdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGU6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlOm5vdCg6ZW1wdHkpOjpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNlcGFyYXRvci10aXRsZTpub3QoOmVtcHR5KTo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vL1NlcGFyYWRvciBWQUxPUkFOVFxuLnNlcGFyYXRvci10aXRsZS12YWxvcmFudC1uZXdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjQzLDY4LDgzLDEpO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLXZhbG9yYW50LW5ld3M6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGUtdmFsb3JhbnQtbmV3czo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjQzLDY4LDgzLDEpO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLXZhbG9yYW50LW5ld3M6OmJlZm9yZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtdmFsb3JhbnQtbmV3czpub3QoOmVtcHR5KTo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vL1NlcGFyYWRvciBMT0xcbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDEyNSw5MiwyOCk7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTI1LDkyLDI4KTtcbn1cblxuLnNlcGFyYXRvci10aXRsZS1sb2wtbmV3czpub3QoOmVtcHR5KTo6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmFmdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDEwJTtcbn1cblxuLndpdGgtbGluZWFyLWdyYWRpZW50IHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyM2RlZywgcmdiYSgwLDAsMCwxKSAyMSUsIHJnYmEoMCwyNTUsMjU1LDEpKTE7XG59XG5cbi8vTGVhZ3VlIG9mIExlZ2VuZHNcbi53aXRoLWxpbmVhci1ncmFkaWVudC1sb2wge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzIzZGVnLCByZ2JhKDE5NCwxNDMsNDQsMSkgMCUsIHJnYmEoODMsOTEsMjUwLDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLWxvbHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsMzMsNDcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyMCwzMyw0NywxKSAwJSwgcmdiYSg1MCwzNywxMiwxKSAxMDAlKTtcbn1cblxuLmJhY2tncm91bmQtYnRuLWxvbHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI1LDkyLDI4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTI1LDkyLDI4LDEpIDAlLCByZ2JhKDE0MCwxMDMsMzEsMSkgMTAwJSk7XG59XG4uaG92ZXItYnRuLWxvbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTksNDQsMTQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy9WQUxPUkFOVFxuLndpdGgtbGluZWFyLWdyYWRpZW50LXZhbG9yYW50IHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgcmdiYSgyNDMsNjgsODMsMSkgMTUlLCByZ2JhKDgwLDI1LDI5LDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLXZhbG9yYW50e1xuICAgIGJhY2tncm91bmQ6IHJnYigyNSw4LDEwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjM4ZGVnLCByZ2JhKDI1LDgsMTAsMSkgMCUsIHJnYmEoNTcsMTYsMjAsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi12YWxvcmFudHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTc1LDUwLDYxKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTc1LDUwLDYxLDEpIDAlLCByZ2JhKDE3Nyw1MCw2MSwxKSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ0bi12YWxvcmFudDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTE1LDMzLDQwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8vQ2FsbCBPZiBEdXR5XG4ud2l0aC1saW5lYXItZ3JhZGllbnQtY29kIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgcmdiYSgxMTQsMTUyLDE1NiwxKSAwJSwgcmdiYSgyMTYsMjMxLDIzNCwxKSA1MCUsIHJnYmEoMTE0LDE1MiwxNTYsMSkpMTtcbn1cblxuLmJhY2tncm91bmQtY29ke1xuICAgIGJhY2tncm91bmQ6IHJnYigzNSw0Niw0Nyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOGRlZywgcmdiYSgzNSw0Niw0NywxKSAwJSwgcmdiYSg4NCw4OSw4OCwxKSA1MSUsIHJnYmEoMzUsNDYsNDcsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi1jb2R7XG4gICAgYmFja2dyb3VuZDogcmdiKDc1LDk5LDEwMSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDc1LDk5LDEwMSwxKSAwJSwgcmdiYSg3OCwxMDIsMTA1LDEpIDEwMCUpO1xufVxuXG4uaG92ZXItYnRuLWNvZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDcsNjEsNjIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vL0ZJRkFcbi53aXRoLWxpbmVhci1ncmFkaWVudC1maWZhIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgcmdiYSg4NiwxNTMsMjI0LDEpIDAlLCByZ2JhKDExMCwxMDEsMjM3LDEpIDQ2JSwgcmdiYSgxOTIsMzIsMjUwLDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLWZpZmF7XG4gICAgYmFja2dyb3VuZDogcmdiKDM1LDQ2LDQ3KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCByZ2JhKDM1LDQ2LDQ3LDEpIDAlLCByZ2JhKDM3LDIwLDY2LDEpIDUwJSwgcmdiYSg1OCwxMSw3NSwxKSAxMDAlKTtcbn1cblxuLmJhY2tncm91bmQtYnRuLWZpZmF7XG4gICAgYmFja2dyb3VuZDogcmdiKDc4LDcyLDE2OCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDc4LDcyLDE2OCwxKSAwJSwgcmdiYSg2NCwxMDUsMTYyLDEpIDUwJSwgcmdiYSg4Niw2NCwxNjcsMSkgMTAwJSk7XG59XG5cbi5ob3Zlci1idG4tZmlmYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTAsNjAsMTE1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWctMjAwcHh7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaW1nLTEwMHB4e1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmJ0bi1lbnZpYXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDEzNiwwLDEzOCwxKSAwJSwgcmdiYSg0NCwxNjYsMTY3LDEpIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4tZW52aWFyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MWRlZywgcmdiYSg2OCwwLDY5LDEpIDAlLCByZ2JhKDI3LDEwMSwxMDIsMSkgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
function comprobarMediaNoticias() {
    var pos1 = document.getElementById('lol_news_img');
    var posAux = document.getElementById('lol_news_after');
    if (window.matchMedia("(min-width: 768px)").matches) {
        console.log('Mas de 768px');
        pos1.append(posAux.firstElementChild);
        pos1.classList.remove('d-none');
        posAux.classList.add('d-none');
    }
    else {
        console.log('Menos de 768px');
        posAux.appendChild(pos1.firstChild);
        pos1.classList.add('d-none');
        posAux.classList.remove('d-none');
    }
}
window.addEventListener('load', comprobarMediaNoticias);
window.addEventListener('resize', comprobarMediaNoticias);


/***/ }),

/***/ "SfOs":
/*!***********************************************************!*\
  !*** ./src/app/components/cabecera/cabecera.component.ts ***!
  \***********************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class CabeceraComponent {
    constructor() {
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
        //Funciones para el menu
        this.desplegarMenu = () => {
            document.getElementById('lista').style.display = "block";
            document.getElementById('menu-icon-open').classList.remove('visible');
            document.getElementById('menu-icon-open').classList.add('oculto');
            document.getElementById('menu-icon-close').classList.remove('oculto');
            document.getElementById('menu-icon-close').classList.add('visible');
            document.getElementById('lista').classList.remove('contraer');
            document.getElementById('lista').classList.add('desplegar');
        };
        this.contraerMenu = () => {
            document.getElementById('lista').style.display = "none";
            document.getElementById('menu-icon-close').classList.remove('visible');
            document.getElementById('menu-icon-close').classList.add('oculto');
            document.getElementById('menu-icon-open').classList.remove('oculto');
            document.getElementById('menu-icon-open').classList.add('visible');
            document.getElementById('lista').classList.remove('desplegar');
            document.getElementById('lista').classList.add('contraer');
        };
    }
    ngOnInit() {
    }
}
CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) { return new (t || CabeceraComponent)(); };
CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CabeceraComponent, selectors: [["app-cabecera"]], decls: 27, vars: 1, consts: [[1, "row", "m-0", "sticky-top", "background-black", 2, "height", "60px"], [1, "col-2", "align-self-center"], ["href", "/", 1, "navbar-brand"], ["src", "../../assets/img/LOGO_GG_negro.png", "alt", "GG_Logo", 1, "img-fluid", 2, "width", "50px"], ["id", "padre", 1, "col-10", "align-self-center", "d-flex", "justify-content-end"], ["id", "menu-icon", 1, "align-self-center"], ["id", "menu-icon-open", 1, "btn", 3, "click"], ["src", "../../../assets/img/menu-icon2.png", 2, "width", "25px", "height", "25px"], ["id", "menu-icon-close", 1, "btn", 3, "click"], ["src", "../../../assets/img/cerrar-menu.png", 2, "width", "25px", "height", "25px"], ["id", "lista", 1, "m-0", "list-inline", "font-Ethnocentric"], [1, "my-3"], ["routerLink", "/torneos", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], ["href", "/juegos", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-azul"], ["role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], ["href", "/glitchgaming", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-azul"], ["href", "#", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], [3, "icon"]], template: function CabeceraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CabeceraComponent_Template_button_click_6_listener() { return ctx.desplegarMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CabeceraComponent_Template_button_click_8_listener() { return ctx.contraerMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Torneos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Glitch Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00A0Mi cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".sticky-top[_ngcontent-%COMP%] {\n  position: -moz-sticky !important;\n  position: -o-sticky !important;\n  position: -ms-sticky !important;\n  position: sticky !important;\n}\n\n.text-normal[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.hover-rosa[_ngcontent-%COMP%]:hover {\n  color: #F900FF !important;\n}\n\n.hover-azul[_ngcontent-%COMP%]:hover {\n  color: #3EFEFF !important;\n}\n\n.media-pc[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%]   #menu-icon-open[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.media-pc[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%]   #menu-icon-close[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.media-pc[_ngcontent-%COMP%]   #lista[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.media-movil[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.media-movil[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%]   #menu-icon-close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.media-movil[_ngcontent-%COMP%]   #lista[_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n#lista.desplegar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0% !important;\n  top: 60px;\n  background-color: #000;\n  height: 100vh;\n  transition: all 1s ease-in;\n}\n\n#lista.contraer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(0% - 200px) !important;\n  top: 60px;\n  background-color: #000;\n  height: 100vh;\n  transition: all 1s ease-out;\n  display: none;\n}\n\n#menu-icon-close.visible[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n#menu-icon-open.visible[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n#menu-icon-close.oculto[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n#menu-icon-open.oculto[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhYmVjZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFJSTtFQUNFLHdCQUFBO0FBRE47O0FBR0k7RUFDRSx3QkFBQTtBQUROOztBQUlFO0VBQ0Usd0JBQUE7QUFGSjs7QUFPRTtFQUNFLHdCQUFBO0FBSko7O0FBS0k7RUFDRSxhQUFBO0FBSE47O0FBTUU7RUFDRTsyQkFBQTtFQUVBLGFBQUE7QUFKSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBTEY7O0FBUUE7RUFDQyx3QkFBQTtBQUxEOztBQVFBO0VBQ0Usd0JBQUE7QUFMRjs7QUFRQTtFQUNFLHdCQUFBO0FBTEY7O0FBUUE7RUFDRSx3QkFBQTtBQUxGIiwiZmlsZSI6ImNhYmVjZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreS10b3B7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLW1vei1zdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC1vLXN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLW1zLXN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LW5vcm1hbHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaG92ZXItcm9zYTpob3ZlcntcbiAgICBjb2xvcjogI0Y5MDBGRiAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItYXp1bDpob3ZlcntcbiAgICBjb2xvcjogIzNFRkVGRiAhaW1wb3J0YW50O1xufVxuXG4ubWVkaWEtcGN7XG4gICNtZW51LWljb257XG4gICAgI21lbnUtaWNvbi1vcGVue1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjbWVudS1pY29uLWNsb3Nle1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAjbGlzdGF7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tZWRpYS1tb3ZpbHtcbiAgI21lbnUtaWNvbntcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgI21lbnUtaWNvbi1jbG9zZXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICNsaXN0YXtcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogY2FsYygwJSAtIDIwMHB4KTsqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI2xpc3RhLmRlc3BsZWdhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCUgIWltcG9ydGFudDtcbiAgdG9wOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbjtcbn1cblxuI2xpc3RhLmNvbnRyYWVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiBjYWxjKDAlIC0gMjAwcHgpICFpbXBvcnRhbnQ7XG4gIHRvcDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWVudS1pY29uLWNsb3NlLnZpc2libGV7XG4gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLW9wZW4udmlzaWJsZXtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLWNsb3NlLm9jdWx0b3tcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLW9wZW4ub2N1bHRve1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Glitch Gaming';
    }
    ngAfterViewChecked() {
        comprobarMedia;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
function comprobarMedia() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        console.log('Mas de 992px');
        document.getElementById('padre').classList.remove('media-movil');
        cargarMediaPC();
    }
    else {
        console.log('Menos de 992px');
        document.getElementById('padre').classList.remove('media-pc');
        cargarMediaMovil();
    }
}
function cargarMediaPC() {
    document.getElementById('padre').classList.remove('media-movil');
    document.getElementById('padre').classList.add('media-pc');
}
function cargarMediaMovil() {
    document.getElementById('padre').classList.remove('media-pc');
    document.getElementById('padre').classList.add('media-movil');
}
window.addEventListener('resize', comprobarMedia);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/torneo/torneo.component */ "xyLT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _views_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_8__["TorneoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/torneo/torneo.component */ "xyLT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', redirectTo: 'home' },
    { path: 'torneos', component: _views_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_2__["TorneoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xyLT":
/*!**************************************************!*\
  !*** ./src/app/views/torneo/torneo.component.ts ***!
  \**************************************************/
/*! exports provided: TorneoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoComponent", function() { return TorneoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TorneoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TorneoComponent.ɵfac = function TorneoComponent_Factory(t) { return new (t || TorneoComponent)(); };
TorneoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TorneoComponent, selectors: [["app-torneo"]], decls: 2, vars: 0, template: function TorneoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "torneo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3JuZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map