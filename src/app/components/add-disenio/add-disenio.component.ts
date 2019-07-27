import { DiseniosService } from './../../services/disenios/disenios.service';
import { ModelDisenios } from 'src/app/models/ModelDisenios';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-disenio',
  templateUrl: './add-disenio.component.html',
  styleUrls: ['./add-disenio.component.css']
})
export class AddDisenioComponent implements OnInit {

  public isError = false;
  private disenio: ModelDisenios;
  imgSelect = null;
  imgBase64: String;
  private idProyecto: number;
  private img: any;

  constructor(private service: DiseniosService, @Inject(MAT_DIALOG_DATA) id, public dialogRef: MatDialogRef<AddDisenioComponent>) {
    this.disenio = new ModelDisenios();
    this.idProyecto = id;
  }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    if (form.valid) {
      this.sendDisenio();
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000);
  }

  private getDate() {
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  sendDisenio() {
    this.disenio.estado = "EN_PROCESO";
    this.disenio.fechaCreacion = this.getDate();
    this.disenio.originalPath = "ruta";
  //  console.log("Base --> ", this.imgBase64);

    console.log("Diseño --> ", this.disenio);
    

    this.service.saveDisenio(this.disenio, this.idProyecto).subscribe(
      res => { this.isSaved(res), console.log("Reponde ->", res);
      
      },
      error => {
        alert("Error al guardar");
      });
  }

  private isSaved(disenio) {
    this.disenio = disenio;
    console.log(disenio);
    
    alert("Hemos recibido tu diseño y lo estamos procesando para que sea publicado");
    this.sendImg(disenio.nombresDisenador.replace(/ /g, "") + disenio.id + "" + this.idProyecto);
   
  }

  sendImg(name: String) {
    this.service.senImg(this.imgBase64, name).subscribe(
      res => { this.changePath(res) },
      
      
      error => {
        alert("Error al enviar img");
      });
  }

  changePath(res){
    console.log("Esto llega a editar ", res);
    this.disenio.originalPath = res[0];
    console.log("Diseño editado -> ", this.disenio);
    this.service.UpdateDisenio(this.disenio).subscribe(
      res => {
        console.log("Path actualizado");
      },
      error => {
        alert("Error al cambiar el path");
      });
        this.dialogRef.close();
  }

  selectImg(event) {
    this.imgSelect = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(this.imgSelect);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imgBase64 = reader.result;
  }
}
