import { MatDialogRef, MatDialog } from '@angular/material';
import { Component} from '@angular/core';
import { LoginService } from 'src/app/services/loginEmpresa/login.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { ModelEmpresa } from 'src/app/models/ModelEmpresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  private empresa: ModelEmpresa;

  private email: '';
  private password: '';

  public isError = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router) { }

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
    this.router.navigate(['/']);
    location.reload();
   }else{
     this.onIsError();
   }
   
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
