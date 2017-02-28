import { Component } from '@angular/core';
import * as io from "socket.io-client";

@Component({
    selector: 'main-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    socket = null;

    constructor() {
        this.socket = io('localhost:3000');
        this.socket.on('test', data => {
            console.log(data);
        });
    }
}
