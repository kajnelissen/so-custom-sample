import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent as BarComponent } from '../../node_modules/bar/src/app/app.component';

import { AppComponent as FooComponent } from './app.component';

import { AppModule as BarModule } from '../../node_modules/bar/src/app/app.module';

@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BarModule
  ],
  providers: [],
  bootstrap: [BarComponent]
})
export class AppModule { }
