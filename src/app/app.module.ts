import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
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
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  entryComponents: [RegisterComponent, LoginComponent, NewProjectComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
})
export class AppModule { }
