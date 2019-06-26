import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private empresa: ModelEmpresa;

  private name: '';
  private password: '';

  public isError = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  /**
   * login
   */

  onLogin(form: NgForm) {
    if (form.valid) {
      this.login();
    } else {
      this.onIsError();
    }
  }

  login() {
    alert("Entra a verificar");
    this.loginService.login(this.name, this.password).subscribe(
      res => {
        this.empresa = res;
        console.log(this.empresa);

      },
      error => this.onIsError()
    );
    sessionStorage.setItem('mueble', JSON.stringify(this.empresa));
  }


  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
