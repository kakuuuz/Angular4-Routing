"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var test_component_1 = require("./test.component");
var test_home_component_1 = require("./test-home.component");
var testRoutes = [
    {
        path: 'test',
        component: test_component_1.TestComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: test_home_component_1.TestHomeComponent
            }
        ]
    }
];
var TestRoutingModule = (function () {
    function TestRoutingModule() {
    }
    return TestRoutingModule;
}());
TestRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(testRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], TestRoutingModule);
exports.TestRoutingModule = TestRoutingModule;
//# sourceMappingURL=test.routing-module.js.map