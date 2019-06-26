import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterComponent>) { }

  openLogin(): void{
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

}
