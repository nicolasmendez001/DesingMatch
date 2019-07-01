import { Component } from '@angular/core';
import { RegisterComponent } from './components/empresa/register/register.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesingMatch';

  constructor(public dialog: MatDialog) { }

  openRegister(): void {
    this.dialog.open(RegisterComponent);
  }
}
