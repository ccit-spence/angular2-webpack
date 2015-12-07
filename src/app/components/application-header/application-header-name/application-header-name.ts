import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'application-header-name',
    properties: ['title', 'visible'],
    template: require('./application-header-name.html'),
    styles: [require('./app-header-name.scss')]
})

export class ApplicationHeaderName {

}
