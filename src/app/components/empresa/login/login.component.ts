import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private empresa: ModelEmpresa;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  /**
   * login
   */
  public login() {
    alert("entra al componente");

  }
}
