import { ShowImgComponent } from './../show-img/show-img.component';
import { DiseniosService } from './../../services/disenios/disenios.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ModelDisenios } from 'src/app/models/ModelDisenios';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-disenios',
  templateUrl: './disenios.component.html',
  styleUrls: ['./disenios.component.css']
})
export class DiseniosComponent implements OnInit {

  public disenios: Array<ModelDisenios>;
  imagePath: any;
  p: number = 1;

  constructor(private service: DiseniosService, private _sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) idProyecto,
    public dialog: MatDialog, public refD: MatDialogRef<DiseniosComponent>) {
    this.disenios = new Array<ModelDisenios>();
    this.loadDisenios(idProyecto);
  
  }

  ngOnInit() {
    this.refD.updatePosition({ top: `100px` });
  }

  private loadDisenios(idProyecto: number) {
    this.service.loadList(idProyecto).subscribe(
      res => {
        this.disenios = res;
      },
      error => {
        alert("Error al cargar los diseños")
      });      
  }

  abrir(url: String) {
    this.service.getImg(url).subscribe(
      res => {
        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + res);
        this.dialog.open(ShowImgComponent, { width: '900px', height: '550px', data: this.imagePath });
      },
      error => {
        alert("error al cargar la imagen" + error)
        console.log(error);

      });
  }


}
