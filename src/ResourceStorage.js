var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        this.resource = resource;
        this.queryActionName = 'query';
        this.queryParams = {};
        this.loadImmediately = true;
        this._data = {};
        this.updateParams(params);
        if (this.loadImmediately) {
            this.load();
        }
    }
    ResourceStorage.prototype.updateParams = function (params) {
        if (params === void 0) { params = {}; }
        this.queryActionName = params.queryActionName || 'query';
        this.queryParams = params.queryParams || {};
        this.loadImmediately = params.loadImmediately === false ? false : true;
    };
    ResourceStorage.prototype.load = function (args) {
        var _this = this;
        var qp = !!args ? args : this.queryParams;
        var action = this.resource[this.queryActionName].bind(this.resource);
        action(qp).$observable
            .subscribe(function (items) {
            _this._data = items;
        });
    };
    Object.defineProperty(ResourceStorage.prototype, "result", {
        get: function () {
            return Object.assign({}, this._data, { $load: this.load.bind(this) });
        },
        enumerable: true,
        configurable: true
    });
    return ResourceStorage;
}());
export { ResourceStorage };
