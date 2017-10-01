import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BillComponent} from "./bill.component";
import {BillService} from "./services/bill.service";

@NgModule({
  declarations: [
    AppComponent, BillComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [BillService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
