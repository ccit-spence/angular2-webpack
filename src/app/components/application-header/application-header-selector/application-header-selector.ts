import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'application-header-selector',
    properties: ['title', 'visible'],
    template: require('./application-header-selector.html'),
    styles: [require('./app-header-selector.scss')]
})

export class ApplicationHeaderSelector {
    visible: boolean;

    constructor() {
        this.visible = false;
    }

    toggle() {
        this.visible = !this.visible;
    }
}
