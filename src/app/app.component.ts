import { LoginComponent } from './components/empresa/login/login.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './components/empresa/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name : String;
 
  constructor(public dialog: MatDialog, private router: Router){
    var empresa = JSON.parse(window.localStorage.getItem('empresa'));
    if (empresa != null) {
      this.name = empresa.nombre;
    }else{
      this.name = "";
    }
  }

  openLogin(): void{
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  openRegister(): void{
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  validar(): boolean{
    var empresa = JSON.parse(window.localStorage.getItem('empresa'));
    //console.log(empresa.nombre);
    
    return empresa == null;
  }

  salir(){
    window.localStorage.removeItem('empresa');
    this.router.navigate(['/']);
    
  }
}
