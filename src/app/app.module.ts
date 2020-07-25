import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { SearchNearestOutletComponent } from './components/search-nearest-outlet/search-nearest-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNearestOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
