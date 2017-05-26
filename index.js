var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Injector, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ResourceProviders } from './src/ResourceProviders';
export * from './src/Resource';
export * from './src/ResourceAction';
export * from './src/ResourceCRUD';
export * from './src/ResourceCRUDBase';
export * from './src/ResourceGlobalConfig';
export * from './src/ResourceModel';
export * from './src/ResourceParams';
export * from './src/ResourceProviders';
export * from './src/ResourceStorage';
export * from './src/ResourceStorages';
export * from './src/SelectStorage';
var ResourceModule = ResourceModule_1 = (function () {
    function ResourceModule(_injector, parent) {
        var _this = this;
        this._injector = _injector;
        console.log(parent);
        var metadata = Reflect.getMetadata('annotations', parent.constructor);
        console.log(metadata);
        var providers = ResourceProviders.providers[ResourceProviders.mainProvidersName];
        providers.forEach(function (provider) { return _this._injector.get(provider.provide); });
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule_1,
            providers: ResourceProviders.providers[ResourceProviders.mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule_1,
            providers: ResourceProviders.providers[subSet] ? ResourceProviders.providers[subSet] : []
        };
    };
    return ResourceModule;
}());
/** @nocollapse */
ResourceModule.ctorParameters = function () { return [
    { type: Injector, },
    { type: ResourceModule_1, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
ResourceModule = ResourceModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpModule]
    }),
    __metadata("design:paramtypes", [Injector, ResourceModule])
], ResourceModule);
export { ResourceModule };
var ResourceModule_1;
