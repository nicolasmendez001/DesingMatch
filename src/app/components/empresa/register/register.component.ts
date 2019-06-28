import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { NgForm } from '@angular/forms';
import { RegisterEmpresaService } from 'src/app/services/registerEmpresa/register-empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public isError = false;
  public errorPass = false;
  private empresa: ModelEmpresa;
  private confirmPass: String;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private server: RegisterEmpresaService,
    private router: Router) {
    this.empresa = new ModelEmpresa();
  }

  openLogin(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  onRegister(form: NgForm) {
    if (form.valid) {
      if (this.empresa.contrasena != this.confirmPass) {
        this.errorPassword();
      } else {
        this.saveEmpresa();
      }
    } else {
      this.onIsError();
    }
  }

  private saveEmpresa() {
    this.empresa.url = this.empresa.nombre + this.generateNumber();
    this.server.saveEmpresa(this.empresa).subscribe(
      // En corchetes guardar la sesion
      res => { this.empresaGuardada(res)},
      error => {
        alert("Error al guardar: " + error);
      }
    );
  }

  private empresaGuardada(empresa: ModelEmpresa) {
    console.log(empresa);
    window.localStorage.setItem('empresa', JSON.stringify(empresa));
    alert("Empresa Guardada.");
    this.dialogRef.close();
    this.router.navigate(['/']);
    location.reload();
  }

  private generateNumber() {
    return Math.round(Math.random() * 100) + "";
  }

  errorPassword(): void {
    this.errorPass = true;
    setTimeout(() => {
      this.errorPass = false;
    }, 2000);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000);
  }

}
