import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-img',
  templateUrl: './show-img.component.html',
  styleUrls: ['./show-img.component.css']
})
export class ShowImgComponent implements OnInit {

  imagePath: any;

  constructor(@Inject(MAT_DIALOG_DATA) path, public refD: MatDialogRef<ShowImgComponent>) { 
    this.imagePath = path;
  }

  close(){
    this.refD.close();
  }

  ngOnInit() {
    this.refD.updatePosition({ top: `80px`});
  }

}
