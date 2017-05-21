"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var test_home_component_1 = require("./test-home.component");
var test_component_1 = require("./test.component");
var router_1 = require("@angular/router");
var test_routing_module_1 = require("./test.routing-module");
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            router_1.RouterModule,
            test_routing_module_1.TestRoutingModule // <-- import the FormsModule before binding with [(ngModel)]
        ],
        declarations: [
            test_component_1.TestComponent, test_home_component_1.TestHomeComponent
        ],
        bootstrap: [test_component_1.TestComponent, test_home_component_1.TestHomeComponent]
    })
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map