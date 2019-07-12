import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { RegisterEmpresaService } from 'src/app/services/register/register-empresa.service';
import { ShowUrlComponent } from '../../show-url/show-url.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public isError = false;
  public errorPass = false;
  private confirmPass: String;
  private empresa: ModelEmpresa;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterComponent>,
   private server: RegisterEmpresaService,
   ) {
    this.empresa = new ModelEmpresa();
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
    this.empresa.url = this.nameEmpresa(this.empresa.nombre) + this.generateNumber();
    this.server.saveEmpresa(this.empresa).subscribe(
      // En corchetes guardar la sesion
      res => { this.empresaGuardada(res)},
      error => {
        alert("Error al guardar: ");
      }
    );
  }

  private nameEmpresa(name: String): String{
    return name.replace(/ /g, "");
  }

  private empresaGuardada(empresa: ModelEmpresa) {
    this.dialogRef.close();
    this.dialog.open(ShowUrlComponent, {data:empresa.url});
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
