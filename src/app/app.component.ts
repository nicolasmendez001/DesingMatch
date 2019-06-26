import { LoginComponent } from './components/empresa/login/login.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './components/empresa/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(public dialog: MatDialog){
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
}
