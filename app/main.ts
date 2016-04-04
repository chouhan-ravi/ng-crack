import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './components/home';
import 'rxjs/Rx';


@Component({
	selector: 'ng-crack-view',
	template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Home']">Home</a>
    <router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS
	]
})
@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	}/*,
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
])

class AppComponent {
	title = 'NG - Crack';
}


bootstrap(AppComponent);