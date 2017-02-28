import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot()
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
