import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./@shared/shared.module";
import {CoreModule} from "./@core/core.module";
import { AddLecturesComponent } from './@views/add-lectures/add-lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLecturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
