System.register(['angular2/core', 'angular2/router', './rule/rule.component', './decision.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, rule_component_1, decision_service_1;
    var DecisionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rule_component_1_1) {
                rule_component_1 = rule_component_1_1;
            },
            function (decision_service_1_1) {
                decision_service_1 = decision_service_1_1;
            }],
        execute: function() {
            DecisionComponent = (function () {
                function DecisionComponent(_decisionService, _routeParams) {
                    this._decisionService = _decisionService;
                    this._routeParams = _routeParams;
                    this.decision = { "id": 2, "name": "Beta" };
                    this.title = this.decision.name;
                }
                DecisionComponent.prototype.ngOnInit = function () {
                    // 	if (!this.decision) {
                    // 		this.decision = new Decision({ "id": 2, "name": "Beta" });
                    // let id = +this._routeParams.get('id');
                    // this._decisionService.getDecision(1).then(function(decision) {
                    // this.decision = decision;
                    // this.title = this.decision.name;
                    // });
                    // } 
                    // 	this.title = this.decision.name;
                };
                DecisionComponent = __decorate([
                    core_1.Component({
                        selector: 'my-decision',
                        templateUrl: 'app/components/decision/decision.component.html',
                        directives: [rule_component_1.RuleComponent],
                        bindings: [decision_service_1.DecisionService]
                    }), 
                    __metadata('design:paramtypes', [decision_service_1.DecisionService, router_1.RouteParams])
                ], DecisionComponent);
                return DecisionComponent;
            })();
            exports_1("DecisionComponent", DecisionComponent);
        }
    }
});
//# sourceMappingURL=decision.component.js.map