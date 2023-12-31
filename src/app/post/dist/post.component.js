"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostComponent = void 0;
var core_1 = require("@angular/core");
var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.title = 'High-Performance Computing';
        this.text = 'High-performance computing (HPC) is the ability to process data and perform complex calculations at high\
          speeds. HPC is one of the most essential tools fueling the advancement of computational science.';
    }
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.scss']
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
