var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var row_1 = require('row');
//TypeScript
var GridComponent = (function () {
    function GridComponent() {
        this.users = [
            { id: 1, name: 'awesome user1', status: 2, group: 'admin' },
            { id: 2, name: 'awesome user2', status: 1, group: 'vip' },
            { id: 3, name: 'awesome user3', status: 2, group: 'normals' }
        ];
        this.statuses = [
            { value: 1, text: 'status1' },
            { value: 2, text: 'status2' },
            { value: 3, text: 'status3' },
            { value: 4, text: 'status4' }
        ];
        this.groups = [
            { text: 'admin' },
            { text: 'vip' },
            { text: 'normals' }
        ];
    }
    GridComponent.prototype.removeUser = function (index) {
        this.users.splice(index, 1);
    };
    ;
    GridComponent.prototype.addUser = function () {
        this.inserted = {
            id: this.users.length + 1,
            name: '',
            status: null,
            group: null
        };
        this.users.push(this.inserted);
    };
    GridComponent = __decorate([
        angular2_1.Component({
            selector: 'my-grid'
        }),
        angular2_1.View({
            templateUrl: 'views/grid.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, row_1.RowComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
})();
exports.GridComponent = GridComponent;
