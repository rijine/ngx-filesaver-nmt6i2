import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FileSaverModule } from 'ngx-filesaver';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, FileSaverModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
