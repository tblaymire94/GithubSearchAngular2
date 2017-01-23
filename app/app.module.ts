import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Http, Headers} from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
