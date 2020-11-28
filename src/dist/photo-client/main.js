(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mike/Documents/jobs/temp/photo-client/src/main.ts */"zUnb");


/***/ }),

/***/ "2AiU":
/*!*************************************************************!*\
  !*** ./src/app/components/drag-drop/drag-drop.component.ts ***!
  \*************************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user.service */ "CFL1");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "BuFo");







function DragDropComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragDropComponent_div_2_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose From Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DragDropComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DragDropComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileDropped", function DragDropComponent_div_2_Template_div_fileDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragDropComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please drag and drop photos here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "File format should be .jpg | .png | .jpeg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DragDropComponent_div_2_div_8_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DragDropComponent_div_2_div_9_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fileArr.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fileArr.length > 0);
} }
function DragDropComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.progress, "%");
} }
function DragDropComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileDropped", function DragDropComponent_div_5_Template_div_fileDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragDropComponent_div_5_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change File");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.sanitize(file_r12["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r12.item.name);
} }
function DragDropComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragDropComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clearFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DragDropComponent {
    constructor(fb, sanitizer, userService, homeComponent) {
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.homeComponent = homeComponent;
        this.fileArr = [];
        this.fileSkills = [];
        this.fileData = {};
        this.imgArr = [];
        this.fileObj = [];
        this.tags = null;
        this.progress = 0;
        this.form = this.fb.group({
            avatar: [null],
            desc: '',
            skills: [null]
        });
        console.log(localStorage.getItem('Id'));
    }
    ngOnInit() { }
    refreshImage() {
        this.homeComponent.getProtectedData();
    }
    clearFiles() {
        this.fileArr = [];
        this.fileObj = [];
    }
    clearForm() {
        this.form.reset();
    }
    upload() {
        console.log(this.fileArr.length);
        if (this.fileArr.length != 0 && this.tags != null) {
            // Set files form control
            this.form.patchValue({
                avatar: this.fileObj
            });
            this.form.get('avatar').updateValueAndValidity();
            this.form.get('skills').updateValueAndValidity();
            this.form.get('desc').updateValueAndValidity();
            let image_payload = {
                skills: this.fileSkills,
                desc: this.fileDesc,
            };
            console.log(this.form.value.skills);
            console.log(this.tags);
            // Upload to server
            this.userService.addFiles(this.form.value.avatar, this.form.value.desc, this.tags)
                .subscribe((event) => {
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                        console.log('Request has been made!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
                        console.log('Response header has been received!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                        this.progress = Math.round(event.loaded / event.total * 100);
                        this.msg = "Uploading!";
                        console.log(`Uploaded! ${this.progress}%`);
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                        console.log('File uploaded successfully!', event.body);
                        setTimeout(() => {
                            this.homeComponent.getProtectedData();
                            this.clearForm();
                            this.progress = 0;
                            this.fileArr = [];
                            this.fileObj = [];
                            this.msg = "File uploaded successfully!";
                        }, 1000);
                }
            });
        }
    }
    setFiles(e) {
        const fileListAsArray = Array.from(e);
        if (fileListAsArray.length != 0) {
            this.clearFiles();
            fileListAsArray.forEach((item, i) => {
                const file = e;
                const url = URL.createObjectURL(file[i]);
                this.imgArr.push(url);
                this.fileArr.push({ item, url: url });
            });
            this.fileArr.forEach((item) => {
                this.fileObj.push(item.item);
            });
            this.msg = "File Added!";
        }
    }
    setFileDesc(e) {
        const fileDesc = e;
        this.fileDesc = fileDesc;
    }
    setFileSkills(e) {
        const fileSkills = e;
        this.fileSkills = fileSkills;
    }
    setFileData() {
        this.fileData = {
            title: null,
            desc: null,
            url: null,
            skills: null,
        };
    }
    hideButton() {
        if (this.fileArr.length != 0) {
            return "primary-button";
        }
        else {
            return "locked-button";
        }
    }
    // Clean Url for showing image preview
    sanitize(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
DragDropComponent.ɵfac = function DragDropComponent_Factory(t) { return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"])); };
DragDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragDropComponent, selectors: [["app-drag-drop"]], decls: 17, vars: 6, consts: [[1, "w-100", "fileUploadWrapper"], [3, "formGroup", "submit"], ["class", "box", "appDragDropFileUpload", "", 3, "fileDropped", 4, "ngIf"], [4, "ngIf"], [1, "w-100"], ["appDragDropFileUpload", "", "class", "image-list", 3, "fileDropped", 4, "ngFor", "ngForOf"], [2, "margin-top", "20px"], ["appearance", "outline", 2, "width", "100%"], ["name", "desc", "formControlName", "desc", "matInput", ""], ["required", ""], ["style", "display:flex;padding-top:10px;", 4, "ngIf"], [1, "message"], ["type", "file", "name", "avatars", "hidden", "", 3, "change"], ["fileField", ""], ["appDragDropFileUpload", "", 1, "box", 3, "fileDropped"], [1, "box-content", 3, "click"], ["src", "../../../assets/img/upload.svg", 1, "icon-med"], [1, "subtitle", 2, "margin-top", "10px"], [1, "paragraph"], [1, "primary-button", 2, "margin-top", "20px", 3, "click"], [1, "progress-contain", "form-group"], ["role", "progressbar", 1, "progress", "progress-bar", "progress-bar-striped", "bg-success"], ["appDragDropFileUpload", "", 1, "image-list", 3, "fileDropped"], [2, "display", "flex", "flex", "1"], ["alt", "", 1, "profile", 3, "src"], [2, "display", "flex", "flex", "3", "flex-direction", "row"], [2, "flex", "3"], [1, "naked-button", 2, "flex", "1", 3, "click"], [2, "display", "flex", "padding-top", "10px"], [1, "cancel-button", 3, "click"], ["type", "submit", 1, "primary-button"]], template: function DragDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DragDropComponent_Template_form_submit_1_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DragDropComponent_div_2_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DragDropComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DragDropComponent_div_5_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tags", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DragDropComponent_div_12_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DragDropComponent_Template_input_change_15_listener($event) { return ctx.setFiles($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileArr.length === 0 && !ctx.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileArr.length != 0 && !ctx.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
    } }, styles: [".w-100[_ngcontent-%COMP%]{\n    width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctZHJvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImRyYWctZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMTAwe1xuICAgIHdpZHRoOjEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drag-drop',
                templateUrl: './drag-drop.component.html',
                styleUrls: ['./drag-drop.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }]; }, null); })();


/***/ }),

/***/ "2EwI":
/*!****************************************************!*\
  !*** ./src/app/drag-drop-file-upload.directive.ts ***!
  \****************************************************/
/*! exports provided: DragDropFileUploadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropFileUploadDirective", function() { return DragDropFileUploadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DragDropFileUploadDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = '#ffffff';
    }
    // Dragover Event
    dragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#e2eefd';
    }
    // Dragleave Event
    dragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
    }
    // Drop Event
    drop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
DragDropFileUploadDirective.ɵfac = function DragDropFileUploadDirective_Factory(t) { return new (t || DragDropFileUploadDirective)(); };
DragDropFileUploadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropFileUploadDirective, selectors: [["", "appDragDropFileUpload", ""]], hostVars: 2, hostBindings: function DragDropFileUploadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropFileUploadDirective_dragover_HostBindingHandler($event) { return ctx.dragOver($event); })("dragleave", function DragDropFileUploadDirective_dragleave_HostBindingHandler($event) { return ctx.dragLeave($event); })("drop", function DragDropFileUploadDirective_drop_HostBindingHandler($event) { return ctx.drop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background);
    } }, outputs: { fileDropped: "fileDropped" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropFileUploadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDragDropFileUpload]'
            }]
    }], null, { fileDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
        }], dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], dragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "43J6":
/*!********************************************************!*\
  !*** ./src/app/interceptors/httpconfig.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HttpConfigInterceptor {
    constructor() { }
    intercept(req, next) {
        // Get the auth token from  localstorage.
        const authToken = localStorage.getItem('Token');
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        if (authToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + authToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
        // send cloned request with header to the next handler.
    }
}
HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(); };
HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    baseURL: 'http://ten-k-photos.herokuapp.com/'
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Images :( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const img_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deletePost(img_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r2.createdAt.substring(0, 10));
} }
imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]];
class HomeComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.userdata = null;
        this.imageData = null;
        this.currentImageFilter = null;
    }
    getProtectedData() {
        this.user.getProtectedData().subscribe((data) => { this.userdata = data.user; console.log(data); });
        this.user.getImages().subscribe((data) => { this.imageData = data; console.log(data); });
    }
    deletePost(image_id) {
        let payload = image_id;
        console.log(payload);
        this.user.deletePost(payload).subscribe((data) => { this.getProtectedData(); console.log(data); });
    }
    createVideo() {
        let videoObj = {
            "title": 'Test1',
            "themeId": '599ec30b27855975ab36a1b9',
            scenes: []
        };
        for (let i of this.imageData.images) {
            videoObj.scenes.push({ "text": i.desc, "image": i.url });
        }
        console.log(videoObj);
        this.user.createVideo(videoObj).subscribe((data) => { console.log(data); });
    }
    filterImageData() {
        if (this.currentImageFilter != null) {
            return this.imageData.images.filter(a => a.skills.includes(this.currentImageFilter)).slice().reverse();
        }
        else
            return this.imageData.images.slice().reverse();
    }
    ngOnInit() {
        this.getProtectedData();
    }
    logout() {
        localStorage.removeItem('Token');
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 4, consts: [[1, "navbar"], ["href", "/", 1, "logo-container"], ["src", "../../../assets/img/10k-logomark.svg", "alt", "photo share", 1, "logo"], [1, "nav-links"], [1, "primary-button", 3, "click"], [1, "testClass"], [1, "contain-1100"], [1, "breathe", "left"], [2, "margin-bottom", "20px"], [1, "title"], [1, "paragraph"], [2, "width", "100% !important"], [2, "flex", "1"], ["appearance", "outline"], [3, "value", "valueChange"], ["value", "Focus"], ["value", "Leadership"], ["value", "Adapt"], ["value", "Support"], ["value", "Mindfullness"], ["value", "Discipline"], ["value", "Communication"], ["value", "Techincal"], ["value", "Learning"], [2, "max-height", "70vh", "overflow", "scroll"], [4, "ngIf"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap"], [4, "ngFor", "ngForOf"], [1, "imageContainer", 2, "position", "relative", "padding-right", "5px"], [1, "sq-200", 3, "src"], [1, "text", 2, "position", "absolute", "top", "5%", "left", "5%"], [1, "delete-button", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.createVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The most engaged employees were found to have these 10 skills. Start tracking your small steps towards finding your passion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-drag-drop", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sort by skill...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.currentImageFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Leadership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Adapt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mindfullness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Discipline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Techincal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 10, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to 10k Photos ", ctx.userdata.name.split(" ")[0], "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentImageFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterImageData().length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterImageData());
    } }, styles: [".sq-200[_ngcontent-%COMP%]{\n    height:200px;\n    width:200px;\n    padding:0px;\n    object-fit: cover;\n}\n.contain-1100[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    max-width:1350px;\n    \n}\n.text[_ngcontent-%COMP%]{\n    display:none;\n}\n.imageContainer[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{\n    display:unset;\n    \n}\n.imageContainer[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    filter: opacity(20%);\n}\n.one-third[_ngcontent-%COMP%]{\n    width:33%;\n}\n.breathe[_ngcontent-%COMP%]{\n    margin-left:40px;\n    margin-right: 40px;\n    \n    \n}\n.breathe-v[_ngcontent-%COMP%]{\n    padding-top:20px;\n    padding-bottom:20px;\n\n}\n.logo[_ngcontent-%COMP%]{\n    max-height:40px;\n    padding-top:0px;\n}\n.full-img[_ngcontent-%COMP%]{\n    background-image: url('login-dark.jpg');\n    height:100vh;\n}\n.right[_ngcontent-%COMP%]{\n    width:50% !important;\n    flex-direction:column;\n    display:flex;\n    flex:1;\n    align-items:center;\n    justify-content:center;\n}\n.left[_ngcontent-%COMP%]{\n    width:50% !important;\n    flex-direction:column;\n    \n    height:80vh;\n    display:flex;\n    flex:1;\n    align-items:flex-start;\n    justify-content:flex-start;\n}\n.form-contain[_ngcontent-%COMP%]{\n    max-width:450px;\n}\n.testClass[_ngcontent-%COMP%]{\n    width:100% !important;\n    display: column !important;\n    display:flex;\n    flex:1;\n    align-items:center;\n    justify-content:center;\n}\n.title[_ngcontent-%COMP%]{\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 120%;\n}\n.subtitle[_ngcontent-%COMP%]{\n    font-size: 18px;\n    font-weight: 600;\n}\n.paragraph[_ngcontent-%COMP%]{\n    line-height:160%;\n    font-size: 16px;\n    color:#717F8D;\n}\n.icon-large[_ngcontent-%COMP%]{\n    width:64px;\n    height:auto;\n}\n.icon-med[_ngcontent-%COMP%]{\n    width:48px;\n    height:auto;\n    margin-bottom:10px;\n}\nnav[_ngcontent-%COMP%] {\n    \n    background-color: transparent;\n    padding: 18px;\n    \n  }\n.navbar[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n  }\n.logo-container[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n.nav-links[_ngcontent-%COMP%] {\n    list-style: none;\n    display:flex;\n  }\n.primary-button[_ngcontent-%COMP%]{\n    background-color: #2637de;\n    color:#fff;\n    font-size:14px;\n    width:100%;\n    padding: 18px 24px;\n    border-radius:4px;\n    border: none;\n    cursor:pointer;\n}\n.naked-button[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color:#2637de;\n    font-size:14px;\n    width:100%;\n    padding: 18px 24px;\n    border-radius:4px;\n    border: none;\n    cursor:pointer;\n}\n.w-100[_ngcontent-%COMP%]{\n    width:100%;\n}\n.w-80[_ngcontent-%COMP%]{\n    width:80%;\n}\n.w-20[_ngcontent-%COMP%]{\n    width:20%;\n}\n.secondary-button[_ngcontent-%COMP%]{\n    background-color: #c4c7e4;\n    margin-right:1px;\n    color:#212121;\n    font-size:14px;\n    width:100%;\n    margin-right:20px;\n    padding: 18px 24px;\n    border-radius:4px;\n    border: none;\n    cursor:pointer;\n}\n.primary[_ngcontent-%COMP%]{\n    color:#2637de;\n}\n.primary-button[_ngcontent-%COMP%]:hover{\n    background-color: #3647df;\n    transition: background-color 200ms;\n}\n.text-link[_ngcontent-%COMP%]{\n    color:#212121;\n    text-decoration: none;\n}\n.space-top[_ngcontent-%COMP%]{\n    padding-top:20px;\n}\n.container-center[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    \n  }\n.align-item-middle[_ngcontent-%COMP%] {\n    \n    max-width:900px;\n  }\n.align-item-top[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n.align-item-bottom[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQTJEO0lBQzNELFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCOztJQUVyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsYUFBYTs7RUFFZjtBQUVBO01BQ0ksYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7RUFDdkI7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7RUFFekI7QUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcS0yMDB7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNvbnRhaW4tMTEwMHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWF4LXdpZHRoOjEzNTBweDtcbiAgICBcbn1cblxuLnRleHR7XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4uaW1hZ2VDb250YWluZXI6aG92ZXIgLnRleHR7XG4gICAgZGlzcGxheTp1bnNldDtcbiAgICBcbn1cbi5pbWFnZUNvbnRhaW5lcjpob3ZlciBpbWd7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDIwJSk7XG59XG4ub25lLXRoaXJke1xuICAgIHdpZHRoOjMzJTtcbn1cbi5icmVhdGhle1xuICAgIG1hcmdpbi1sZWZ0OjQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIFxuICAgIFxufVxuLmJyZWF0aGUtdntcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG5cbn1cblxuLmxvZ297XG4gICAgbWF4LWhlaWdodDo0MHB4O1xuICAgIHBhZGRpbmctdG9wOjBweDtcbn1cbi5mdWxsLWltZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luLWRhcmsuanBnXCIpO1xuICAgIGhlaWdodDoxMDB2aDtcbn1cblxuLnJpZ2h0e1xuICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleDoxO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuLmxlZnR7XG4gICAgd2lkdGg6NTAlICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIFxuICAgIGhlaWdodDo4MHZoO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OjE7XG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbn1cblxuLmZvcm0tY29udGFpbntcbiAgICBtYXgtd2lkdGg6NDUwcHg7XG59XG4udGVzdENsYXNze1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleDoxO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG59XG4uc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGFyYWdyYXBoe1xuICAgIGxpbmUtaGVpZ2h0OjE2MCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiM3MTdGOEQ7XG59XG5cbi5pY29uLWxhcmdle1xuICAgIHdpZHRoOjY0cHg7XG4gICAgaGVpZ2h0OmF1dG87XG59XG4uaWNvbi1tZWR7XG4gICAgd2lkdGg6NDhweDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG5cbm5hdiB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBcbiAgfVxuICBcbiAgLm5hdmJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5uYXYtbGlua3Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG5cbi5wcmltYXJ5LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzN2RlO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLm5ha2VkLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjojMjYzN2RlO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcGFkZGluZzogMThweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbi53LTEwMHtcbiAgICB3aWR0aDoxMDAlO1xufVxuLnctODB7XG4gICAgd2lkdGg6ODAlO1xufVxuLnctMjB7XG4gICAgd2lkdGg6MjAlO1xufVxuLnNlY29uZGFyeS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzdlNDtcbiAgICBtYXJnaW4tcmlnaHQ6MXB4O1xuICAgIGNvbG9yOiMyMTIxMjE7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4ucHJpbWFyeXtcbiAgICBjb2xvcjojMjYzN2RlO1xufVxuXG4ucHJpbWFyeS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDdkZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4udGV4dC1saW5re1xuICAgIGNvbG9yOiMyMTIxMjE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNwYWNlLXRvcHtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xufVxuLmNvbnRhaW5lci1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICB9XG4gIFxuICAuYWxpZ24taXRlbS1taWRkbGUge1xuICAgIFxuICAgIG1heC13aWR0aDo5MDBweDtcbiAgfVxuICBcbiAgLmFsaWduLWl0ZW0tdG9wIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuYWxpZ24taXRlbS1ib3R0b20ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(http) {
        this.http = http;
    }
    createNewUser(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL}user/register`, payload);
    }
    userLogin(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL}user/login`, payload);
    }
    deletePost(payload) {
        console.log(payload);
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL}user/deletepost/${payload}`);
    }
    getProtectedData() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL}user/data`);
    }
    getImages() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL}user/imageList`);
    }
    addFiles(images, imageDesc, imageSkills) {
        var arr = [];
        var formData = new FormData();
        arr.push(images);
        arr[0].forEach((item, i) => {
            formData.append('avatar', arr[0][i]);
        });
        formData.append('id', localStorage.getItem('Id'));
        formData.append('desc', imageDesc);
        formData.append('skills', imageSkills);
        console.log(localStorage.getItem('Id'));
        let user_id = localStorage.getItem('Id');
        return this.http.put('http://localhost:4000/user/upload', formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
    }
    createVideo(images) {
        return this.http.post('https://api.rocketium.com/videos?access_token=ea988f95632b2bc0b06b88476d3912ecb35708aaf2b3b867c909bde9c27395d05ed1a3e0bdea628ac1959f447fdc417d3d3edf0deef7504b41d6646af6bc15e53caff6bfbb35af5617f1d4dd', images, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


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
        this.title = 'photo-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".logo[_ngcontent-%COMP%]{\n    padding:20px;\n    max-width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgbWF4LXdpZHRoOjIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");










class LoginComponent {
    constructor(User, router, snackBar) {
        this.User = User;
        this.router = router;
        this.snackBar = snackBar;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    loginUser() {
        this.User.userLogin(this.loginForm.value).subscribe((data) => {
            localStorage.setItem('Token', data.token);
            localStorage.setItem('Id', data.userCredentials._id);
            console.log(data.userCredentials._id);
            let iden = localStorage.getItem('Token');
            if (iden) {
                console.log(iden);
            }
            this.router.navigate(['/']);
        }, (err) => {
            console.log(err.error);
            if (err.error.msg) {
                this.snackBar.open(err.error.msg, 'Close');
            }
            else {
                this.snackBar.open('Something Went Wrong!');
            }
        });
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 1, consts: [[2, "display", "flex", "flex", "1"], [1, "full-img", 2, "display", "flex", "flex", "1"], [1, "breathe", "right"], [1, "form-contain"], ["color", "primary"], [1, "title"], [1, "paragraph"], [3, "formGroup", "submit"], ["appearance", "outline", 2, "width", "100%"], ["name", "email", "formControlName", "email", "matInput", ""], ["name", "password", "type", "password", "formControlName", "password", "matInput", ""], ["href", "/login", 1, "text-link"], [1, "primary"], ["type", "submit", 1, "primary-button", "w-100"], [1, "space-top"], ["href", "/register", 1, "text-link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We're glad you're here. Please login by entering your details below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_12_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login to 10kPhotos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".breathe[_ngcontent-%COMP%]{\n    margin-left:40px;\n    margin-right: 40px;\n    \n    \n}\n.breathe-v[_ngcontent-%COMP%]{\n    padding-top:20px;\n    padding-bottom:20px;\n\n}\n.logo[_ngcontent-%COMP%]{\n    \n    padding-bottom:80px;\n}\n.full-img[_ngcontent-%COMP%]{\n    background-image: url('login-dark.jpg');\n    height:100vh;\n}\n.right[_ngcontent-%COMP%]{\n    width:50% !important;\n    flex-direction:column;\n    display:flex;\n    flex:1;\n    align-items:center;\n    justify-content:center;\n}\n.form-contain[_ngcontent-%COMP%]{\n    max-width:450px;\n}\n.title[_ngcontent-%COMP%]{\n    font-size: 36px;\n    font-weight: 600;\n    text-align: left;\n}\n.paragraph[_ngcontent-%COMP%]{\n    line-height:160%;\n    font-size: 16px;\n    color:#717F8D;\n}\n.primary-button[_ngcontent-%COMP%]{\n    background-color: #2637de;\n    color:#fff;\n    font-size:14px;\n    width:100%;\n    padding: 18px 24px;\n    border-radius:4px;\n    border: none;\n    cursor:pointer;\n}\n.primary[_ngcontent-%COMP%]{\n    color:#2637de;\n}\n.primary-button[_ngcontent-%COMP%]:hover{\n    background-color: #3647df;\n    transition: background-color 200ms;\n}\n.text-link[_ngcontent-%COMP%]{\n    color:#212121;\n    text-decoration: none;\n}\n.space-top[_ngcontent-%COMP%]{\n    padding-top:20px;\n}\n.container-center[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    \n  }\n.align-item-middle[_ngcontent-%COMP%] {\n    \n    max-width:900px;\n  }\n.align-item-top[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n.align-item-bottom[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1Q0FBMkQ7SUFDM0QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFJQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7RUFFekI7QUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWF0aGV7XG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgXG4gICAgXG59XG4uYnJlYXRoZS12e1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcblxufVxuXG4ubG9nb3tcbiAgICBcbiAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xufVxuLmZ1bGwtaW1ne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4tZGFyay5qcGdcIik7XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG4ucmlnaHR7XG4gICAgd2lkdGg6NTAlICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OjE7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cblxuXG4uZm9ybS1jb250YWlue1xuICAgIG1heC13aWR0aDo0NTBweDtcbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFyYWdyYXBoe1xuICAgIGxpbmUtaGVpZ2h0OjE2MCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiM3MTdGOEQ7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzN2RlO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4ucHJpbWFyeXtcbiAgICBjb2xvcjojMjYzN2RlO1xufVxuXG4ucHJpbWFyeS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDdkZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4udGV4dC1saW5re1xuICAgIGNvbG9yOiMyMTIxMjE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNwYWNlLXRvcHtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xufVxuLmNvbnRhaW5lci1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICB9XG4gIFxuICAuYWxpZ24taXRlbS1taWRkbGUge1xuICAgIFxuICAgIG1heC13aWR0aDo5MDBweDtcbiAgfVxuICBcbiAgLmFsaWduLWl0ZW0tdG9wIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuYWxpZ24taXRlbS1ib3R0b20ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");









class RegisterComponent {
    constructor(User, router, snackBar) {
        this.User = User;
        this.router = router;
        this.snackBar = snackBar;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() { }
    createUser() {
        this.User.createNewUser(this.signupForm.value).subscribe((data) => {
            console.log(data);
            this.router.navigate(['/login']);
        }, (err) => {
            if (err.error.msg) {
                this.snackBar.open(err.error.msg, 'Undo');
            }
            else {
                this.snackBar.open('Something Went Wrong!');
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 38, vars: 1, consts: [[2, "display", "flex", "flex", "1"], [1, "full-img", 2, "display", "flex", "flex", "1"], [1, "breathe", "right"], [1, "form-contain"], [1, "title"], [1, "paragraph"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 2, "width", "100%"], ["name", "fname", "formControlName", "name", "matInput", ""], ["type", "email", "name", "email", "formControlName", "email", "matInput", ""], ["name", "phone_number", "formControlName", "phone_number", "matInput", ""], ["name", "password", "type", "password", "formControlName", "password", "matInput", ""], ["type", "submit", 1, "primary-button", "w-100"], [1, "space-top"], ["href", "/login", 1, "text-link"], [1, "primary"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to 10kPhotos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We're glad you're here. Please create an account by entering your details below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".breathe[_ngcontent-%COMP%]{\n    margin-left:40px;\n    margin-right: 40px;\n    \n    \n}\n.breathe-v[_ngcontent-%COMP%]{\n    padding-top:20px;\n    padding-bottom:20px;\n\n}\n.logo[_ngcontent-%COMP%]{\n    \n    padding-bottom:80px;\n}\n.full-img[_ngcontent-%COMP%]{\n    background-image: url('login-dark.jpg');\n    height:100vh;\n}\n.right[_ngcontent-%COMP%]{\n    width:50% !important;\n    flex-direction:column;\n    display:flex;\n    flex:1;\n    align-items:center;\n    justify-content:center;\n}\n.form-contain[_ngcontent-%COMP%]{\n    max-width:450px;\n}\n.title[_ngcontent-%COMP%]{\n    font-size: 36px;\n    font-weight: 600;\n}\n.paragraph[_ngcontent-%COMP%]{\n    line-height:160%;\n    font-size: 16px;\n    color:#717F8D;\n}\n.primary-button[_ngcontent-%COMP%]{\n    background-color: #2637de;\n    color:#fff;\n    font-size:14px;\n    width:100%;\n    padding: 18px 24px;\n    border-radius:4px;\n    border: none;\n    cursor:pointer;\n}\n.primary[_ngcontent-%COMP%]{\n    color:#2637de;\n}\n.primary-button[_ngcontent-%COMP%]:hover{\n    background-color: #3647df;\n    transition: background-color 200ms;\n}\n.text-link[_ngcontent-%COMP%]{\n    color:#212121;\n    text-decoration: none;\n}\n.space-top[_ngcontent-%COMP%]{\n    padding-top:20px;\n}\n.container-center[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    \n  }\n.align-item-middle[_ngcontent-%COMP%] {\n    \n    max-width:900px;\n  }\n.align-item-top[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n.align-item-bottom[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1Q0FBMkQ7SUFDM0QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCOztFQUV6QjtBQUVBOztJQUVFLGVBQWU7RUFDakI7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYXRoZXtcbiAgICBtYXJnaW4tbGVmdDo0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBcbiAgICBcbn1cbi5icmVhdGhlLXZ7XG4gICAgcGFkZGluZy10b3A6MjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuXG59XG5cbi5sb2dve1xuICAgIFxuICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XG59XG4uZnVsbC1pbWd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1kYXJrLmpwZ1wiKTtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cbi5yaWdodHtcbiAgICB3aWR0aDo1MCUgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXg6MTtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbn1cblxuLmZvcm0tY29udGFpbntcbiAgICBtYXgtd2lkdGg6NDUwcHg7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wYXJhZ3JhcGh7XG4gICAgbGluZS1oZWlnaHQ6MTYwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IzcxN0Y4RDtcbn1cblxuLnByaW1hcnktYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjM3ZGU7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6IDE4cHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiMyNjM3ZGU7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0N2RmO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi50ZXh0LWxpbmt7XG4gICAgY29sb3I6IzIxMjEyMTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3BhY2UtdG9we1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG59XG4uY29udGFpbmVyLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5hbGlnbi1pdGVtLW1pZGRsZSB7XG4gICAgXG4gICAgbWF4LXdpZHRoOjkwMHB4O1xuICB9XG4gIFxuICAuYWxpZ24taXRlbS10b3Age1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIC5hbGlnbi1pdGVtLWJvdHRvbSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ "j5wd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptors/httpconfig.interceptor */ "43J6");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/drag-drop/drag-drop.component */ "2AiU");
/* harmony import */ var _drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drag-drop-file-upload.directive */ "2EwI");
/* harmony import */ var _components_drag_drop_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/drag-drop/tags/tags.component */ "uaUw");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_18__["HttpConfigInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_20__["DragDropComponent"],
        _drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_21__["DragDropFileUploadDirective"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
        _components_drag_drop_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_20__["DragDropComponent"],
                    _drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_21__["DragDropFileUploadDirective"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                    _components_drag_drop_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_18__["HttpConfigInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], [_components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_20__["DragDropComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_20__["DragDropComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_21__["DragDropFileUploadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlName"], _components_drag_drop_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"]], []);


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('Token') != null)
            return true;
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "j5wd":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");













































class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uaUw":
/*!*************************************************************!*\
  !*** ./src/app/components/drag-drop/tags/tags.component.ts ***!
  \*************************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _drag_drop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drag-drop.component */ "2AiU");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












const _c0 = ["fruitInput"];
const _c1 = ["auto"];
function TagsComponent_mat_chip_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TagsComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function TagsComponent_mat_chip_5_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const fruit_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.remove(fruit_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagsComponent_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruit_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.removable);
} }
function TagsComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruit_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r9, " ");
} }
/**
 * @title Chips Autocomplete
 */
class TagsComponent {
    constructor(dragDropComponent) {
        this.dragDropComponent = dragDropComponent;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fruits = [];
        this.allFruits = ['Focus', 'Leadership', 'Adapt', 'Support', 'Mindfullness', 'Discipline', 'Communication', 'Technical', 'Learning'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((fruit) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if (this.fruits.length < 1) {
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.dragDropComponent.tags = this.fruits;
        }
    }
    clear() {
        this.fruits = [];
    }
    selected(event) {
        if (this.fruits.length === 0) {
            this.fruits.push(event.option.viewValue);
            this.fruitInput.nativeElement.value = '';
            this.fruitCtrl.setValue(null);
            this.dragDropComponent.tags = this.fruits;
        }
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_drag_drop_component__WEBPACK_IMPORTED_MODULE_4__["DragDropComponent"])); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], viewQuery: function TagsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fruitInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
    } }, decls: 12, vars: 7, consts: [["appearance", "outline", 1, "example-chip-list"], ["aria-required", "true", "required", "", "aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Skill Category...", "aria-required", "true", "required", "", 3, "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-chip-list", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TagsComponent_mat_chip_5_Template, 3, 4, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function TagsComponent_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function TagsComponent_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TagsComponent_mat_option_10_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx.filteredFruits));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".example-chip-list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJ0YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jaGlwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.css'],
            }]
    }], function () { return [{ type: _drag_drop_component__WEBPACK_IMPORTED_MODULE_4__["DragDropComponent"] }]; }, { fruitInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fruitInput']
        }], matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['auto']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/drag-drop/drag-drop.component */ "2AiU");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");









const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'upload',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__["DragDropComponent"]
    },
    {
        path: '',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map