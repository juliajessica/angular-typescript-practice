import { BrowserModule } from '@angular/platform-browser'; //imports build in directives
import { NgModule } from '@angular/core'; //imports module code from the angular frameworks core

import { AppComponent } from './app.component'; //our apps root component


@NgModule({ //decorator - informs angular that this is a module
  declarations: [ //array of all the components that will reside in this module
    AppComponent
  ],
  imports: [//this is an array of other moduels and content this moduel requires
    BrowserModule
  ],
  // providers: [],
  bootstrap: [AppComponent]//bootstrapping is an array of components required immediately upon launching the application
})
export class AppModule { }
