import { DiseniosService } from './../../services/disenios/disenios.service';
import { ModelDisenios } from 'src/app/models/ModelDisenios';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

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

  constructor(private service: DiseniosService) {
    this.disenio = new ModelDisenios();
    this.idProyecto = 3;
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
    this.disenio.rutaImagen = "ruta";
  //  console.log("Base --> ", this.imgBase64);

    console.log("Diseño --> ", this.disenio);
    

    this.service.saveDisenio(this.disenio, this.idProyecto).subscribe(
      res => { this.isSaved(res)
      },
      error => {
        alert("Error al guardar");
      });
  }

  private isSaved(disenio: ModelDisenios) {
    console.log(disenio);
    
    alert("Hemos recibido tu diseño y lo estamos procesando para que sea publicado");
    this.sendImg(disenio.nombresDisenador.replace(/ /g, "") + disenio.id + "" + this.idProyecto);
   // location.reload();
  }

  sendImg(name: String) {
    console.log(this.imgBase64);
    
    this.service.senImg(this.imgBase64, name).subscribe(
      res => { this.changePath(res) },
      error => {
        alert("Error al enviar img");
      });
  }

  changePath(res){
    this.disenio.rutaImagen = res[0];

    this.service.UpdateDisenio(this.disenio).subscribe(
      res => {
        alert("Path actualizado");
      },
      error => {
        alert("Error al cambiar el path");
      });
        
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
