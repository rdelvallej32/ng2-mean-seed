import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot([])
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
