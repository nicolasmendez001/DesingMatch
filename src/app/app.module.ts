import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/empresa/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatButtonModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/empresa/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
