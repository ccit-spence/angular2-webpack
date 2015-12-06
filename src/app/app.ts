import 'reflect-metadata'
import 'zone.js'

import {bootstrap, Component} from 'angular2/angular2';
import {ApplicationHeader} from './components/application-header/application-header';

@Component({
    directives: [ApplicationHeader],
    selector: 'my-app',
    template: '<application-header></application-header><h1 class="my-app">My First Angular 2 App</h1>',
    styles: [`
    .my-app {
        margin: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }
  `]
})

class AppComponent { }

bootstrap(AppComponent);
