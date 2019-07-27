import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DiseniosService } from 'src/app/services/disenios/disenios.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-diseng-img',
  templateUrl: './diseng-img.component.html',
  styleUrls: ['./diseng-img.component.css']
})
export class DisengImgComponent implements OnInit {

  public listDisenios: Array<any>;

  constructor(@Inject(MAT_DIALOG_DATA) idProject, private service: DiseniosService, private _sanitizer: DomSanitizer) {
    this.listDisenios = new Array<any>();
    service.loadPath(idProject).subscribe(
      res => {
        console.log("Devuelve--> ", res);
        this.savePath(res);
      },
      error =>{
        alert("Error al cargar la lista de path");
      }
    )

  }

  private savePath(listPath: Array<String>) {
    listPath.forEach(element => {
      this.service.getImg(element).subscribe(
        res => {
          this.saveImg(res[0]);
        },
        error => {
          alert("error al cargar la imagen" + error)
          console.log(error);
        });;
    });
  }

  private saveImg(path: any) {
    this.listDisenios.push(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + path));
  }

  ngOnInit() {
  }

}
