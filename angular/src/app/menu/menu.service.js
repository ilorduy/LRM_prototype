var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var appSettings_1 = require('../appSettings');
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MenuService.prototype.getUser = function () {
        return this.http.get(appSettings_1.AppSettings.API_URL + "/api/Auth", { withCredentials: true }).toPromise()
            .then(function (response) { return response.json(); });
    };
    MenuService.prototype.getUserSession = function () {
        return this.http.get(appSettings_1.AppSettings.API_URL + "/api/GetUserSession", { withCredentials: true }).toPromise()
            .then(function (response) { return response.json(); });
    };
    MenuService = __decorate([
        core_1.Injectable()
    ], MenuService);
    return MenuService;
})();
exports.MenuService = MenuService;
