System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './components/home', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, home_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'NG - Crack';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-crack-view',
                        template: "\n    <h1>{{title}}</h1>\n    <a [routerLink]=\"['Home']\">Home</a>\n    <router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_1.HomeComponent,
                            useAsDefault: true
                        } /*,
                        {
                            path: '/aboutus',
                            name: 'About Us',
                            component: HomeComponent
                            //component: AboutUsComponent
                        },
                        {
                            path: '/todo/...',
                            name: 'Todo',
                            component: HomeComponent
                            //component: TodoComponent
                        }*/
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map