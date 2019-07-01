import { Component, OnInit } from '@angular/core';
import { ModelEmpresa } from 'src/app/models/ModelEmpresa';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private email: '';
  private password: '';

  public isError = false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService) {
      
     }


  onLogin(form: NgForm) {
    if (form.valid) {
      this.login();
    } else {
      this.onIsError();
    }
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      res => {
        this.empresaLogueada(res);
      },
      error => this.onIsError()
    );
  }

  private empresaLogueada(empresa: ModelEmpresa) {
    if (empresa != null) {
      window.localStorage.setItem('empresa', JSON.stringify(empresa));
      this.dialogRef.close();
    } else {
      this.onIsError();
    }
  }

  cancelLogin() {
    this.dialogRef.close();
  }


  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }



}
