import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './common/header/header.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        RouterModule.forRoot([])
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
