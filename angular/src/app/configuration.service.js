var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var appSettings_1 = require('./appSettings');
var ConfigurationService = (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.getConfiguration = function (key) {
        var _this = this;
        return this.http.get('./assets/config.json').toPromise()
            .then(function (res) {
            _this.result = JSON.parse(res._body);
            appSettings_1.AppSettings.API_URL = _this.result[key];
            return _this.result[key];
        });
    };
    ConfigurationService = __decorate([
        core_1.Injectable()
    ], ConfigurationService);
    return ConfigurationService;
})();
exports.ConfigurationService = ConfigurationService;
