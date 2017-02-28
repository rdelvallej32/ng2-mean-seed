import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import * as io from "socket.io-client";

@Component({
    selector: 'main-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    socket = null;

    constructor(public snackbar: MdSnackBar) {
        this.socket = io('localhost:3000');
        this.socket.on('test', data => {
            console.log(data);
        });
    }

    showSnackbar() {
        this.snackbar.open('Good Job Clicking', 'Close', {
            duration: 2000
        });
    }
}
