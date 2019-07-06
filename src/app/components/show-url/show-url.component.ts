import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-url',
  templateUrl: './show-url.component.html',
  styleUrls: ['./show-url.component.css']
})
export class ShowUrlComponent {

  public path: String;
  public url: String;

  constructor(public dialogRef: MatDialogRef<ShowUrlComponent>, @Inject(MAT_DIALOG_DATA) url) {
    this.path = `http://localhost:4200/${url}`;
    this.url = url;
   }

   close(){
    this.dialogRef.close();
   }
}
