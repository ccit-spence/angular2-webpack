import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'application-header-dropdown',
    properties: ['title', 'visible'],
    template: require('./application-header-dropdown.html'),
    styles: [require('./app-header-dropdown.scss')]
})

export class ApplicationHeaderDropdown {
    visible: boolean;

    constructor() {
        this.visible = false;
    }

    toggle() {
        this.visible = !this.visible;
    }
}
