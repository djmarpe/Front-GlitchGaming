(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/TZf":
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MailService {
    constructor(http) {
        this.http = http;
        this.enviarCorreo = (mail) => {
            console.log(mail);
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'enviarMail';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }),
            };
            return this.http.post(url, mail, extra);
        };
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alejandro/GlitchGaming/Front-GlitchGaming/src/main.ts */"zUnb");


/***/ }),

/***/ "1Isg":
/*!***************************************************!*\
  !*** ./src/app/services/admin-service.service.ts ***!
  \***************************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AdminServiceService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.getUsers = () => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'superAdmin/getUsers';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.get(url, extra);
        };
        this.deleteUser = (userAux) => {
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN)
                }),
            };
            return this.http.post(src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'superAdmin/deleteUser', userAux, extra);
        };
        this.newUser = (newUser) => {
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN)
                }),
            };
            return this.http.post(src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'superAdmin/newUser', newUser, extra);
        };
        this.editUser = (user) => {
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN)
                }),
            };
            return this.http.post(src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'superAdmin/editUser', user, extra);
        };
    }
}
AdminServiceService.ɵfac = function AdminServiceService_Factory(t) { return new (t || AdminServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AdminServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AdminServiceService, factory: AdminServiceService.ɵfac, providedIn: 'root' });


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
    url_api: 'http://localhost/EjerciciosPHP2020/Back-GlitchGaming/public/api/',
    APP_NAME: 'Glitch Gaming',
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

/***/ "FkHG":
/*!*********************************************************!*\
  !*** ./src/app/components/noticia/noticia.component.ts ***!
  \*********************************************************/
/*! exports provided: NoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaComponent", function() { return NoticiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_noticia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/noticia.service */ "mTOY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NoticiaComponent_div_0_h5_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "League of Legends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticiaComponent_div_0_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valorant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticiaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoticiaComponent_div_0_h5_4_Template, 2, 0, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NoticiaComponent_div_0_h5_5_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "noticias-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1["idJuego"] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1["idJuego"] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r2, "_news_img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/noticias/", i_r2, ".jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r2, "_news_description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noticia_r1["noticia"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r2, "_news_after");
} }
class NoticiaComponent {
    constructor(noticia) {
        this.noticia = noticia;
        //Funcion que carga los ultimos torneos publicados
        this.cargarUltimasNoticias = () => {
            this.noticia.getUltimasNoticias().subscribe((response) => {
                console.log(response);
                this.noticias = response['ultimasNoticias'];
            });
        };
        this.comprobarMediaNoticias = () => {
            for (let i = 0; i < this.noticias.length; i++) {
                var pos1 = document.getElementById(i + '_news_img');
                var posAux = document.getElementById(i + '_news_after');
                if (window.matchMedia("(min-width: 768px)").matches) {
                    pos1.append(posAux.firstElementChild);
                    pos1.classList.remove('d-none');
                    posAux.classList.add('d-none');
                }
                else {
                    posAux.appendChild(pos1.firstChild);
                    pos1.classList.add('d-none');
                    posAux.classList.remove('d-none');
                }
            }
        };
    }
    ngOnInit() {
        this.cargarUltimasNoticias();
    }
}
NoticiaComponent.ɵfac = function NoticiaComponent_Factory(t) { return new (t || NoticiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_noticia_service__WEBPACK_IMPORTED_MODULE_1__["NoticiaService"])); };
NoticiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticiaComponent, selectors: [["app-noticia"]], decls: 1, vars: 1, consts: [["class", "row m-0 p-0", 3, "id", 4, "ngFor", "ngForOf"], [1, "row", "m-0", "p-0", 3, "id"], [1, "col-12", "my-4"], [1, "row", "m-0", "p-0"], [1, "col-12", "p-0"], ["class", "m-0 separator-title-1-news text-left font-Ethnocentric", 4, "ngIf"], ["class", "m-0 separator-title-2-news text-left font-Ethnocentric", 4, "ngIf"], [1, "row", "my-2", "p-0", "justify-content-between"], [1, "col-12", "col-md-5", "align-self-center", "p-4", 3, "id"], [1, "w-100", "img-fluid", 3, "src"], [1, "col-12", "col-md-5", "p-4", 3, "id"], [1, "m-0", "separator-title-1-news", "text-left", "font-Ethnocentric"], [1, "m-0", "separator-title-2-news", "text-left", "font-Ethnocentric"]], template: function NoticiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoticiaComponent_div_0_Template, 13, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noticias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".separator-title-1-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #7d5c1c;\n}\n\n.separator-title-1-news[_ngcontent-%COMP%]::before, .separator-title-1-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #7d5c1c;\n}\n\n.separator-title-1-news[_ngcontent-%COMP%]:not(:empty)::before {\n  margin-right: 10px;\n}\n\n.separator-title-1-news[_ngcontent-%COMP%]::after {\n  margin-left: 10px;\n  right: 0;\n  max-width: 10%;\n}\n\n.separator-title-2-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #f34453;\n}\n\n.separator-title-2-news[_ngcontent-%COMP%]::before, .separator-title-2-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #f34453;\n}\n\n.separator-title-2-news[_ngcontent-%COMP%]::before {\n  margin-right: 10px;\n  left: 0;\n  max-width: 10%;\n}\n\n.separator-title-2-news[_ngcontent-%COMP%]:not(:empty)::after {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGljaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7O0VBRUksV0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTs7RUFFSSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKIiwiZmlsZSI6Im5vdGljaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlcGFyYWRvciBMZWFndWUgb2YgTGVnZW5kc1xuLnNlcGFyYXRvci10aXRsZS0xLW5ld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDEyNSw5MiwyOCk7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtMS1uZXdzOjpiZWZvcmUsXG4uc2VwYXJhdG9yLXRpdGxlLTEtbmV3czo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxMjUsOTIsMjgpO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLTEtbmV3czpub3QoOmVtcHR5KTo6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtMS1uZXdzOjphZnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbi8vU2VwYXJhZG9yIFZBTE9SQU5UXG4uc2VwYXJhdG9yLXRpdGxlLTItbmV3cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKDI0Myw2OCw4MywxKTtcbn1cblxuLnNlcGFyYXRvci10aXRsZS0yLW5ld3M6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGUtMi1uZXdzOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNDMsNjgsODMsMSk7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtMi1uZXdzOjpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1heC13aWR0aDogMTAlO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLTItbmV3czpub3QoOmVtcHR5KTo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "OdXs":
/*!**********************************************************************!*\
  !*** ./src/app/views/gestion-usuarios/gestion-usuarios.component.ts ***!
  \**********************************************************************/
/*! exports provided: GestionUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionUsuariosComponent", function() { return GestionUsuariosComponent; });
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin-service.service */ "1Isg");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");











function GestionUsuariosComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00BFEstas seguro que deseas eliminar al usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.userAux["nombreUsuario"]);
} }
function GestionUsuariosComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", rol_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](rol_r3.name);
} }
function GestionUsuariosComponent_tr_139_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r6.faCircle);
} }
function GestionUsuariosComponent_tr_139_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r7.faCircle);
} }
function GestionUsuariosComponent_tr_139_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_tr_139_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.seleccionarUsuario(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r8.faTrash);
} }
function GestionUsuariosComponent_tr_139_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GestionUsuariosComponent_tr_139_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GestionUsuariosComponent_tr_139_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_tr_139_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const i_r5 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.seleccionarUsuario(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "fa-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GestionUsuariosComponent_tr_139_button_10_Template, 2, 1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", usuario_r4.estado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", usuario_r4.estado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](usuario_r4.nombreUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](usuario_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faPencil);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", usuario_r4.id != ctx_r2.idUserLogin);
} }
class GestionUsuariosComponent {
    constructor(router, user, admin, formBuilder) {
        this.router = router;
        this.user = user;
        this.admin = admin;
        this.formBuilder = formBuilder;
        this.faAddSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusSquare"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.faPencil = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
        this.roles = [
            { name: "Super Administrador" },
            { name: "Administrador" },
            { name: "Jugador" }
        ];
        this.getUsers = () => {
            this.admin.getUsers().subscribe((response) => {
                this.usuarios = response['listaUsuarios'];
            });
        };
        this.resetVal = () => {
            this.user.nombre = undefined;
            this.user.apellidos = undefined;
            this.user.edad = undefined;
            this.user.access_token = undefined;
            this.user.id = undefined;
            this.user.nombreUsuario = undefined;
            this.user.password = undefined;
            this.user.descripcion = undefined;
            this.user.pais = undefined;
            this.user.estado = undefined;
            this.user.estado = undefined;
            this.user.verificado = undefined;
            this.user.rol = undefined;
            sessionStorage.removeItem(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"].SESSION_STORAGE_TOKEN);
            sessionStorage.removeItem(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"].SESSION_STORAGE_USER);
        };
        this.seleccionarUsuario = (i) => {
            this.indiceSeleccionado = i;
            this.userAux = this.usuarios[i];
            console.log(this.userAux);
            this.formularioEditarUser.controls['edit_nombre'].setValue(this.userAux.nombre);
            this.formularioEditarUser.controls['edit_apellidos'].setValue(this.userAux.apellidos);
            this.formularioEditarUser.controls['edit_diaNacimiento'].setValue(this.userAux.diaNacimiento);
            this.formularioEditarUser.controls['edit_mesNacimiento'].setValue(this.userAux.mesNacimiento);
            this.formularioEditarUser.controls['edit_anioNacimiento'].setValue(this.userAux.anioNacimiento);
            this.formularioEditarUser.controls['edit_email'].setValue(this.userAux.email);
            this.formularioEditarUser.controls['edit_nombreUsuario'].setValue(this.userAux.nombreUsuario);
            switch (this.userAux.rol) {
                case 1:
                    document.getElementById('superAdmin').setAttribute("selected", "selected");
                    break;
                case 2:
                    document.getElementById('admin').setAttribute("selected", "selected");
                    break;
                case 3:
                    document.getElementById('jugador').setAttribute("selected", "selected");
                    break;
            }
        };
        this.limpiarRol = () => {
            document.getElementById('superAdmin').removeAttribute("selected");
            document.getElementById('admin').removeAttribute("selected");
            document.getElementById('jugador').removeAttribute("selected");
        };
        this.deleteUser = () => {
            let usuarioAux = this.usuarios[this.indiceSeleccionado];
            console.log(usuarioAux);
            this.admin.deleteUser(usuarioAux).subscribe((response) => {
                this.getUsers();
            });
        };
        this.newUser = () => {
            const newUser = this.formularioNuevoUser.value;
            this.admin.newUser(newUser).subscribe((response) => {
                this.getUsers();
                this.formularioNuevoUser.reset();
                document.getElementById('btn-cerrar-create').click();
            });
        };
        this.editUser = () => {
            const usuarioEditar = this.formularioEditarUser.value;
            usuarioEditar.id = this.usuarios[this.indiceSeleccionado].id;
            if (usuarioEditar.edit_nombre == "") {
                usuarioEditar.edit_nombre = this.usuarios[this.indiceSeleccionado].nombre;
            }
            if (usuarioEditar.edit_apellidos == "") {
                usuarioEditar.edit_apellidos = this.usuarios[this.indiceSeleccionado].apellidos;
            }
            if (usuarioEditar.edit_diaNacimiento == "") {
                usuarioEditar.edit_diaNacimiento = this.usuarios[this.indiceSeleccionado].diaNacimiento;
            }
            if (usuarioEditar.edit_mesNacimiento == "") {
                usuarioEditar.edit_mesNacimiento = this.usuarios[this.indiceSeleccionado].mesNacimiento;
            }
            if (usuarioEditar.edit_anioNacimiento == "") {
                usuarioEditar.edit_anioNacimiento = this.usuarios[this.indiceSeleccionado].anioNacimiento;
            }
            if (usuarioEditar.edit_email == "") {
                usuarioEditar.edit_email = this.usuarios[this.indiceSeleccionado].email;
            }
            usuarioEditar.edit_rol = this.comprobarRol(document.getElementById('selectRol').value);
            if (usuarioEditar.edit_password == "") {
                usuarioEditar.edit_password = null;
            }
            console.log(usuarioEditar);
            this.admin.editUser(usuarioEditar).subscribe((response) => {
                console.log(response);
                this.limpiarRol();
                this.formularioEditarUser.reset();
                document.getElementById('btn-cerrar-edit').click();
                this.getUsers();
            });
        };
        this.comprobarRol = (value) => {
            let rol;
            switch (value) {
                case "Super Administrador":
                    rol = 1;
                    break;
                case "Administrador":
                    rol = 2;
                    break;
                case "Jugador":
                    rol = 3;
                    break;
            }
            return rol;
        };
        if (this.user.rol != 1) {
            this.user.logOut().subscribe((response) => {
                this.resetVal();
                this.router.navigate(['/home']);
            });
        }
        this.formularioNuevoUser = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            diaNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mesNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            anioNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nombreUsuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.formularioEditarUser = this.formBuilder.group({
            id: [''],
            edit_nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_diaNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_mesNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_anioNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_nombreUsuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            edit_password: [''],
            edit_rol: ['']
        });
        this.idUserLogin = this.user.id;
    }
    ngOnInit() {
        this.getUsers();
    }
}
GestionUsuariosComponent.ɵfac = function GestionUsuariosComponent_Factory(t) { return new (t || GestionUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
GestionUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GestionUsuariosComponent, selectors: [["app-gestion-usuarios"]], decls: 140, vars: 7, consts: [["onload", "comprobarMedia()"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "background-black"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "aria-labelledby", "exampleModalLabel1", "aria-hidden", "true", 1, "modal", "fade"], [3, "formGroup"], [1, "row", "my-3", "p-0"], [1, "col-12"], ["type", "text", "name", "new_name", "placeholder", "Nombre", "formControlName", "nombre", 1, "form-control"], ["type", "text", "name", "new_surname", "placeholder", "Apellidos", "formControlName", "apellidos", 1, "form-control"], ["type", "number", "name", "new_diaNacimiento", "id", "new_diaNacimiento", "placeholder", "dd", "min", "1", "max", "31", "formControlName", "diaNacimiento", 1, ""], ["type", "number", "name", "new_mesNacimiento", "id", "new_mesNacimiento", "placeholder", "mm", "min", "1", "max", "12", "formControlName", "mesNacimiento", 1, ""], ["type", "number", "name", "new_anioNacimiento", "id", "new_anioNacimiento", "placeholder", "aaaa", "min", "1921", "max", "2021", "formControlName", "anioNacimiento", 1, ""], ["type", "email", "name", "new_email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["type", "text", "name", "new_username", "placeholder", "Nombre de usuario", "formControlName", "nombreUsuario", 1, "form-control"], ["type", "password", "name", "new_password", "placeholder", "**********", "formControlName", "password", 1, "form-control"], ["formControlName", "rol", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-dismiss", "modal", "id", "btn-cerrar-create", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "exampleModal2", "tabindex", "-1", "aria-labelledby", "exampleModalLabel2", "aria-hidden", "true", 1, "modal", "fade"], ["type", "text", "name", "new_name", "placeholder", "Nombre", "formControlName", "edit_nombre", 1, "form-control"], ["type", "text", "name", "new_surname", "placeholder", "Apellidos", "formControlName", "edit_apellidos", 1, "form-control"], ["type", "number", "name", "edit_diaNacimiento", "id", "edit_diaNacimiento", "placeholder", "dd", "min", "1", "max", "31", "formControlName", "edit_diaNacimiento", 1, ""], ["type", "number", "name", "edit_mesNacimiento", "id", "edit_mesNacimiento", "placeholder", "mm", "min", "1", "max", "12", "formControlName", "edit_mesNacimiento", 1, ""], ["type", "number", "name", "edit_anioNacimiento", "id", "edit_anioNacimiento", "placeholder", "aaaa", "min", "1921", "max", "2021", "formControlName", "edit_anioNacimiento", 1, ""], ["type", "email", "name", "new_email", "placeholder", "Email", "formControlName", "edit_email", 1, "form-control"], ["type", "text", "name", "new_username", "placeholder", "Nombre de usuario", "formControlName", "edit_nombreUsuario", 1, "form-control"], ["type", "password", "name", "new_password", "placeholder", "**********", "formControlName", "edit_password", 1, "form-control"], ["id", "selectRol", 1, "form-control"], ["id", "superAdmin", "name", "Super Administrador"], ["id", "admin", "name", "Administrador"], ["id", "jugador", "name", "Jugador"], ["type", "button", "data-bs-dismiss", "modal", "id", "btn-cerrar-edit", 1, "btn", "btn-secondary", 3, "click"], [1, "row", "m-0", "p-0"], [1, "table", "text-white"], ["colspan", "4"], [1, "d-inline-block"], ["name", "addUser", "title", "Agregar usuario", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal1", "cy-id", "addUser", 1, "btn", "btn-primary", "float-end"], [3, "icon"], ["scope", "row", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["scope", "row"], [1, "col-nombreUsuario"], [1, "col-email"], [1, "col-botones", "text-end"], ["name", "editUser", "title", "Editar usuario", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal2", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "text-white", 3, "icon"], ["class", "btn btn-sm btn-danger", "type", "submit", "name", "borrarUsuario", "title", "Borrar usuario", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 3, "click", 4, "ngIf"], [1, "text-danger", 3, "icon"], [1, "text-success", 3, "icon"], ["type", "submit", "name", "borrarUsuario", "title", "Borrar usuario", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function GestionUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cabecera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00BFEliminar usuario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GestionUsuariosComponent_small_8_Template, 5, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_Template_button_click_12_listener() { return ctx.deleteUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Nuevo usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Fecha de nacimiento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Rol asignado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GestionUsuariosComponent_Template_select_ngModelChange_58_listener($event) { return ctx.rolSeleccionado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, GestionUsuariosComponent_option_59_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_Template_button_click_63_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Crear usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Fecha de nacimiento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Rol asignado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Super Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Jugador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_Template_button_click_117_listener() { return ctx.limpiarRol(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionUsuariosComponent_Template_button_click_119_listener() { return ctx.editUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "fa-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, GestionUsuariosComponent_tr_139_Template, 11, 6, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userAux !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formularioNuevoUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rolSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formularioEditarUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faAddSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.usuarios);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__["CabeceraComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".tabla[_ngcontent-%COMP%] {\n  height: calc(100vh - 111px);\n}\n.tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-nombreUsuario[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-email[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-botones[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.background-black[_ngcontent-%COMP%] {\n  background: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dlc3Rpb24tdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKO0FBQ1E7RUFDSSxVQUFBO0FBQ1o7QUFDUTtFQUNJLFVBQUE7QUFDWjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUlBO0VBQ0ksNEJBQUE7QUFESiIsImZpbGUiOiJnZXN0aW9uLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxhIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTFweCk7XG4gICAgdGFibGUge1xuICAgICAgICAuY29sLW5vbWJyZVVzdWFyaW8ge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuICAgICAgICAuY29sLWVtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbC1ib3RvbmVzIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ "PO9+":
/*!********************************************************************!*\
  !*** ./src/app/views/perfil-personal/perfil-personal.component.ts ***!
  \********************************************************************/
/*! exports provided: PerfilPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPersonalComponent", function() { return PerfilPersonalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");









function PerfilPersonalComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email modificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PerfilPersonalComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function PerfilPersonalComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contrase\u00F1a modificada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PerfilPersonalComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.error);
} }
function PerfilPersonalComponent_small_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "nombre de usuario modificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PerfilPersonalComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.error);
} }
function PerfilPersonalComponent_small_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Descripcion modificada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PerfilPersonalComponent_small_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.error);
} }
class PerfilPersonalComponent {
    constructor(formBuilder, router, user) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = user;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
        // Editar email
        this.editEmail = () => {
            document.getElementById('originalEmail').classList.add('d-none');
            document.getElementById('cancelEmail').classList.remove('d-none');
            document.getElementById('applyEmail').classList.remove('d-none');
            document.getElementById('email').classList.remove('d-none');
        };
        this.cancelEmail = () => {
            document.getElementById('originalEmail').classList.remove('d-none');
            document.getElementById('cancelEmail').classList.add('d-none');
            document.getElementById('applyEmail').classList.add('d-none');
            document.getElementById('email').classList.add('d-none');
        };
        // Llamada a la API para guardar el Email
        this.guardarEmail = () => {
            let datos = this.emailForm.value;
            const user = {
                id: this.user.id,
                email: datos.email
            };
            this.user.editarEmail(user).subscribe((response) => {
                this.email = user.email;
                this.modifyEmail = 1;
                this.cancelEmail();
            }, (error) => {
                this.modifyEmail = 2;
                this.error = 'Error al modificar.';
            });
        };
        // Editar descripcion
        this.editDescription = () => {
            document.getElementById('originalDescription').classList.add('d-none');
            document.getElementById('cancelDescription').classList.remove('d-none');
            document.getElementById('applyDescription').classList.remove('d-none');
            document.getElementById('description').classList.remove('d-none');
        };
        this.cancelDescription = () => {
            document.getElementById('originalDescription').classList.remove('d-none');
            document.getElementById('cancelDescription').classList.add('d-none');
            document.getElementById('applyDescription').classList.add('d-none');
            document.getElementById('description').classList.add('d-none');
        };
        // Llamada a la API para guardar el Email
        this.guardarDescription = () => {
            let datos = this.descriptionForm.value;
            const user = {
                id: this.user.id,
                description: datos.description
            };
            this.user.editarDescription(user).subscribe((response) => {
                this.description = user.description;
                this.modifyDescription = 1;
                this.cancelDescription();
            }, (error) => {
                this.modifyDescription = 2;
                this.error = 'Error al modificar.';
            });
        };
        // Editar nombre de usuario
        this.editUsername = () => {
            document.getElementById('originalUsername').classList.add('d-none');
            document.getElementById('cancelUsername').classList.remove('d-none');
            document.getElementById('applyUsername').classList.remove('d-none');
            document.getElementById('username').classList.remove('d-none');
        };
        this.cancelUsername = () => {
            document.getElementById('originalUsername').classList.remove('d-none');
            document.getElementById('cancelUsername').classList.add('d-none');
            document.getElementById('applyUsername').classList.add('d-none');
            document.getElementById('username').classList.add('d-none');
        };
        this.guardarUsername = () => {
            let datos = this.usernameForm.value;
            const user = {
                id: this.user.id,
                username: datos.username
            };
            this.user.editarUsername(user).subscribe((response) => {
                this.username = user.username;
                this.modifyUsername = 1;
                this.cancelUsername();
            }, (error) => {
                this.modifyUsername = 2;
                this.error = 'Error al modificar.';
            });
        };
        // Password
        this.verPassword = () => {
            if (this.checked) {
                document.getElementById('originalPassword').innerText = '**********';
                this.checked = false;
            }
            else {
                document.getElementById('originalPassword').innerText = this.password;
                this.checked = true;
            }
        };
        this.editPassword = () => {
            document.getElementById('btnVerPass').classList.add('d-none');
            document.getElementById('cancelPassword').classList.remove('d-none');
            document.getElementById('applyPassword').classList.remove('d-none');
            document.getElementById('password').classList.remove('d-none');
        };
        this.cancelPassword = () => {
            document.getElementById('btnVerPass').classList.remove('d-none');
            document.getElementById('cancelPassword').classList.add('d-none');
            document.getElementById('applyPassword').classList.add('d-none');
            document.getElementById('password').classList.add('d-none');
        };
        this.guardarPassword = () => {
            let datos = this.passwordForm.value;
            const user = {
                id: this.user.id,
                password: datos.password
            };
            this.user.editarPassword(user).subscribe((response) => {
                this.password = user.password;
                this.modifyPassword = 1;
                this.cancelPassword();
                this.verPassword();
            }, (error) => {
                this.modifyPassword = 2;
                this.error = 'Error al modificar.';
            });
        };
        this.nombre = this.user.nombre + ' ' + this.user.apellidos;
        this.id = this.user.id;
        this.edad = this.user.edad;
        this.email = this.user.email;
        this.username = this.user.nombreUsuario;
        this.password = this.user.password;
        this.description = this.user.descripcion;
        this.emailForm = this.formBuilder.group({
            email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.passwordForm = this.formBuilder.group({
            password: [user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.usernameForm = this.formBuilder.group({
            username: [user.nombreUsuario, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.descriptionForm = this.formBuilder.group({
            description: [user.descripcion, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
}
PerfilPersonalComponent.ɵfac = function PerfilPersonalComponent_Factory(t) { return new (t || PerfilPersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
PerfilPersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PerfilPersonalComponent, selectors: [["app-perfil-personal"]], decls: 78, vars: 26, consts: [["onload", "comprobarMedia()"], [1, "row", "m-0", "p-0", "d-flex", "justify-content-center"], [1, "col-11", "p-0"], [1, "row", "m-3", "p-0", "text-center"], [1, "col-12", "m-0", "p-0"], ["src", "../../../assets/img/LOGO_GG_negro.png", 1, "col-4", "col-md-1", 2, "border-radius", "50%"], [1, "my-1"], [1, "row", "m-3", "p-0", "d-flex", "justify-content-between"], ["id", "em", 1, "col-12", "col-md-5", "my-3", "p-0", 3, "formGroup", "ngSubmit"], [1, "d-block"], ["id", "originalEmail", 1, "my-2"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control", "d-none", 3, "value"], ["class", "alert-success my-1 px-1", 4, "ngIf"], ["class", "alert-danger my-1 px-1", 4, "ngIf"], ["id", "editEmail", 1, "edit", "mx-1", 3, "click"], ["id", "cancelEmail", 1, "edit", "mx-1", "d-none", 3, "click"], ["id", "applyEmail", 1, "btn", "p-0", "edit", "mx-1", "d-none", "font-14px", "border-none", 3, "disabled"], ["id", "pass", 1, "col-12", "col-md-5", "my-3", "p-0", 3, "formGroup", "ngSubmit"], ["id", "btnVerPass", 1, "d-block", "my-2"], ["id", "originalPassword"], [1, "btn", "p-0", 3, "click"], [1, "text-white", 3, "icon"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", 1, "form-control", "d-none", 3, "value"], ["id", "editPassword", 1, "edit", "mx-1", 3, "click"], ["id", "cancelPassword", 1, "edit", "mx-1", "d-none", 3, "click"], ["id", "applyPassword", 1, "btn", "p-0", "edit", "mx-1", "d-none", "font-14px", "border-none", 3, "disabled"], ["id", "usr", 1, "col-12", "col-md-5", "my-3", "p-0", "align-self-center", 3, "formGroup", "ngSubmit"], ["id", "originalUsername", 1, "my-2"], ["type", "text", "id", "username", "name", "username", "formControlName", "username", 1, "form-control", "d-none", 3, "value"], ["id", "editUsername", 1, "edit", "mx-1", 3, "click"], ["id", "cancelUsername", 1, "edit", "mx-1", "d-none", 3, "click"], ["id", "applyUsername", 1, "btn", "p-0", "edit", "mx-1", "d-none", "font-14px", "border-none", 3, "disabled"], ["id", "desc", 1, "col-12", "col-md-5", "my-3", "p-0", 3, "formGroup", "ngSubmit"], ["id", "originalDescription", 1, "my-2"], ["id", "description", "name", "description", "rows", "5", "formControlName", "description", 1, "form-control", "d-none"], ["id", "editDescription", 1, "edit", "mx-1", 3, "click"], ["id", "cancelDescription", 1, "edit", "mx-1", "d-none", 3, "click"], ["id", "applyDescription", 1, "btn", "p-0", "edit", "mx-1", "d-none", "font-14px", "border-none", 3, "disabled"], [1, "alert-success", "my-1", "px-1"], [1, "alert-danger", "my-1", "px-1"]], template: function PerfilPersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cabecera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PerfilPersonalComponent_Template_form_ngSubmit_13_listener() { return ctx.guardarEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PerfilPersonalComponent_small_20_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PerfilPersonalComponent_small_21_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_22_listener() { return ctx.editEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "[ Editar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_24_listener() { return ctx.cancelEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "[ Cancelar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "[ Guardar cambios ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PerfilPersonalComponent_Template_form_ngSubmit_28_listener() { return ctx.guardarPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Contrase\u00F1a *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "**********");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_35_listener() { return ctx.verPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, PerfilPersonalComponent_small_39_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, PerfilPersonalComponent_small_40_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_41_listener() { return ctx.editPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "[ Editar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "small", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_43_listener() { return ctx.cancelPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "[ Cancelar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "[ Guardar cambios ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PerfilPersonalComponent_Template_form_ngSubmit_47_listener() { return ctx.guardarUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Nombre de usuario *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, PerfilPersonalComponent_small_54_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, PerfilPersonalComponent_small_55_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_56_listener() { return ctx.editUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "[ Editar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_58_listener() { return ctx.cancelUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "[ Cancelar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "[ Guardar cambios ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PerfilPersonalComponent_Template_form_ngSubmit_62_listener() { return ctx.guardarDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Descripci\u00F2n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, PerfilPersonalComponent_small_70_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, PerfilPersonalComponent_small_71_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_72_listener() { return ctx.editDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "[ Editar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "small", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfilPersonalComponent_Template_small_click_74_listener() { return ctx.cancelDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "[ Cancelar ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "[ Guardar cambios ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.edad, " a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyEmail == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyEmail == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.emailForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyPassword == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyPassword == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.usernameForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyUsername == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyUsername == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.usernameForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.descriptionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyDescription == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifyDescription == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.descriptionForm.invalid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: [".btn-enviar[_ngcontent-%COMP%] {\n  background: linear-gradient(41deg, #88008a 0%, #2ca6a7 100%);\n  color: white;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(41deg, #440045 0%, #1b6566 100%);\n  color: white;\n}\n\n.edit[_ngcontent-%COMP%] {\n  color: white;\n  cursor: pointer;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n\n.font-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.border-none[_ngcontent-%COMP%] {\n  border: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BlcmZpbC1wZXJzb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksNERBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6InBlcmZpbC1wZXJzb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZW52aWFye1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MWRlZywgcmdiYSgxMzYsMCwxMzgsMSkgMCUsIHJnYmEoNDQsMTY2LDE2NywxKSAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLWVudmlhcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoNjgsMCw2OSwxKSAwJSwgcmdiYSgyNywxMDEsMTAyLDEpIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVkaXR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXQ6aG92ZXJ7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5mb250LTE0cHh7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm9yZGVyLW5vbmV7XG4gICAgYm9yZGVyOiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre de usuario es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_15_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").hasError("required"));
} }
function LoginComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La contrse\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_21_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError("required"));
} }
function LoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Compruebe su correo eletr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_40_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_40_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.registroForm.get("new_name").hasError("required"));
} }
function LoginComponent_div_46_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El apellido es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_46_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.registroForm.get("new_surname").hasError("required"));
} }
function LoginComponent_div_54_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La fecha de nacimiento es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_54_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.registroForm.get("new_diaNacimiento").hasError("required") || ctx_r5.registroForm.get("new_mesNacimiento").hasError("required") || ctx_r5.registroForm.get("new_anioNacimiento").hasError("required"));
} }
function LoginComponent_div_60_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_60_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.registroForm.get("new_email").hasError("required"));
} }
function LoginComponent_div_66_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre de usuario es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_66_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.registroForm.get("new_username").hasError("required"));
} }
function LoginComponent_div_72_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La contrse\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_72_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.registroForm.get("password").hasError("required"));
} }
class LoginComponent {
    constructor(formBuilder, router, user) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = user;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
        this.iniciarSesion = () => {
            let datos = this.loginForm.value;
            const user = {
                nombreUsuario: datos.username,
                password: datos.password
            };
            this.user.login(user).subscribe((response) => {
                console.log(response);
                this.user.isLoged = true;
                this.user.set(response);
                this.router.navigate(['/home']);
            });
        };
        this.registrar = () => {
            let datos = this.registroForm.value;
            const newUser = {
                nombre: datos.new_name,
                apellidos: datos.new_surname,
                diaNacimiento: datos.new_diaNacimiento,
                mesNacimiento: datos.new_mesNacimiento,
                anioNacimiento: datos.new_anioNacimiento,
                email: datos.new_email,
                nombreUsuario: datos.new_username,
                password: datos.new_password
            };
            this.user.register(newUser).subscribe((response) => {
                this.verCorreo = 1;
                this.registroForm.reset();
            });
        };
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.registroForm = this.formBuilder.group({
            new_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_diaNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_mesNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_anioNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 77, vars: 13, consts: [["onload", "comprobarMedia()"], [1, "row", "m-0", "p-0", "justify-content-between"], [1, "col-12", "col-md-5", "align-self-center", "my-5"], [1, "row", "m-0", "p-0"], [1, "col-12"], [1, "p-0", "m-0", "bg-black", "with-linear-gradient-gg", 3, "formGroup", "ngSubmit"], [1, "row", "m-0", "my-3", "p-0"], [1, "col-12", "text-center"], [1, "m-0"], ["type", "text", "name", "username", "id", "username", "placeholder", "Nombre de usuario", "formControlName", "username", 1, "form-control"], [4, "ngIf"], ["type", "password", "name", "password", "id", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password", 1, "form-control"], [1, "btn", "btn-enviar", "w-50", 3, "disabled"], ["class", "row m-0 my-3 p-0", 4, "ngIf"], ["type", "text", "name", "new_name", "id", "new_name", "placeholder", "Nombre", "formControlName", "new_name", 1, "form-control"], ["type", "text", "name", "new_surname", "id", "new_surname", "placeholder", "Apellidos", "formControlName", "new_surname", 1, "form-control"], ["type", "number", "name", "new_diaNacimiento", "id", "new_diaNacimiento", "placeholder", "dd", "formControlName", "new_diaNacimiento", "min", "1", "max", "31", 1, ""], ["type", "number", "name", "new_mesNacimiento", "id", "new_mesNacimiento", "placeholder", "mm", "formControlName", "new_mesNacimiento", "min", "1", "max", "12", 1, ""], ["type", "number", "name", "new_anioNacimiento", "id", "new_anioNacimiento", "placeholder", "aaaa", "formControlName", "new_anioNacimiento", "min", "1921", "max", "2021", 1, ""], ["type", "email", "name", "new_email", "id", "new_email", "placeholder", "Email", "formControlName", "new_email", 1, "form-control"], ["type", "email", "name", "new_username", "id", "new_username", "placeholder", "Nombre de usuario", "formControlName", "new_username", 1, "form-control"], ["type", "password", "name", "password", "id", "password", "placeholder", "Contrase\u00F1a", "formControlName", "new_password", "pattern", "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])([A-Za-z\\d$@$!%*?&]|[^ ]){8,15}$/", 1, "form-control"], ["class", "alert-danger px-1", 4, "ngIf"], [1, "alert-danger", "px-1"], [1, "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cabecera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.iniciarSesion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Inicia sesi\u00F2n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Iniciar sesi\u00F2n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_29_listener() { return ctx.registrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Nuevo usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, LoginComponent_div_40_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, LoginComponent_div_46_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Fecha de nacimiento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, LoginComponent_div_54_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, LoginComponent_div_60_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, LoginComponent_div_66_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, LoginComponent_div_72_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.get("username").errors && ctx.loginForm.get("username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").errors && ctx.loginForm.get("password").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registroForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verCorreo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("new_name").errors && ctx.registroForm.get("new_name").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("new_surname").errors && ctx.registroForm.get("new_surname").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("new_diaNacimiento").dirty || ctx.registroForm.get("new_mesNacimiento").dirty || ctx.registroForm.get("new_anioNacimiento").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("new_email").errors && ctx.registroForm.get("new_email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("new_username").errors && ctx.registroForm.get("new_username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registroForm.get("password").errors && ctx.registroForm.get("password").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registroForm.invalid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"]], styles: [".vh-100[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.bg-black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.btn-enviar[_ngcontent-%COMP%] {\n  background: linear-gradient(41deg, #88008a 0%, #2ca6a7 100%);\n  color: white;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(41deg, #440045 0%, #1b6566 100%);\n  color: white;\n}\n\n.with-linear-gradient-gg[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(124deg, fuchsia 30%, white 50%, #00fbfd) 1;\n     border-image: linear-gradient(124deg, fuchsia 30%, white 50%, #00fbfd) 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLDREQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksNERBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkVBQUE7S0FBQSx3RUFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZoLTEwMHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctYmxhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmJ0bi1lbnZpYXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDEzNiwwLDEzOCwxKSAwJSwgcmdiYSg0NCwxNjYsMTY3LDEpIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4tZW52aWFyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MWRlZywgcmdiYSg2OCwwLDY5LDEpIDAlLCByZ2JhKDI3LDEwMSwxMDIsMSkgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2l0aC1saW5lYXItZ3JhZGllbnQtZ2cge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTI0ZGVnLCByZ2JhKDI1NSwwLDI1NSwxKSAzMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNTAlLCByZ2JhKDAsMjUxLDI1MywxKSkxO1xufSJdfQ== */"] });


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
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mail.service */ "/TZf");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _components_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/torneo/torneo.component */ "UavU");
/* harmony import */ var _components_noticia_noticia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/noticia/noticia.component */ "FkHG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HomeComponent_div_180_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_180_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El email no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_180_small_1_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_180_small_2_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.homeContact.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.homeContact.get("email").hasError("email"));
} }
function HomeComponent_div_185_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_185_small_1_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.homeContact.get("nombre").hasError("required"));
} }
function HomeComponent_div_194_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El asunto es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_194_small_1_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.homeContact.get("asunto").hasError("required"));
} }
function HomeComponent_div_199_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El mensaje es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_199_small_1_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.homeContact.get("mensaje").hasError("required"));
} }
class HomeComponent {
    constructor(formBuilder, router, mail) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.mail = mail;
        this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamation"];
        this.enviarCorreo = () => {
            if (this.homeContact.valid) {
                let mailAux = this.homeContact.value;
                const mail = {
                    nombre: mailAux.nombre,
                    de: mailAux.email,
                    asunto: mailAux.asunto,
                    mensaje: mailAux.mensaje
                };
                this.mail.enviarCorreo(mail).subscribe((response) => {
                    return true;
                }, (error) => {
                    return false;
                });
                this.homeContact.reset();
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
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 205, vars: 6, consts: [["onload", "comprobarMedia()"], [1, "row", "m-0", "my-2", "justify-content-center"], ["id", "carousel", 1, "col-11", "col-md-8", "w-50"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active", "position-relative"], ["src", "../../../assets/img/carrousel/BANNER_GG_YOUTUBE.png", "alt", "...", 1, "d-block", "w-100"], [1, "position-absolute", "top-20", "left-20", "bottom-20", "right-20", "bg-black", "m-0", "px-5", 2, "font-size", "12px"], [1, "m-0", "mt-2", "fw-bold", "text-center"], [1, "my-3", "text-center", 2, "font-size", "14px !important"], ["href", "https://discord.gg/T2fpC6tg3f", "target", "blank", 1, "d-block", "text-center"], ["src", "../../../assets/img/LOGO_GG_negro.png", 2, "height", "30px"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "m-0", "p-0"], [1, "col-12", "my-4"], [1, "separator-title", "font-Ethnocentric"], [1, "row", "m-0", "p-0", "justify-content-between"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-lol", "background-lol"], [1, "col-12"], [1, "text-center"], ["src", "../../../assets/juegos/0.png", "alt", "LEAGUE OF LEGENDS LOGO", 1, "img-100px"], [1, "col-12", "my-4", "text-center"], [1, "col-2"], [1, "m-0"], [1, "col-10"], [1, "m-0", "text-start"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-valorant", "background-valorant"], ["src", "../../../assets/juegos/1.png", "alt", "VALORANT LOGO", 1, "img-100px"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-cod", "background-cod"], ["src", "../../../assets/juegos/2.png", "alt", "CALL OF DUTY LOGO", 1, "img-100px"], [1, "col-11", "col-md-5", "m-3", "p-3", "with-linear-gradient-fifa", "background-fifa"], ["src", "../../../assets/juegos/3.png", "alt", "FIFA 21 LOGO", 1, "img-100px"], [1, "col-12", "col-md-5"], [1, "row", "m0", "p-0"], [1, "my-2", "text-center"], [1, "p-3", "m-3", 3, "formGroup", "ngSubmit"], [1, "py-2"], [1, "d-block"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", "placeholder", "Introduzca su correo electr\u00F3nico", 1, "form-control", "m-auto", "my-2"], [4, "ngIf"], ["type", "text", "formControlName", "nombre", "name", "nombre", "id", "nombre", "placeholder", "Introduzca su nombre", 1, "form-control", "m-auto", "my-2"], ["formControlName", "asunto", "id", "asunto", 1, "form-control"], ["rows", "5", "formControlName", "mensaje", "id", "mensaje", "placeholder", "Escriba aqui el mensaje...", 1, "form-control"], [1, "py-2", "text-center"], [1, "btn", "btn-enviar", "w-25", 3, "disabled"], ["class", "alert-danger px-1", 4, "ngIf"], [1, "alert-danger", "px-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00BFQuieres unirte a Glitch Gaming?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A1\u00A1Entra en nuestro discord oficial y comienza tu aventura con nosotros!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u00DALTIMOS TORNEOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-torneo", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "TOP JUGADORES / EQUIPOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "# 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "# 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "# 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "GG TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "\u00DALTIMAS NOTICIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "app-noticia", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "\u00BFTienes dudas o quieres ser patrocinador?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "form", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_175_listener() { return ctx.enviarCorreo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](180, HomeComponent_div_180_Template, 3, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](185, HomeComponent_div_185_Template, 2, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Quiero ser patrocinador");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Tengo dudas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](194, HomeComponent_div_194_Template, 2, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](199, HomeComponent_div_199_Template, 2, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, " Otros enlaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](175);
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
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__["CabeceraComponent"], _components_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_6__["TorneoComponent"], _components_noticia_noticia_component__WEBPACK_IMPORTED_MODULE_7__["NoticiaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".separator-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.separator-title[_ngcontent-%COMP%]::before, .separator-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #fff;\n}\n\n.separator-title[_ngcontent-%COMP%]:not(:empty)::before {\n  margin-right: 10px;\n}\n\n.separator-title[_ngcontent-%COMP%]:not(:empty)::after {\n  margin-left: 10px;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #f34453;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]::before, .separator-title-valorant-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #f34453;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]::before {\n  margin-right: 10px;\n  left: 0;\n  max-width: 10%;\n}\n\n.separator-title-valorant-news[_ngcontent-%COMP%]:not(:empty)::after {\n  margin-left: 10px;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #7d5c1c;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]::before, .separator-title-lol-news[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 3px solid #7d5c1c;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]:not(:empty)::before {\n  margin-right: 10px;\n}\n\n.separator-title-lol-news[_ngcontent-%COMP%]::after {\n  margin-left: 10px;\n  right: 0;\n  max-width: 10%;\n}\n\n.with-linear-gradient[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(323deg, black 21%, aqua) 1;\n     border-image: linear-gradient(323deg, black 21%, aqua) 1;\n}\n\n.with-linear-gradient-lol[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n     border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n}\n\n.background-lol[_ngcontent-%COMP%] {\n  background: #14212f;\n  background: linear-gradient(45deg, #14212f 0%, #32250c 100%);\n}\n\n.background-btn-lol[_ngcontent-%COMP%] {\n  background: #7d5c1c;\n  background: linear-gradient(41deg, #7d5c1c 0%, #8c671f 100%);\n}\n\n.hover-btn-lol[_ngcontent-%COMP%]:hover {\n  background: #3b2c0e;\n  color: white;\n}\n\n.with-linear-gradient-valorant[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n     border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n}\n\n.background-valorant[_ngcontent-%COMP%] {\n  background: #19080a;\n  background: linear-gradient(238deg, #19080a 0%, #391014 100%);\n}\n\n.background-btn-valorant[_ngcontent-%COMP%] {\n  background: #af323d;\n  background: linear-gradient(41deg, #af323d 0%, #b1323d 100%);\n}\n\n.hover-btn-valorant[_ngcontent-%COMP%]:hover {\n  background: #732128;\n  color: white;\n}\n\n.with-linear-gradient-cod[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n     border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n}\n\n.background-cod[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(238deg, #232e2f 0%, #545958 51%, #232e2f 100%);\n}\n\n.background-btn-cod[_ngcontent-%COMP%] {\n  background: #4b6365;\n  background: linear-gradient(41deg, #4b6365 0%, #4e6669 100%);\n}\n\n.hover-btn-cod[_ngcontent-%COMP%]:hover {\n  background: #2f3d3e;\n  color: white;\n}\n\n.with-linear-gradient-fifa[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n     border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n}\n\n.background-fifa[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(321deg, #232e2f 0%, #251442 50%, #3a0b4b 100%);\n}\n\n.background-btn-fifa[_ngcontent-%COMP%] {\n  background: #4e48a8;\n  background: linear-gradient(41deg, #4e48a8 0%, #4069a2 50%, #5640a7 100%);\n}\n\n.hover-btn-fifa[_ngcontent-%COMP%]:hover {\n  background: #323c73;\n  color: white;\n}\n\n.img-200px[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.img-100px[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.img-discord-banner[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.btn-enviar[_ngcontent-%COMP%] {\n  background: linear-gradient(41deg, #88008a 0%, #2ca6a7 100%);\n  color: white;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(41deg, #440045 0%, #1b6566 100%);\n  color: white;\n}\n\n.bg-black[_ngcontent-%COMP%] {\n  background-color: black;\n  opacity: 0.9;\n}\n\n.top-20[_ngcontent-%COMP%] {\n  top: 20%;\n}\n\n.left-20[_ngcontent-%COMP%] {\n  left: 20%;\n}\n\n.bottom-20[_ngcontent-%COMP%] {\n  bottom: 20%;\n}\n\n.right-20[_ngcontent-%COMP%] {\n  right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBOztFQUVJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBOztFQUVJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7O0VBRUksV0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtLQUFBLHdEQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0RBQUE7S0FBQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7S0FBQSw2REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw2REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEVBQUE7S0FBQSx5RUFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBU0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEVBQUE7S0FBQSx5RUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSx5RUFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtBQU5KOztBQVNBO0VBQ0ksNERBQUE7RUFDQSxZQUFBO0FBTko7O0FBUUE7RUFDSSw0REFBQTtFQUNBLFlBQUE7QUFMSjs7QUFRQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksUUFBQTtBQUxKOztBQU9BO0VBQ0ksU0FBQTtBQUpKOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQUtBO0VBQ0ksVUFBQTtBQUZKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NFUEFSQURPUiBUSVRVTE9cbi5zZXBhcmF0b3ItdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGU6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlOm5vdCg6ZW1wdHkpOjpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNlcGFyYXRvci10aXRsZTpub3QoOmVtcHR5KTo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vL1NlcGFyYWRvciBWQUxPUkFOVFxuLnNlcGFyYXRvci10aXRsZS12YWxvcmFudC1uZXdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjQzLDY4LDgzLDEpO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLXZhbG9yYW50LW5ld3M6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGUtdmFsb3JhbnQtbmV3czo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjQzLDY4LDgzLDEpO1xufVxuXG4uc2VwYXJhdG9yLXRpdGxlLXZhbG9yYW50LW5ld3M6OmJlZm9yZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtdmFsb3JhbnQtbmV3czpub3QoOmVtcHR5KTo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vL1NlcGFyYWRvciBMT0xcbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDEyNSw5MiwyOCk7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmJlZm9yZSxcbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTI1LDkyLDI4KTtcbn1cblxuLnNlcGFyYXRvci10aXRsZS1sb2wtbmV3czpub3QoOmVtcHR5KTo6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZXBhcmF0b3ItdGl0bGUtbG9sLW5ld3M6OmFmdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDEwJTtcbn1cblxuLndpdGgtbGluZWFyLWdyYWRpZW50IHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyM2RlZywgcmdiYSgwLDAsMCwxKSAyMSUsIHJnYmEoMCwyNTUsMjU1LDEpKTE7XG59XG5cbi8vTGVhZ3VlIG9mIExlZ2VuZHNcbi53aXRoLWxpbmVhci1ncmFkaWVudC1sb2wge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzIzZGVnLCByZ2JhKDE5NCwxNDMsNDQsMSkgMCUsIHJnYmEoODMsOTEsMjUwLDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLWxvbHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsMzMsNDcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyMCwzMyw0NywxKSAwJSwgcmdiYSg1MCwzNywxMiwxKSAxMDAlKTtcbn1cblxuLmJhY2tncm91bmQtYnRuLWxvbHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI1LDkyLDI4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTI1LDkyLDI4LDEpIDAlLCByZ2JhKDE0MCwxMDMsMzEsMSkgMTAwJSk7XG59XG4uaG92ZXItYnRuLWxvbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTksNDQsMTQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy9WQUxPUkFOVFxuLndpdGgtbGluZWFyLWdyYWRpZW50LXZhbG9yYW50IHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgcmdiYSgyNDMsNjgsODMsMSkgMTUlLCByZ2JhKDgwLDI1LDI5LDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLXZhbG9yYW50e1xuICAgIGJhY2tncm91bmQ6IHJnYigyNSw4LDEwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjM4ZGVnLCByZ2JhKDI1LDgsMTAsMSkgMCUsIHJnYmEoNTcsMTYsMjAsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi12YWxvcmFudHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTc1LDUwLDYxKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTc1LDUwLDYxLDEpIDAlLCByZ2JhKDE3Nyw1MCw2MSwxKSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ0bi12YWxvcmFudDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTE1LDMzLDQwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8vQ2FsbCBPZiBEdXR5XG4ud2l0aC1saW5lYXItZ3JhZGllbnQtY29kIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgcmdiYSgxMTQsMTUyLDE1NiwxKSAwJSwgcmdiYSgyMTYsMjMxLDIzNCwxKSA1MCUsIHJnYmEoMTE0LDE1MiwxNTYsMSkpMTtcbn1cblxuLmJhY2tncm91bmQtY29ke1xuICAgIGJhY2tncm91bmQ6IHJnYigzNSw0Niw0Nyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOGRlZywgcmdiYSgzNSw0Niw0NywxKSAwJSwgcmdiYSg4NCw4OSw4OCwxKSA1MSUsIHJnYmEoMzUsNDYsNDcsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi1jb2R7XG4gICAgYmFja2dyb3VuZDogcmdiKDc1LDk5LDEwMSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDc1LDk5LDEwMSwxKSAwJSwgcmdiYSg3OCwxMDIsMTA1LDEpIDEwMCUpO1xufVxuXG4uaG92ZXItYnRuLWNvZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDcsNjEsNjIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vL0ZJRkFcbi53aXRoLWxpbmVhci1ncmFkaWVudC1maWZhIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgcmdiYSg4NiwxNTMsMjI0LDEpIDAlLCByZ2JhKDExMCwxMDEsMjM3LDEpIDQ2JSwgcmdiYSgxOTIsMzIsMjUwLDEpKTE7XG59XG5cbi5iYWNrZ3JvdW5kLWZpZmF7XG4gICAgYmFja2dyb3VuZDogcmdiKDM1LDQ2LDQ3KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCByZ2JhKDM1LDQ2LDQ3LDEpIDAlLCByZ2JhKDM3LDIwLDY2LDEpIDUwJSwgcmdiYSg1OCwxMSw3NSwxKSAxMDAlKTtcbn1cblxuLmJhY2tncm91bmQtYnRuLWZpZmF7XG4gICAgYmFja2dyb3VuZDogcmdiKDc4LDcyLDE2OCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDc4LDcyLDE2OCwxKSAwJSwgcmdiYSg2NCwxMDUsMTYyLDEpIDUwJSwgcmdiYSg4Niw2NCwxNjcsMSkgMTAwJSk7XG59XG5cbi5ob3Zlci1idG4tZmlmYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTAsNjAsMTE1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWctMjAwcHh7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaW1nLTEwMHB4e1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmltZy1kaXNjb3JkLWJhbm5lcntcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWVudmlhcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTM2LDAsMTM4LDEpIDAlLCByZ2JhKDQ0LDE2NiwxNjcsMSkgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1lbnZpYXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDY4LDAsNjksMSkgMCUsIHJnYmEoMjcsMTAxLDEwMiwxKSAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cbi50b3AtMjB7XG4gICAgdG9wOiAyMCU7XG59XG4ubGVmdC0yMHtcbiAgICBsZWZ0OiAyMCU7XG59XG4uYm90dG9tLTIwe1xuICAgIGJvdHRvbTogMjAlO1xufVxuLnJpZ2h0LTIwe1xuICAgIHJpZ2h0OiAyMCU7XG59Il19 */"] });


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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function CabeceraComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0Mi cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faUser);
} }
function CabeceraComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0Log-in / Registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faUser);
} }
function CabeceraComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CabeceraComponent_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0Salir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faExit);
} }
function CabeceraComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0Mi cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faUser);
} }
function CabeceraComponent_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0Log-in / Registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faUser);
} }
function CabeceraComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CabeceraComponent_li_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0Salir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r5.faExit);
} }
class CabeceraComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
        this.faExit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"];
        //Funciones para el menu
        this.desplegarMenu = () => {
            document.getElementById('lista-movil-hijo').style.display = "block";
            document.getElementById('menu-icon-open').classList.remove('visible');
            document.getElementById('menu-icon-open').classList.add('oculto');
            document.getElementById('menu-icon-close').style.cssText = '';
            document.getElementById('menu-icon-close').style.cssText = 'display: block !important';
            document.getElementById('menu-icon-close').classList.add('visible');
            document.getElementById('lista-movil-padre').classList.remove('d-none');
            document.getElementById('lista-movil-hijo').classList.remove('contraer');
            document.getElementById('lista-movil-hijo').classList.add('desplegar');
        };
        this.contraerMenu = () => {
            document.getElementById('lista-movil-hijo').style.display = "none";
            document.getElementById('menu-icon-close').style.cssText = '';
            document.getElementById('menu-icon-close').style.cssText = 'display: none !important';
            document.getElementById('menu-icon-open').classList.remove('oculto');
            document.getElementById('menu-icon-open').classList.add('visible');
            document.getElementById('lista-movil-padre').classList.add('d-none');
            document.getElementById('lista-movil-hijo').classList.remove('desplegar');
            document.getElementById('lista-movil-hijo').classList.add('contraer');
        };
        this.logOut = () => {
            this.user.logOut().subscribe((response) => {
                this.resetVal();
                this.loged = false;
                this.router.navigate(['/home']);
            });
        };
        this.resetVal = () => {
            this.user.nombre = undefined;
            this.user.apellidos = undefined;
            this.user.edad = undefined;
            this.user.access_token = undefined;
            this.user.id = undefined;
            this.user.nombreUsuario = undefined;
            this.user.password = undefined;
            this.user.descripcion = undefined;
            this.user.pais = undefined;
            this.user.estado = undefined;
            this.user.estado = undefined;
            this.user.verificado = undefined;
            this.user.rol = undefined;
            sessionStorage.removeItem(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].SESSION_STORAGE_TOKEN);
            sessionStorage.removeItem(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].SESSION_STORAGE_USER);
        };
        if (sessionStorage.getItem(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].SESSION_STORAGE_USER)) {
            this.loged = true;
        }
    }
    ngOnInit() {
        document.getElementById('menu-icon-close').style.cssText = 'display: none !important';
        document.getElementById('lista-pc-padre').style.cssText = 'display: none !important';
    }
}
CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) { return new (t || CabeceraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CabeceraComponent, selectors: [["app-cabecera"]], decls: 45, vars: 6, consts: [[1, "row", "m-0", "sticky-top", "background-black", 2, "height", "60px"], [1, "col-2"], ["href", "/", 1, "navbar-brand"], ["src", "../../assets/img/LOGO_GG_negro.png", "alt", "GG_Logo", 1, "img-fluid", 2, "width", "50px"], ["id", "menu-icon-movil", 1, "col-10", "d-flex", "justify-content-end"], ["id", "menu-icon-open", 1, "btn", "d-flex", "align-self-center", 3, "click"], ["src", "../../../assets/img/menu-icon2.png", 2, "width", "25px", "height", "25px"], ["id", "menu-icon-close", 1, "btn", "d-flex", "align-self-center", 3, "click"], ["src", "../../../assets/img/cerrar-menu.png", 2, "width", "25px", "height", "25px"], ["id", "lista-pc-padre", 1, "col-10", "align-self-center", "d-flex", "justify-content-end"], ["id", "lista-pc-hijo", 1, "m-0", "list-inline", "font-Ethnocentric"], [1, "my-3"], ["routerLink", "/torneos", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], ["routerLink", "/juegos", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-azul"], ["routerLink", "/foro", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], ["routerLink", "/glitchgaming", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-azul"], ["class", "text-normal text-white m-0 mx-3 p-0 py-2 h6 hover-rosa", "routerLink", "/perfilPersonal", 4, "ngIf"], ["class", "text-normal text-white m-0 mx-3 p-0 py-2 h6 hover-rosa", "routerLink", "/login", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], ["id", "lista-movil-padre", 1, "col-12", "d-flex", "justify-content-end"], ["id", "lista-movil-hijo", 1, "m-0", "list-inline", "font-Ethnocentric"], ["routerLink", "/perfilPersonal", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], [3, "icon"], ["routerLink", "/login", 1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-rosa"], [1, "text-normal", "text-white", "m-0", "mx-3", "p-0", "py-2", "h6", "hover-azul", 2, "cursor", "pointer", 3, "click"]], template: function CabeceraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CabeceraComponent_Template_button_click_5_listener() { return ctx.desplegarMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CabeceraComponent_Template_button_click_7_listener() { return ctx.contraerMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Torneos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Foro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Glitch Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CabeceraComponent_a_24_Template, 3, 1, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CabeceraComponent_a_25_Template, 3, 1, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CabeceraComponent_li_26_Template, 4, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Torneos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Foro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Glitch Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CabeceraComponent_a_42_Template, 3, 1, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CabeceraComponent_a_43_Template, 3, 1, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CabeceraComponent_li_44_Template, 4, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loged);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".sticky-top[_ngcontent-%COMP%] {\n  position: -moz-sticky !important;\n  position: -o-sticky !important;\n  position: -ms-sticky !important;\n  position: sticky !important;\n}\n\n.text-normal[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.hover-rosa[_ngcontent-%COMP%]:hover {\n  color: #F900FF !important;\n}\n\n.hover-azul[_ngcontent-%COMP%]:hover {\n  color: #3EFEFF !important;\n}\n\n#lista-pc-padre[_ngcontent-%COMP%]   #lista-pc-hijo[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n#menu-icon-movil[_ngcontent-%COMP%]   .cerrado[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n#lista-movil-padre[_ngcontent-%COMP%]   #lista-movil-hijo[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#lista-movil-hijo.desplegar[_ngcontent-%COMP%] {\n  display: block !important;\n  position: absolute;\n  right: 0% !important;\n  top: 60px;\n  background-color: #000;\n  height: 100vh;\n  transition: all 1s ease-in;\n}\n\n#lista-movil-hijo.contraer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(0% - 200px) !important;\n  top: 60px;\n  background-color: #000;\n  height: 100vh;\n  transition: all 1s ease-out;\n  display: none;\n}\n\n#menu-icon-close.visible[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n#menu-icon-open.visible[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n#menu-icon-close.oculto[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n#menu-icon-open.oculto[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  vertical-align: middle !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n  background-color: transparent !important;\n  border: 1px solid transparent !important;\n  padding: 0.375rem 0.75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.25rem !important;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhYmVjZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFJRTtFQUNFLHdCQUFBO0FBREo7O0FBTUU7RUFDRSx3QkFBQTtBQUhKOztBQVFFO0VBQ0UsYUFBQTtBQUxKOztBQVNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBO0VBQ0Msd0JBQUE7QUFORDs7QUFTQTtFQUNFLHdCQUFBO0FBTkY7O0FBU0E7RUFDRSx3QkFBQTtBQU5GOztBQVNBO0VBQ0Usd0JBQUE7QUFORjs7QUFTQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdKQUFBO0FBTkYiLCJmaWxlIjoiY2FiZWNlcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtbW96LXN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLW8tc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtbXMtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbm9ybWFse1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ob3Zlci1yb3NhOmhvdmVye1xuICAgIGNvbG9yOiAjRjkwMEZGICFpbXBvcnRhbnQ7XG59XG5cbi5ob3Zlci1henVsOmhvdmVye1xuICAgIGNvbG9yOiAjM0VGRUZGICFpbXBvcnRhbnQ7XG59XG5cblxuI2xpc3RhLXBjLXBhZHJle1xuICAjbGlzdGEtcGMtaGlqb3tcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuI21lbnUtaWNvbi1tb3ZpbHtcbiAgLmNlcnJhZG97XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbiNsaXN0YS1tb3ZpbC1wYWRyZXtcbiAgI2xpc3RhLW1vdmlsLWhpam97XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4jbGlzdGEtbW92aWwtaGlqby5kZXNwbGVnYXJ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XG4gIHRvcDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW47XG59XG5cbiNsaXN0YS1tb3ZpbC1oaWpvLmNvbnRyYWVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiBjYWxjKDAlIC0gMjAwcHgpICFpbXBvcnRhbnQ7XG4gIHRvcDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWVudS1pY29uLWNsb3NlLnZpc2libGV7XG4gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLW9wZW4udmlzaWJsZXtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLWNsb3NlLm9jdWx0b3tcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jbWVudS1pY29uLW9wZW4ub2N1bHRve1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG59Il19 */"] });


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
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UavU":
/*!*******************************************************!*\
  !*** ./src/app/components/torneo/torneo.component.ts ***!
  \*******************************************************/
/*! exports provided: TorneoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoComponent", function() { return TorneoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/torneo.service */ "VQv1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TorneoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Prize Pool");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A1Fin de inscripciones!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "N\u00FAmero de equipos inscritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A1Comienzo del torneo:!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "INSCRIBETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const torneo_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("col-11 col-md-5 m-3 p-3 with-linear-gradient-", i_r2, " background-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/juegos/", i_r2, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "premio", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", torneo_r1.premio, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "finInscripciones", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", torneo_r1.diaFin, "/", torneo_r1.mesFin, "/", torneo_r1.anioFin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "numInscritos", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](torneo_r1.equiposInscritos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "comienzoTorneo", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", torneo_r1.diaComienzo, "/", torneo_r1.mesComienzo, "/", torneo_r1.anioComienzo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("btn background-btn-", i_r2, " text-white w-50 p-2 h4 hover-btn-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "inscribir", i_r2, "");
} }
class TorneoComponent {
    constructor(torneo) {
        this.torneo = torneo;
        //Funcion que carga los ultimos torneos publicados
        this.cargarUltimosTorneos = () => {
            this.torneo.getUltimosTorneos().subscribe((response) => {
                this.torneos = response['ultimosTorneos'];
            });
        };
    }
    ngOnInit() {
        this.cargarUltimosTorneos();
    }
}
TorneoComponent.ɵfac = function TorneoComponent_Factory(t) { return new (t || TorneoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_1__["TorneoService"])); };
TorneoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TorneoComponent, selectors: [["app-torneo"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "row", "m-0", "p-0"], [1, "col-12"], [1, "text-center"], ["alt", "LOGO", 1, "img-200px", 3, "src"], [1, "col-12", "my-4", "text-center"], [1, "m-0"], [1, "m-0", 3, "id"], [1, "col-6", "my-4", "text-center"], [1, "d-block"], [3, "id"], [3, "name"]], template: function TorneoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TorneoComponent_div_0_Template, 32, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.torneos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".with-linear-gradient-0[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n     border-image: linear-gradient(323deg, #c28f2c 0%, #535bfa) 1;\n}\n\n.background-0[_ngcontent-%COMP%] {\n  background: #14212f;\n  background: linear-gradient(45deg, #14212f 0%, #32250c 100%);\n}\n\n.background-btn-0[_ngcontent-%COMP%] {\n  background: #7d5c1c;\n  background: linear-gradient(41deg, #7d5c1c 0%, #8c671f 100%);\n}\n\n.hover-btn-0[_ngcontent-%COMP%]:hover {\n  background: #3b2c0e;\n  color: white;\n}\n\n.with-linear-gradient-1[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n     border-image: linear-gradient(248deg, #f34453 15%, #50191d) 1;\n}\n\n.background-1[_ngcontent-%COMP%] {\n  background: #19080a;\n  background: linear-gradient(238deg, #19080a 0%, #391014 100%);\n}\n\n.background-btn-1[_ngcontent-%COMP%] {\n  background: #af323d;\n  background: linear-gradient(41deg, #af323d 0%, #b1323d 100%);\n}\n\n.hover-btn-1[_ngcontent-%COMP%]:hover {\n  background: #732128;\n  color: white;\n}\n\n.with-linear-gradient-2[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n     border-image: linear-gradient(141deg, #72989c 0%, #d8e7ea 50%, #72989c) 1;\n}\n\n.background-2[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(238deg, #232e2f 0%, #545958 51%, #232e2f 100%);\n}\n\n.background-btn-2[_ngcontent-%COMP%] {\n  background: #4b6365;\n  background: linear-gradient(41deg, #4b6365 0%, #4e6669 100%);\n}\n\n.hover-btn-2[_ngcontent-%COMP%]:hover {\n  background: #2f3d3e;\n  color: white;\n}\n\n.with-linear-gradient-3[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  -o-border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n     border-image: linear-gradient(141deg, #5699e0 0%, #6e65ed 46%, #c020fa) 1;\n}\n\n.background-3[_ngcontent-%COMP%] {\n  background: #232e2f;\n  background: linear-gradient(321deg, #232e2f 0%, #251442 50%, #3a0b4b 100%);\n}\n\n.background-btn-3[_ngcontent-%COMP%] {\n  background: #4e48a8;\n  background: linear-gradient(41deg, #4e48a8 0%, #4069a2 50%, #5640a7 100%);\n}\n\n.hover-btn-3[_ngcontent-%COMP%]:hover {\n  background: #323c73;\n  color: white;\n}\n\n.img-200px[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.img-100px[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rvcm5lby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrREFBQTtLQUFBLDREQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLDREQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLDREQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtLQUFBLDZEQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLDZEQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLDREQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtLQUFBLHlFQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLDBFQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLDREQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtLQUFBLHlFQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLDBFQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLHlFQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISiIsImZpbGUiOiJ0b3JuZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0xlYWd1ZSBvZiBMZWdlbmRzXG4ud2l0aC1saW5lYXItZ3JhZGllbnQtMCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjNkZWcsIHJnYmEoMTk0LDE0Myw0NCwxKSAwJSwgcmdiYSg4Myw5MSwyNTAsMSkpMTtcbn1cblxuLmJhY2tncm91bmQtMHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsMzMsNDcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyMCwzMyw0NywxKSAwJSwgcmdiYSg1MCwzNywxMiwxKSAxMDAlKTtcbn1cblxuLmJhY2tncm91bmQtYnRuLTB7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyNSw5MiwyOCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDEyNSw5MiwyOCwxKSAwJSwgcmdiYSgxNDAsMTAzLDMxLDEpIDEwMCUpO1xufVxuLmhvdmVyLWJ0bi0wOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYig1OSw0NCwxNCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vL1ZBTE9SQU5UXG4ud2l0aC1saW5lYXItZ3JhZGllbnQtMSB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsIHJnYmEoMjQzLDY4LDgzLDEpIDE1JSwgcmdiYSg4MCwyNSwyOSwxKSkxO1xufVxuXG4uYmFja2dyb3VuZC0xe1xuICAgIGJhY2tncm91bmQ6IHJnYigyNSw4LDEwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjM4ZGVnLCByZ2JhKDI1LDgsMTAsMSkgMCUsIHJnYmEoNTcsMTYsMjAsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi0xe1xuICAgIGJhY2tncm91bmQ6IHJnYigxNzUsNTAsNjEpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MWRlZywgcmdiYSgxNzUsNTAsNjEsMSkgMCUsIHJnYmEoMTc3LDUwLDYxLDEpIDEwMCUpO1xufVxuXG4uaG92ZXItYnRuLTE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiKDExNSwzMyw0MCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vL0NhbGwgT2YgRHV0eVxuLndpdGgtbGluZWFyLWdyYWRpZW50LTIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCByZ2JhKDExNCwxNTIsMTU2LDEpIDAlLCByZ2JhKDIxNiwyMzEsMjM0LDEpIDUwJSwgcmdiYSgxMTQsMTUyLDE1NiwxKSkxO1xufVxuXG4uYmFja2dyb3VuZC0ye1xuICAgIGJhY2tncm91bmQ6IHJnYigzNSw0Niw0Nyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOGRlZywgcmdiYSgzNSw0Niw0NywxKSAwJSwgcmdiYSg4NCw4OSw4OCwxKSA1MSUsIHJnYmEoMzUsNDYsNDcsMSkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWJ0bi0ye1xuICAgIGJhY2tncm91bmQ6IHJnYig3NSw5OSwxMDEpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MWRlZywgcmdiYSg3NSw5OSwxMDEsMSkgMCUsIHJnYmEoNzgsMTAyLDEwNSwxKSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ0bi0yOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYig0Nyw2MSw2Mik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi8vRklGQVxuLndpdGgtbGluZWFyLWdyYWRpZW50LTMge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCByZ2JhKDg2LDE1MywyMjQsMSkgMCUsIHJnYmEoMTEwLDEwMSwyMzcsMSkgNDYlLCByZ2JhKDE5MiwzMiwyNTAsMSkpMTtcbn1cblxuLmJhY2tncm91bmQtM3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsNDYsNDcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjFkZWcsIHJnYmEoMzUsNDYsNDcsMSkgMCUsIHJnYmEoMzcsMjAsNjYsMSkgNTAlLCByZ2JhKDU4LDExLDc1LDEpIDEwMCUpO1xufVxuXG4uYmFja2dyb3VuZC1idG4tM3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsNzIsMTY4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoNzgsNzIsMTY4LDEpIDAlLCByZ2JhKDY0LDEwNSwxNjIsMSkgNTAlLCByZ2JhKDg2LDY0LDE2NywxKSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ0bi0zOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYig1MCw2MCwxMTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltZy0yMDBweHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5pbWctMTAwcHh7XG4gICAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "VQv1":
/*!********************************************!*\
  !*** ./src/app/services/torneo.service.ts ***!
  \********************************************/
/*! exports provided: TorneoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoService", function() { return TorneoService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TorneoService {
    constructor(http) {
        this.http = http;
        this.getUltimosTorneos = () => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'ultimosTorneos';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' }),
            };
            return this.http.get(url, extra);
        };
    }
}
TorneoService.ɵfac = function TorneoService_Factory(t) { return new (t || TorneoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TorneoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TorneoService, factory: TorneoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vn78":
/*!**************************************************!*\
  !*** ./src/environments/environment.pre-prod.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    url_api: 'https://back-glitchgaming.herokuapp.com/public/api/',
    APP_NAME: 'Glitch Gaming',
    production: true
};


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _components_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/torneo/torneo.component */ "UavU");
/* harmony import */ var _components_noticia_noticia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/noticia/noticia.component */ "FkHG");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_perfil_personal_perfil_personal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/perfil-personal/perfil-personal.component */ "PO9+");
/* harmony import */ var _views_gestion_usuarios_gestion_usuarios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/gestion-usuarios/gestion-usuarios.component */ "OdXs");
/* harmony import */ var _views_foro_foro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/foro/foro.component */ "jzLA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__["CabeceraComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_torneo_torneo_component__WEBPACK_IMPORTED_MODULE_9__["TorneoComponent"],
        _components_noticia_noticia_component__WEBPACK_IMPORTED_MODULE_10__["NoticiaComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _views_perfil_personal_perfil_personal_component__WEBPACK_IMPORTED_MODULE_12__["PerfilPersonalComponent"],
        _views_gestion_usuarios_gestion_usuarios_component__WEBPACK_IMPORTED_MODULE_13__["GestionUsuariosComponent"],
        _views_foro_foro_component__WEBPACK_IMPORTED_MODULE_14__["ForoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "aVMo":
/*!******************************************!*\
  !*** ./src/app/services/foro.service.ts ***!
  \******************************************/
/*! exports provided: ForoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoService", function() { return ForoService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ForoService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.loadPreguntas = () => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'foro/getPreguntas';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }),
            };
            return this.http.get(url, extra);
        };
        this.responder = (respuesta) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'foro/setRespuesta';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, respuesta, extra);
        };
        this.deleteRespuesta = (pregunta) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'foro/deleteRespuesta';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, pregunta, extra);
        };
        this.addPregunta = (pregunta) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'foro/addPregunta';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, pregunta, extra);
        };
    }
}
ForoService.ɵfac = function ForoService_Factory(t) { return new (t || ForoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
ForoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ForoService, factory: ForoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jzLA":
/*!**********************************************!*\
  !*** ./src/app/views/foro/foro.component.ts ***!
  \**********************************************/
/*! exports provided: ForoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoComponent", function() { return ForoComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin-service.service */ "1Isg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_foro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/foro.service */ "aVMo");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










function ForoComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abrir nuevo tema");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForoComponent_div_17_div_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForoComponent_div_17_div_10_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const respuesta_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.deleteRespuesta(respuesta_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", respuesta_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r9.faTrash);
} }
function ForoComponent_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ForoComponent_div_17_div_10_button_5_Template, 2, 2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r7.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r7.usuarioResponde.nombreUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.user.isLoged && ctx_r4.user.rol == 1 || ctx_r4.user.rol == 2 || respuesta_r7.usuarioResponde.nombreUsuario == ctx_r4.user.nombreUsuario);
} }
function ForoComponent_div_17_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForoComponent_div_17_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const pregunta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.enviarRespuesta(pregunta_r2.pregunta.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForoComponent_div_17_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Para comentar en el foro tienes que ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "iniciar sesion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " primero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Creador: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ForoComponent_div_17_div_10_Template, 6, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ForoComponent_div_17_button_13_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ForoComponent_div_17_small_14_Template, 5, 0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pregunta_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pregunta_r2.pregunta.usuarioCreador.nombreUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pregunta_r2.pregunta.pregunta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.preguntas[i_r3].respuestas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "respuesta", pregunta_r2.pregunta.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user.isLoged);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.user.isLoged);
} }
class ForoComponent {
    constructor(router, user, admin, formBuilder, foro) {
        this.router = router;
        this.user = user;
        this.admin = admin;
        this.formBuilder = formBuilder;
        this.foro = foro;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrashAlt"];
        this.cargarPreguntas = () => {
            this.foro.loadPreguntas().subscribe((response) => {
                this.preguntas = response['listaPreguntas'];
                console.log(this.preguntas);
                this.respuestas = this.preguntas.respuestas;
                this.preguntas.forEach(pregunta => {
                    // console.log(pregunta.pregunta);
                });
            });
        };
        this.enviarRespuesta = (id) => {
            const respuesta = {
                "idUsuarioRespuesta": this.user.id,
                "idPregunta": id,
                "respuesta": document.getElementById('respuesta' + id).value
            };
            console.log(respuesta);
            this.foro.responder(respuesta).subscribe((response) => {
                document.getElementById('respuesta' + id).innerText = "";
                this.cargarPreguntas();
                this.router.navigate(['/foro']);
            });
        };
        this.deleteRespuesta = (id) => {
            const pregunta = {
                id: id
            };
            this.foro.deleteRespuesta(pregunta).subscribe((response) => {
                this.cargarPreguntas();
                this.router.navigate(['/foro']);
            });
        };
        this.crearTema = () => {
            const nuevaPregunta = {
                idCreador: this.user.id,
                descripcion: document.getElementById('nuevoTema').value
            };
            this.foro.addPregunta(nuevaPregunta).subscribe((response) => {
                document.getElementById('nuevoTema').innerText = "";
                this.cargarPreguntas();
                this.router.navigate(['/foro']);
            });
        };
    }
    ngOnInit() {
        this.cargarPreguntas();
    }
}
ForoComponent.ɵfac = function ForoComponent_Factory(t) { return new (t || ForoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_foro_service__WEBPACK_IMPORTED_MODULE_6__["ForoService"])); };
ForoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForoComponent, selectors: [["app-foro"]], decls: 18, vars: 2, consts: [["onload", "comprobarMedia()"], [1, "row", "m-0", "p-0", "d-flex", "justify-content-center"], [1, "col-10", "my-3", "py-1", "bg-black", "rounded"], ["class", "btn btn-enviar", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "background-black"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], ["rows", "10", "id", "nuevoTema", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["class", "row m-0 p-0 d-flex justify-content-center", 4, "ngFor", "ngForOf"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-enviar"], [1, "col-10", "my-5", "py-1", "bg-black", "rounded"], [1, "col-12", "m-0"], [1, "d-block"], [1, "fw-bold"], [1, "my-1"], ["class", "col-10 my-3 bg-white text-dark", 4, "ngFor", "ngForOf"], [1, "col-10", "my-3", "bg-white", "text-dark", "d-flex", "justify-content-center"], ["rows", "5", 1, "form-control", "my-1", 3, "id"], ["class", "w-25 my-1 btn btn-enviar", 3, "click", 4, "ngIf"], ["class", "text-center my-1", 4, "ngIf"], [1, "col-10", "my-3", "bg-white", "text-dark"], [1, "fw-bold", "d-block"], ["class", "btn m-0 my-2 p-0", 3, "id", "click", 4, "ngIf"], [1, "btn", "m-0", "my-2", "p-0", 3, "id", "click"], [1, "btn", "btn-enviar", 3, "icon"], [1, "w-25", "my-1", "btn", "btn-enviar", 3, "click"], [1, "text-center", "my-1"], ["href", "/login"]], template: function ForoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-cabecera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ForoComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Abrir tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForoComponent_Template_button_click_15_listener() { return ctx.crearTema(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Crear tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ForoComponent_div_17_Template, 15, 6, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.isLoged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.preguntas);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]], styles: [".bg-black[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.btn-enviar[_ngcontent-%COMP%] {\n  background: linear-gradient(41deg, #88008a 0%, #2ca6a7 100%);\n  color: white;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(41deg, #440045 0%, #1b6566 100%);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksNERBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0REFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJmb3JvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuLWVudmlhcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDFkZWcsIHJnYmEoMTM2LDAsMTM4LDEpIDAlLCByZ2JhKDQ0LDE2NiwxNjcsMSkgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1lbnZpYXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQxZGVnLCByZ2JhKDY4LDAsNjksMSkgMCUsIHJnYmEoMjcsMTAxLDEwMiwxKSAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ "mTOY":
/*!*********************************************!*\
  !*** ./src/app/services/noticia.service.ts ***!
  \*********************************************/
/*! exports provided: NoticiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaService", function() { return NoticiaService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NoticiaService {
    constructor(http) {
        this.http = http;
        this.getUltimasNoticias = () => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'ultimasNoticias';
            ;
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' }),
            };
            return this.http.get(url, extra);
        };
    }
}
NoticiaService.ɵfac = function NoticiaService_Factory(t) { return new (t || NoticiaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NoticiaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NoticiaService, factory: NoticiaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.pre-prod */ "Vn78");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor(http) {
        this.http = http;
        this.register = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'register';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.login = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'login';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.logOut = () => {
            this.isLoged = false;
            const url = `${src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api}logout`;
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN) }),
            };
            return this.http.post(url, '', extra);
        };
        this.editarEmail = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'editEmail';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.editarUsername = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'editUsername';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.editarPassword = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'editPassword';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.editarDescription = (user) => {
            const url = src_environments_environment_pre_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + 'editDescription';
            const extra = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
                }),
            };
            return this.http.post(url, user, extra);
        };
        this.set = (response) => {
            console.log(response);
            if (sessionStorage.getItem(UserService.SESSION_STORAGE_USER)) {
                const user = JSON.parse(sessionStorage.getItem(UserService.SESSION_STORAGE_USER));
                if (!response.hasOwnProperty('id'))
                    response.id = user.id;
                if (!response.hasOwnProperty('nombre'))
                    response.nombre = user.nombre;
                if (!response.hasOwnProperty('apellidos'))
                    response.apellidos = user.apellidos;
                if (!response.hasOwnProperty('edad'))
                    response.edad = user.edad;
                if (!response.hasOwnProperty('email'))
                    response.email = user.email;
                if (!response.hasOwnProperty('rol'))
                    response.rol = user.rol;
                if (!response.hasOwnProperty('password'))
                    response.password = user.password;
                if (!response.hasOwnProperty('pais'))
                    response.pais = user.pais;
                if (!response.hasOwnProperty('nombreUsuario'))
                    response.nombreUsuario = user.nombreUsuario;
                if (!response.hasOwnProperty('estado'))
                    response.estado = user.estado;
                if (!response.hasOwnProperty('verificado'))
                    response.verificado = user.verificado;
                if (!response.hasOwnProperty('descripcion'))
                    response.descripcion = user.descripcion;
            }
            this.id = response.id;
            this.nombre = response.nombre;
            this.apellidos = response.apellidos;
            this.edad = response.edad;
            this.email = response.email;
            this.password = response.password;
            this.pais = response.pais;
            this.nombreUsuario = response.nombreUsuario;
            this.access_token = response.access_token;
            this.estado = response.estado;
            this.verificado = response.verificado;
            this.descripcion = response.descripcion;
            this.rol = response.rol;
            this.isLoged = true;
            if (response.hasOwnProperty('access_token')) {
                // console.log(this.access_token);
                this.access_token = response.acces_token;
                sessionStorage.setItem(UserService.SESSION_STORAGE_TOKEN, response.access_token);
            }
            sessionStorage.setItem(UserService.SESSION_STORAGE_USER, JSON.stringify(response));
        };
        if (sessionStorage.getItem(UserService.SESSION_STORAGE_USER)) {
            var user = JSON.parse(sessionStorage.getItem(UserService.SESSION_STORAGE_USER));
            this.set(user);
        }
    }
}
//Datos del usuario logueado
UserService.SESSION_STORAGE_USER = 'GLITCHGAMING_USER';
UserService.SESSION_STORAGE_TOKEN = 'GLITCHGAMING_KEY';
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_perfil_personal_perfil_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/perfil-personal/perfil-personal.component */ "PO9+");
/* harmony import */ var _views_gestion_usuarios_gestion_usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/gestion-usuarios/gestion-usuarios.component */ "OdXs");
/* harmony import */ var _views_foro_foro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/foro/foro.component */ "jzLA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'perfilPersonal', component: _views_perfil_personal_perfil_personal_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPersonalComponent"] },
    { path: 'glitchgaming', component: _views_gestion_usuarios_gestion_usuarios_component__WEBPACK_IMPORTED_MODULE_4__["GestionUsuariosComponent"] },
    { path: 'foro', component: _views_foro_foro_component__WEBPACK_IMPORTED_MODULE_5__["ForoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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