import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // custom components, directive, and pipes that belong to this modules
    AppComponent
  ],
  imports: [ // set of ngModules available to this module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Injectable objects - Dependency Injection like services, authguard, etc,.
  bootstrap: [AppComponent]   //The set of components that are bootstrapped when this module is bootstrapped. The components listed here are automatically added to entryComponents.
})
export class AppModule { }


/**
 * Decorator
 * -----------
 * Decorator that marks a class as an NgModule and supplies configuration metadata.
 * 
 * BrowserModule
 * --------------
 * Imported from @angular/platform-brows
 * It is used when you want to run your application in a browser.
 * 
 * CommonModule
 * ------------
 * Imported from @angular/common
 * It is used when you want to use directives - NgIf, NgFor and so on.
 * 
 */