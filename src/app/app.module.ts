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
import { InicioComponent } from './components/info/inicio/inicio.component';
import { ProyectosEmpresaComponent } from './components/empresa/proyectos-empresa/proyectos-empresa.component';
import { NewProyectoEmpresaComponent } from './components/empresa/new-proyecto-empresa/new-proyecto-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    ProyectosEmpresaComponent,
    NewProyectoEmpresaComponent,
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
  entryComponents: [LoginComponent, RegisterComponent, NewProyectoEmpresaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
