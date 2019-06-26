import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  private empresa: ModelEmpresa;

  private name: '';
  private password: '';

  public isError = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService,
    public dialog: MatDialog) { }

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
    sessionStorage.setItem('empresa', JSON.stringify(this.empresa));
  }

  cancelLogin(){
    this.dialogRef.close();
  }


  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  openRegister(): void{
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
