import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CulturasComponent } from './culturas/culturas.component';
import { CultivaresComponent } from './cultivares/cultivares.component';
import { HttpClientModule } from '@angular/common/http'





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CulturasComponent,
    CultivaresComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
