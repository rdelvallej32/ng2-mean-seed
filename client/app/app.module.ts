import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavbarModule } from './common/navbar/navbar.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        RouterModule.forRoot([])
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
