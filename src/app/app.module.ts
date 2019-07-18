import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatPaginatorModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/empresa/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { LoginComponent } from './components/empresa/login/login.component';
import { DiseniosComponent } from './components/disenios/disenios.component';
import { ShowUrlComponent } from './components/show-url/show-url.component';
import { AddDisenioComponent } from './components/add-disenio/add-disenio.component';
import { ShowImgComponent } from './components/show-img/show-img.component';
import { NgxPaginationModule } from "ngx-pagination";

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: ':project', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProjectsComponent,
    InicioComponent,
    NewProjectComponent,
    LoginComponent,
    DiseniosComponent,
    ShowUrlComponent,
    AddDisenioComponent,
    ShowImgComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  entryComponents: [RegisterComponent, LoginComponent, NewProjectComponent, DiseniosComponent, ShowUrlComponent, AddDisenioComponent, ShowImgComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
})
export class AppModule { }
