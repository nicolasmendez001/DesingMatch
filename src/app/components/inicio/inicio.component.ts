import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../empresa/register/register.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    window.sessionStorage.clear();
  }

  openRegister(){
    this.dialog.open(RegisterComponent);
  }
}
