(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-lg-10\">\n    <div class=\"row d-flex justify-content-start\">\n        <div class=\"col-lg-3\">\n            <button class=\"btn btn-outline-secondary mr-2 mb-5 mt-5\" (click)=\"goBack()\">BACK</button>\n            <button class=\"btn btn-primary mb-5 mt-5\" routerLink=\"/home\">HOME</button>            \n        </div>\n        <div class=\"col-lg-6 text-center\">\n            <h1 class=\"font-weight-bold mt-5 mb-2\">RAPIDCARGO - Movement history</h1>\n            <h3 class=\"mb-5\">Last created movements</h3>\n        </div>\n        <div class=\"col-lg-3\"></div>\n    </div>\n\n    <!-- Make teble sortable -->\n    <div class=\"row d-flex justify-content-center align-self-center\">\n        <h2 *ngIf=\"movements==null || movements.length==0\">No movements</h2>\n        <table class=\"table table-striped\" *ngIf=\"movements!=null && movements.length > 0\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Date</th>\n                    <th scope=\"col\">Type</th>\n                    <th scope=\"col\">From</th>\n                    <th scope=\"col\">To</th>\n                    <th scope=\"col\">Reference</th>\n                    <th scope=\"col\">Quantity</th>\n                    <th scope=\"col\">Weight</th>\n                    <th scope=\"col\">Customs status</th>                    \n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let mv of movements\">\n                    <td>{{toDate(mv.creationDate)}}</td>\n                    <td>{{mv.type.toUpperCase()}}</td>\n                    <td>{{mv.originalWarehouse.code}}</td>\n                    <td>{{mv.destinationWarehouse.code}}</td>\n                    <td>{{mv.merchandiseInfo.referenceType.name}} {{mv.merchandiseInfo.reference}}</td>\n                    <td>{{mv.merchandiseInfo.quantity}}</td>\n                    <td>{{mv.merchandiseInfo.weight}}</td>\n                    <td>{{mv.customs.status}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 p-0\">\n            <div class=\"jumbotron min-vh-100 text-center m-0 bg-light d-flex flex-column justify-content-center\">\n                <h1 class=\"display-4 font-weight-bold\">Welcome to RAPIDCARGO</h1>\n                <p class=\"lead\">Please select an option.</p>\n                <div class=\"row d-flex justify-content-center\">\n                    <div ngbDropdown class=\"d-inline-block mr-4\">\n                        <button class=\"btn btn-primary btn-lg\" id=\"dropdownBasic1\" ngbDropdownToggle>Declare movement</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                            <button ngbDropdownItem routerLink=\"/input\">Input</button>\n                            <button ngbDropdownItem routerLink=\"/output\">Output</button>\n                        </div>\n                    </div>\n                    <button class=\"btn btn-primary btn-lg\" routerLink=\"/history\">Movement history</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input/input.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-lg-10\">\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3\">\n            <button class=\"btn btn-outline-secondary mr-2 mb-5 mt-5\" (click)=\"goBack()\">BACK</button>\n            <button class=\"btn btn-primary mb-5 mt-5\" routerLink=\"/home\">HOME</button>            \n        </div>\n        <div class=\"col-lg-6 text-center\">\n            <h1 class=\"font-weight-bold mt-5 mb-5\">RAPIDCARGO</h1>\n        </div>\n        <div class=\"col-lg-3\"></div>\n    </div>\n\n    <ngb-alert class=\"col-lg-12\" [type]=\"'danger'\" *ngIf=\"alertError\" (close)=\"alertError==false\">Error ! {{ alertMessage }}</ngb-alert>\n\n    <ngb-alert class=\"col-lg-12\" [type]=\"'success'\" *ngIf=\"alertSuccess\" (close)=\"alertSuccess==false\">Success ! {{ alertMessage }}</ngb-alert>\n\n    <div class=\"d-flex justify-content-center\" *ngIf=\"loading || loadingWhileResponse\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n\n    <div class=\"row d-flex justify-content-center\" *ngIf=\"!loading && !loadingWhileResponse\">\n        <div class=\"jumbotron col-lg-12\">\n            <h2 class=\"display-4\">Input movement entry</h2>\n            <hr class=\"my-4\">\n            <div class=\"form-row d-flex justify-content-start\">\n                <div class=\"form-group col-lg-3\">\n                    <label>Original warehouse code</label>\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"movement.originalWarehouse\">      \n                            <option *ngFor=\"let w of warehouses\" [ngValue]=\"w\" >{{w.code}}</option>\n                        </select>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new warehouse\" (click)=\"createWarehouse(warehouse)\">+</button>                    \n                        </div>\n                    </div>   \n                </div>\n                <div class=\"form-group col-lg-3\">\n                    <label>Original warehouse name</label>      \n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"movement.originalWarehouse.name\">           \n                </div>\n                <div class=\"col-lg-3\"></div>\n                <div class=\"form-group col-lg-3\">\n                    <label>Customs status</label>\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"movement.customs\">\n                            <option *ngFor=\"let c of customs\" [ngValue]=\"c\">{{c.status}}</option>\n                        </select>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new customs status\" (click)=\"createCustoms(customsModal)\">+</button>                    \n                        </div>\n                    </div>   \n                </div>\n            </div>\n            <div class=\"form-row d-flex justify-content-start\">\n                <div class=\"form-group col-lg-3\">\n                    <label>Reference type</label>\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"movement.merchandiseInfo.referenceType\">\n                            <option *ngFor=\"let rt of referenceTypes\" [ngValue]=\"rt\">{{rt.name}}</option>\n                        </select>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new reference\" (click)=\"createReference(reference)\">+</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group col-lg-4\">\n                    <label>\n                        Reference \n                        <span [ngClass]=\"{'text-primary': (movement.merchandiseInfo.reference.length==11), 'text-danger':(movement.merchandiseInfo.reference.length!=11)}\"\n                        *ngIf=\"movement.merchandiseInfo.referenceType!=null && movement.merchandiseInfo.referenceType.name=='AWB' && movement.merchandiseInfo.reference!=null\">\n                           {{movement.merchandiseInfo.reference.length}}/11\n                       </span>\n                    </label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"movement.merchandiseInfo.reference\">                                        \n                </div>                \n                 <!-- <span *ngIf=\"movement.merchandiseInfo.referenceType.name=='AWB'\" class=\"text-danger\">Must be 11 characters</span>  -->\n            </div>\n            <div class=\"form-row d-flex justify-content-start align-items-end\">\n                <div class=\"form-group col-lg-12\">\n                    <label>Description</label>\n                    <textarea class=\"form-control\" maxlength=\"250\" [(ngModel)]=\"movement.merchandiseInfo.description\"></textarea>\n                    <span class=\"text-primary\" *ngIf=\"movement.merchandiseInfo.description!=null\">{{movement.merchandiseInfo.description.length}}/250</span>\n                    <span class=\"text-primary\" *ngIf=\"movement.merchandiseInfo.description==null\">0/250</span>\n                </div>\n            </div>\n            <div class=\"form-row d-flex justify-content-start align-items-end\">\n                <div class=\"form-group col-lg-3\">\n                    <label>Quantity</label>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.quantity\" >\n                </div>\n                <div class=\"form-group col-lg-3\"></div>\n                <div class=\"form-group col-lg-3\">\n                    <label>Weight</label>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.weight\">\n                </div>\n            </div>\n            <div class=\"form-row d-flex justify-content-start align-items-end\">\n                <div class=\"form-group col-lg-3\">\n                    <label>Total quantity</label>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.totalQuantity\" >\n                    <span class=\"text-danger\" *ngIf=\"movement.merchandiseInfo.totalQuantity<movement.merchandiseInfo.quantity\">\n                        Must be greater than or equal to quantity\n                    </span>\n                </div>\n                <div class=\"form-group col-lg-3\"></div>\n                <div class=\"form-group col-lg-3\">\n                    <label>Total weight</label>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.totalWeight\">\n                    <span class=\"text-danger\" *ngIf=\"movement.merchandiseInfo.totalWeight<movement.merchandiseInfo.weight\">\n                        Must be greater than or equal to weight\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row d-flex justify-content-end mb-5\">\n            <button class=\"btn btn-outline-danger btn-lg mr-4\" (click)=\"cancel()\">CANCEL</button>\n            <button class=\"btn btn-primary btn-lg\" (click)=\"createInputMovement(submit)\"\n            [disabled]=\"cannotSubmit()\">SUBMIT</button>\n        </div>\n    </div>\n</div>\n\n<!-- /////////////////////////////////////////   MODALS   /////////////////////////////////////////////////////////////////////////////////// -->\n\n\n<ng-template #warehouse let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">New warehouse creation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Do you want to create a new warehouse ?</h5>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n                <label>New warehouse name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWarehouse.name\"/>\n            </div>\n            <div class=\"form-group col-lg-12\">\n                <label>New warehouse code</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWarehouse.code\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n        [disabled]=\"newWarehouse.name==null || newWarehouse.code==null\">CREATE</button>\n    </div>\n</ng-template>\n\n\n<ng-template #customsModal let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">New customs status creation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Do you want to create a new customs status ?</h5>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n                <label>The new status must be one character long</label>\n                <input type=\"text\" class=\"form-control mb-2 uppercase\" [(ngModel)]=\"newCustoms\" maxlength=\"1\"/>\n                <span class=\"text-danger\" *ngIf=\"isCustomsStatusNotExisting()\">This customs status already exists.</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n        [disabled]=\"newCustoms==null || isCustomsStatusNotExisting()\">CREATE</button>\n    </div>\n</ng-template>\n\n<ng-template #reference let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">New reference creation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Do you want to create a new reference type ?</h5>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n                <label>New reference type name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newReferenceType\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n        [disabled]=\"newReferenceType==null\">CREATE</button>\n    </div>\n</ng-template>\n\n<ng-template #submit let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Input movement submission</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Do you want to create a new input movement ?</h5>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n                <label for=\"typeahead-basic\">Please select a user</label>\n                <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedUser\" [ngbTypeahead]=\"searchUser\"/>\n            </div>\n        </div>\n        <div class=\"row d-flex justify-content-start\">\n            <div class=\"form-group col-lg-12\">\n                <label>Please select the date the movement was realized</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                            name=\"dp\" [(ngModel)]=\"realizedDate\" ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">SELECT</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row align-items-end\">\n            <div class=\"form-group col-lg-11\">\n                <label>Please select an email address to send a confirmation</label>\n                <input class=\"form-control\" type=\"email\" [(ngModel)]=\"recepientAddress\" email #email=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n                <mat-icon color=\"primary\" *ngIf=\"recepientAddress!=null && !email.errors?.email\">done</mat-icon>\n                <mat-icon color=\"warn\" *ngIf=\"recepientAddress!=null && email.errors?.email\">clear</mat-icon>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n        [disabled]=\"selectedUser==null || selectedUser.length==0 || realizedDate==null || (recepientAddress!=null && email.errors?.email)\">CREATE</button>\n    </div>\n</ng-template>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/output/output.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/output/output.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-lg-10\">\n        <div class=\"row d-flex justify-content-start align-items-center\">\n            <div class=\"col-lg-3\">\n                <button class=\"btn btn-outline-secondary mr-2 mb-5 mt-5\" (click)=\"goBack()\">BACK</button>\n                <button class=\"btn btn-primary mb-5 mt-5\" routerLink=\"/home\">HOME</button>            \n            </div>\n            <div class=\"col-lg-6 text-center\">\n                <h1 class=\"font-weight-bold mt-5 mb-5\">RAPIDCARGO</h1>\n            </div>\n            <div class=\"col-lg-3\"></div>\n        </div>\n    \n        <ngb-alert class=\"col-lg-12\" [type]=\"'danger'\" *ngIf=\"alertError\" (close)=\"alertError==false\">Error ! {{ alertMessage }}</ngb-alert>\n    \n        <ngb-alert class=\"col-lg-12\" [type]=\"'success'\" *ngIf=\"alertSuccess\" (close)=\"alertSuccess==false\">Success ! {{ alertMessage }}</ngb-alert>\n    \n        <div class=\"d-flex justify-content-center\" *ngIf=\"loading || loadingWhileResponse\">\n            <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n        </div>\n    \n        <div class=\"row d-flex justify-content-center\" *ngIf=\"!loading && !loadingWhileResponse\">\n            <div class=\"jumbotron col-lg-12\">\n                <h2 class=\"display-4\">Output movement entry</h2>\n                <hr class=\"my-4\">\n                <div class=\"form-row d-flex justify-content-start\">\n                    <div class=\"form-group col-lg-3\">\n                        <label>Destination warehouse code</label>\n                        <div class=\"input-group\">\n                            <select class=\"form-control\" [(ngModel)]=\"movement.destinationWarehouse\">      \n                                <option *ngFor=\"let w of warehouses\" [ngValue]=\"w\" >{{w.code}}</option>\n                            </select>\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new warehouse\" (click)=\"createWarehouse(warehouse)\">+</button>                    \n                            </div>\n                        </div>   \n                    </div>\n                    <div class=\"form-group col-lg-3\">\n                        <label>Destination warehouse name</label>      \n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"movement.destinationWarehouse.name\">           \n                    </div>\n                    <div class=\"col-lg-3\"></div>\n                    <div class=\"form-group col-lg-3\">\n                        <label>Customs status</label>\n                        <div class=\"input-group\">\n                            <select class=\"form-control\" [(ngModel)]=\"movement.customs\">\n                                <option *ngFor=\"let c of customs\" [ngValue]=\"c\">{{c.status}}</option>\n                            </select>\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new customs status\" (click)=\"createCustoms(customsModal)\">+</button>                    \n                            </div>\n                        </div>   \n                    </div>\n                </div>\n                <div class=\"form-row d-flex justify-content-start\">\n                    <div class=\"form-group col-lg-3\">\n                        <label>Reference type</label>\n                        <div class=\"input-group\">\n                            <select class=\"form-control\" [(ngModel)]=\"movement.merchandiseInfo.referenceType\">\n                                <option *ngFor=\"let rt of referenceTypes\" [ngValue]=\"rt\">{{rt.name}}</option>\n                            </select>\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary btn-sm\" placement=\"top\" ngbTooltip=\"Add new reference\" (click)=\"createReference(reference)\">+</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-lg-4\">\n                        <label>\n                            Reference \n                            <span [ngClass]=\"{'text-primary': (movement.merchandiseInfo.reference.length==11), 'text-danger':(movement.merchandiseInfo.reference.length!=11)}\"\n                            *ngIf=\"movement.merchandiseInfo.referenceType!=null && movement.merchandiseInfo.referenceType.name=='AWB' && movement.merchandiseInfo.reference!=null\">\n                               {{movement.merchandiseInfo.reference.length}}/11\n                           </span>\n                        </label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"movement.merchandiseInfo.reference\">                                        \n                    </div>                \n                     <!-- <span *ngIf=\"movement.merchandiseInfo.referenceType.name=='AWB'\" class=\"text-danger\">Must be 11 characters</span>  -->\n                </div>\n                <div class=\"form-row d-flex justify-content-start\">\n                    <div class=\"form-group col-lg-3\">\n                        <label>Customs document type</label>\n                        <select class=\"form-control\" [(ngModel)]=\"movement.outputInfo.customsDoc\">\n                            <option *ngFor=\"let c of customs\" [ngValue]=\"c\">{{c.status}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-lg-4\">\n                        <label>Customs document reference</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"movement.outputInfo.customsDocRef\"/>\n                    </div>\n                </div>\n                <div class=\"form-row d-flex justify-content-start align-items-end\">\n                    <div class=\"form-group col-lg-12\">\n                        <label>Description</label>\n                        <textarea class=\"form-control\" maxlength=\"250\" [(ngModel)]=\"movement.merchandiseInfo.description\"></textarea>\n                        <span class=\"text-primary\" *ngIf=\"movement.merchandiseInfo.description!=null\">{{movement.merchandiseInfo.description.length}}/250</span>\n                        <span class=\"text-primary\" *ngIf=\"movement.merchandiseInfo.description==null\">0/250</span>\n                    </div>\n                </div>\n                <div class=\"form-row d-flex justify-content-start align-items-end\">\n                    <div class=\"form-group col-lg-3\">\n                        <label>Quantity</label>\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.quantity\" >\n                    </div>\n                    <div class=\"form-group col-lg-3\"></div>\n                    <div class=\"form-group col-lg-3\">\n                        <label>Weight</label>\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.weight\">\n                    </div>\n                </div>\n                <div class=\"form-row d-flex justify-content-start align-items-end\">\n                    <div class=\"form-group col-lg-3\">\n                        <label>Total quantity</label>\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.totalQuantity\" >\n                        <span class=\"text-danger\" *ngIf=\"movement.merchandiseInfo.totalQuantity<movement.merchandiseInfo.quantity\">\n                            Must be greater than or equal to quantity\n                        </span>\n                    </div>\n                    <div class=\"form-group col-lg-3\"></div>\n                    <div class=\"form-group col-lg-3\">\n                        <label>Total weight</label>\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.merchandiseInfo.totalWeight\">\n                        <span class=\"text-danger\" *ngIf=\"movement.merchandiseInfo.totalWeight<movement.merchandiseInfo.weight\">\n                            Must be greater than or equal to weight\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-end mb-5\">\n                <button class=\"btn btn-outline-danger btn-lg mr-4\" (click)=\"cancel()\">CANCEL</button>\n                <button class=\"btn btn-primary btn-lg\" (click)=\"createOutputMovement(submit)\"\n                [disabled]=\"cannotSubmit()\">SUBMIT</button>\n            </div>\n        </div>\n    </div>\n    \n    <!-- /////////////////////////////////////////   MODALS   /////////////////////////////////////////////////////////////////////////////////// -->\n    \n    \n    <ng-template #warehouse let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">New warehouse creation</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <h5>Do you want to create a new warehouse ?</h5>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label>New warehouse name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWarehouse.name\"/>\n                </div>\n                <div class=\"form-group col-lg-12\">\n                    <label>New warehouse code</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWarehouse.code\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n            [disabled]=\"newWarehouse.name==null || newWarehouse.code==null\">CREATE</button>\n        </div>\n    </ng-template>\n    \n    \n    <ng-template #customsModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">New customs status creation</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <h5>Do you want to create a new customs status ?</h5>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label>The new status must be one character long</label>\n                    <input type=\"text\" class=\"form-control mb-2 uppercase\" [(ngModel)]=\"newCustoms\" maxlength=\"1\"/>\n                    <span class=\"text-danger\" *ngIf=\"isCustomsStatusNotExisting()\">This customs status already exists.</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n            [disabled]=\"newCustoms==null || isCustomsStatusNotExisting()\">CREATE</button>\n        </div>\n    </ng-template>\n    \n    <ng-template #reference let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">New reference creation</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <h5>Do you want to create a new reference type ?</h5>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label>New reference type name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newReferenceType\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n            [disabled]=\"newReferenceType==null\">CREATE</button>\n        </div>\n    </ng-template>\n    \n    <ng-template #submit let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Output movement submission</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <h5>Do you want to create a new output movement ?</h5>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                    <label for=\"typeahead-basic\">Please select a user</label>\n                    <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedUser\" [ngbTypeahead]=\"searchUser\"/>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-start\">\n                <div class=\"form-group col-lg-12\">\n                    <label>Please select the date the movement was realized</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                name=\"dp\" [(ngModel)]=\"realizedDate\" ngbDatepicker #d=\"ngbDatepicker\">\n                        <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">SELECT</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row align-items-end\">\n                <div class=\"form-group col-lg-11\">\n                    <label>Please select an email address to send a confirmation</label>\n                    <input class=\"form-control\" type=\"email\" [(ngModel)]=\"recepientAddress\" email #email=\"ngModel\">\n                </div>\n                <div class=\"form-group\">\n                    <mat-icon color=\"primary\" *ngIf=\"recepientAddress!=null && !email.errors?.email\">done</mat-icon>\n                    <mat-icon color=\"warn\" *ngIf=\"recepientAddress!=null && email.errors?.email\">clear</mat-icon>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modal.dismiss('Cross click')\">CANCEL</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\" \n            [disabled]=\"selectedUser==null || selectedUser.length==0 || realizedDate==null || (recepientAddress!=null && email.errors?.email)\">CREATE</button>\n        </div>\n    </ng-template>\n          "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 p-0\">\n            <div class=\"jumbotron min-vh-100 text-center m-0 bg-light d-flex flex-column justify-content-center\">\n                <h1 class=\"display-4 font-weight-bold\">Page not found !</h1>\n                <p class=\"lead\">Sorry, but it seems what you are looking for does not exist...</p>\n                <div class=\"row d-flex justify-content-center\">\n                    <button class=\"btn-lg btn-primary\" routerLink=\"/home\">Back to home</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"]
    },
    {
        path: 'input',
        component: _input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]
    },
    {
        path: 'output',
        component: _output_output_component__WEBPACK_IMPORTED_MODULE_6__["OutputComponent"]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'rapidcargo-front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");






// Angular Material Components






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_37__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_38__["HomeComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__["PageNotFoundComponent"],
            _input_input_component__WEBPACK_IMPORTED_MODULE_40__["InputComponent"],
            _output_output_component__WEBPACK_IMPORTED_MODULE_41__["OutputComponent"],
            _history_history_component__WEBPACK_IMPORTED_MODULE_42__["HistoryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_36__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_37__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/environments/environment */ "./src/environments/environment.ts");





let HistoryComponent = class HistoryComponent {
    constructor(httpClient, _location) {
        this.httpClient = httpClient;
        this._location = _location;
        this.reponse = null;
        this.movements = null;
    }
    getMovements() {
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/movement/last50').subscribe(res => {
            this.movements = res;
            console.log(res);
        });
    }
    toDate(date) {
        if (date.monthValue.toString().length < 2) {
            date.monthValue = '0' + date.monthValue;
        }
        if (date.dayOfMonth.toString().length < 2) {
            date.dayOfMonth = '0' + date.dayOfMonth;
        }
        if (date.hour.toString().length < 2) {
            date.hour = '0' + date.hour;
        }
        if (date.minute.toString().length < 2) {
            date.minute = '0' + date.minute;
        }
        if (date.second.toString().length < 2) {
            date.second = '0' + date.second;
        }
        return date.year + '-' + date.monthValue + '-' + date.dayOfMonth + ' ' + date.hour + ':' + date.minute + ':' + date.second;
    }
    goBack() {
        this._location.back();
    }
    ngOnInit() {
        this.getMovements();
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], HistoryComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uppercase {\n    text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let InputComponent = class InputComponent {
    constructor(httpClient, _location, modalService) {
        this.httpClient = httpClient;
        this._location = _location;
        this.modalService = modalService;
        this.loading = true;
        this.alertMessage = null;
        this.alertSuccess = false;
        this.alertError = false;
        this.loadingWhileResponse = false;
        this.movement = null;
        this.emptyMovement = null;
        this.warehouses = null;
        this.customs = null;
        this.referenceTypes = null;
        this.users = null;
        this.usersForSearch = [];
        this.selectedUser = null;
        this.realizedDate = null;
        this.newWarehouse = { id: null, name: null, code: null };
        this.newReferenceType = null;
        this.recepientAddress = null;
        this.newCustoms = null;
        this.searchUser = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(term => term.length < 0 ? []
            : this.usersForSearch.filter(user => (user.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)));
    }
    goBack() {
        this._location.back();
    }
    cancel() {
        this.movement = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](this.emptyMovement);
    }
    setTimeOutSuccess() {
        setTimeout(() => {
            this.alertSuccess = false;
            this.alertMessage = null;
        }, 5000);
    }
    setTimeOutError() {
        setTimeout(() => {
            this.alertError = false;
            this.alertMessage = null;
        }, 5000);
    }
    getEmptyMovement() {
        this.loading = true;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/movement/empty', { params: { type: 'input' } }).subscribe((res) => {
            this.movement = res;
            this.emptyMovement = res;
            this.loading = false;
            console.log(this.movement);
        });
    }
    getWarehouses() {
        this.warehouses = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/warehouse').subscribe(res => {
            this.warehouses = res;
        });
    }
    getCustoms() {
        this.customs = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/customs').subscribe(res => {
            this.customs = res;
        });
    }
    getReferenceType() {
        this.referenceTypes = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/referencetype').subscribe(res => {
            this.referenceTypes = res;
        });
    }
    getUser() {
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/user').subscribe((res) => {
            this.users = res;
            this.users.forEach(user => {
                this.usersForSearch.push(user.firstName + ' ' + user.lastName);
            });
        });
    }
    createWarehouse(warehouseModal) {
        this.modalService.open(warehouseModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/warehouse/create', this.newWarehouse).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getWarehouses();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newWarehouse.code = null;
            this.newWarehouse.name = null;
        });
    }
    createReference(referenceModal) {
        this.modalService.open(referenceModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/referencetype/create', this.newReferenceType).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getReferenceType();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newReferenceType = null;
        });
    }
    isCustomsStatusNotExisting() {
        let res = false;
        this.customs.forEach(el => {
            if (this.newCustoms != null) {
                if (el.status == this.newCustoms.toUpperCase()) {
                    res = true;
                }
            }
        });
        return res;
    }
    createCustoms(customsModal) {
        this.modalService.open(customsModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/customs/create', this.newCustoms).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getCustoms();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newCustoms = null;
        });
    }
    createInputMovement(submitModal) {
        this.modalService.open(submitModal, { centered: true }).result.then(() => {
            this.loadingWhileResponse = true;
            if (this.realizedDate.month.length !== 2) {
                this.realizedDate.month = '0' + this.realizedDate.month;
            }
            if (this.realizedDate.day.length === 1) {
                this.realizedDate.day = '0' + this.realizedDate.day;
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('user', this.selectedUser);
            params = params.append('date', this.realizedDate.year + '-' + this.realizedDate.month + '-' + this.realizedDate.day);
            params = params.append('email', this.recepientAddress);
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/movement/createInput', this.movement, { params }).subscribe((response) => {
                this.alertMessage = response.msg;
                this.getEmptyMovement();
                this.alertSuccess = true;
                this.setTimeOutSuccess();
                this.loadingWhileResponse = false;
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
                this.loadingWhileResponse = false;
            });
            this.selectedUser = null;
            this.realizedDate = null;
            this.recepientAddress = null;
        });
    }
    cannotSubmit() {
        return (this.movement.merchandiseInfo.totalQuantity < this.movement.merchandiseInfo.quantity)
            || (this.movement.merchandiseInfo.totalWeight < this.movement.merchandiseInfo.weight)
            || (this.movement.originalWarehouse == null
                || this.movement.customs.status == null
                || this.movement.merchandiseInfo.referenceType == null
                || this.movement.merchandiseInfo.reference == null
                || this.movement.merchandiseInfo.quantity == null
                || this.movement.merchandiseInfo.weight == null
                || this.movement.merchandiseInfo.totalQuantity == null
                || this.movement.merchandiseInfo.totalWeight == null
                || (this.movement.merchandiseInfo.referenceType.name === 'AWB' && this.movement.merchandiseInfo.reference.length !== 11));
    }
    ngOnInit() {
        this.getEmptyMovement();
        this.getWarehouses();
        this.getCustoms();
        this.getReferenceType();
        this.getUser();
    }
};
InputComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], InputComponent);



/***/ }),

/***/ "./src/app/output/output.component.css":
/*!*********************************************!*\
  !*** ./src/app/output/output.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/output/output.component.ts":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let OutputComponent = class OutputComponent {
    constructor(httpClient, _location, modalService) {
        this.httpClient = httpClient;
        this._location = _location;
        this.modalService = modalService;
        this.loading = true;
        this.alertMessage = null;
        this.alertSuccess = false;
        this.alertError = false;
        this.loadingWhileResponse = false;
        this.movement = null;
        this.emptyMovement = null;
        this.warehouses = null;
        this.customs = null;
        this.referenceTypes = null;
        this.users = null;
        this.usersForSearch = [];
        this.selectedUser = null;
        this.realizedDate = null;
        this.newWarehouse = { id: null, name: null, code: null };
        this.newReferenceType = null;
        this.recepientAddress = null;
        this.newCustoms = null;
        this.searchUser = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(term => term.length < 0 ? []
            : this.usersForSearch.filter(user => (user.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)));
    }
    goBack() {
        this._location.back();
    }
    cancel() {
        this.movement = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](this.emptyMovement);
    }
    setTimeOutSuccess() {
        setTimeout(() => {
            this.alertSuccess = false;
            this.alertMessage = null;
        }, 5000);
    }
    setTimeOutError() {
        setTimeout(() => {
            this.alertError = false;
            this.alertMessage = null;
        }, 5000);
    }
    getEmptyMovement() {
        this.loading = true;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/movement/empty', { params: { type: 'output' } }).subscribe((res) => {
            this.movement = res;
            this.emptyMovement = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](res);
            this.loading = false;
            console.log(this.movement);
        });
    }
    getWarehouses() {
        this.warehouses = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/warehouse').subscribe(res => {
            this.warehouses = res;
        });
    }
    getCustoms() {
        this.customs = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/customs').subscribe(res => {
            this.customs = res;
        });
    }
    getReferenceType() {
        this.referenceTypes = null;
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/referencetype').subscribe(res => {
            this.referenceTypes = res;
        });
    }
    getUser() {
        this.httpClient.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/user').subscribe((res) => {
            this.users = res;
            this.users.forEach(user => {
                this.usersForSearch.push(user.firstName + ' ' + user.lastName);
            });
        });
    }
    createWarehouse(warehouseModal) {
        this.modalService.open(warehouseModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/warehouse/create', this.newWarehouse).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getWarehouses();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newWarehouse.code = null;
            this.newWarehouse.name = null;
        });
    }
    createReference(referenceModal) {
        this.modalService.open(referenceModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/referencetype/create', this.newReferenceType).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getReferenceType();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newReferenceType = null;
        });
    }
    isCustomsStatusNotExisting() {
        let res = false;
        this.customs.forEach(el => {
            if (this.newCustoms != null) {
                if (el.status == this.newCustoms.toUpperCase()) {
                    res = true;
                }
            }
        });
        return res;
    }
    createCustoms(customsModal) {
        this.modalService.open(customsModal, { centered: true }).result.then(() => {
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/customs/create', this.newCustoms).subscribe((response) => {
                this.alertMessage = response.msg;
                this.alertSuccess = true;
                this.getCustoms();
                this.setTimeOutSuccess();
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
            });
            this.newCustoms = null;
        });
    }
    cannotSubmit() {
        return (this.movement.merchandiseInfo.totalQuantity < this.movement.merchandiseInfo.quantity)
            || (this.movement.merchandiseInfo.totalWeight < this.movement.merchandiseInfo.weight)
            || (this.movement.destinationWarehouse == null
                || this.movement.outputInfo.customsDoc == null
                || this.movement.outputInfo.customsDocRef == null
                || this.movement.customs.status == null
                || this.movement.merchandiseInfo.referenceType == null
                || this.movement.merchandiseInfo.reference == null
                || this.movement.merchandiseInfo.quantity == null
                || this.movement.merchandiseInfo.weight == null
                || this.movement.merchandiseInfo.totalQuantity == null
                || this.movement.merchandiseInfo.totalWeight == null
                || (this.movement.merchandiseInfo.referenceType.name === 'AWB' && this.movement.merchandiseInfo.reference.length !== 11));
    }
    createOutputMovement(submitModal) {
        this.modalService.open(submitModal, { centered: true }).result.then(() => {
            this.loadingWhileResponse = true;
            if (this.realizedDate.month.length !== 2) {
                this.realizedDate.month = '0' + this.realizedDate.month;
            }
            if (this.realizedDate.day.length === 1) {
                this.realizedDate.day = '0' + this.realizedDate.day;
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('user', this.selectedUser);
            params = params.append('date', this.realizedDate.year + '-' + this.realizedDate.month + '-' + this.realizedDate.day);
            params = params.append('email', this.recepientAddress);
            this.httpClient.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/movement/createOutput', this.movement, { params }).subscribe((response) => {
                this.alertMessage = response.msg;
                this.getEmptyMovement();
                this.alertSuccess = true;
                this.setTimeOutSuccess();
                this.loadingWhileResponse = false;
            }, (error) => {
                this.alertMessage = error.error.msg;
                this.alertError = true;
                this.setTimeOutError();
                this.loadingWhileResponse = false;
            });
            this.selectedUser = null;
            this.realizedDate = null;
            this.recepientAddress = null;
        });
    }
    ngOnInit() {
        this.getEmptyMovement();
        this.getWarehouses();
        this.getCustoms();
        this.getReferenceType();
        this.getUser();
    }
};
OutputComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
OutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-output',
        template: __webpack_require__(/*! raw-loader!./output.component.html */ "./node_modules/raw-loader/index.js!./src/app/output/output.component.html"),
        styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/output/output.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], OutputComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



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
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/quentin/Documents/rapidcargo/rapidcargo-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map