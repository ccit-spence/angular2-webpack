import {Component} from 'angular2/angular2';
import {ApplicationHeaderDropdown} from './application-header-dropdown/application-header-dropdown'
import {ApplicationHeaderName} from './application-header-name/application-header-name'
import {ApplicationHeaderSelector} from './application-header-selector/application-header-selector'

@Component({
    directives: [ApplicationHeaderSelector, ApplicationHeaderName, ApplicationHeaderDropdown],
    selector: 'application-header',
    template: require('./application-header.html'),
    styles: [require('./app-header.scss')]
})

export class ApplicationHeader{ }
