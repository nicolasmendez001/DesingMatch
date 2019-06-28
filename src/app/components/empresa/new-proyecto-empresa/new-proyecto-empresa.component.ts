import { ModelEmpresa } from './../../../models/ModelEmpresa';
import { ProyectsEmpresaService } from './../../../services/proyectoEmpresa/proyects-empresa.service';
import { ModelProyecto } from './../../../models/ModelProyecto';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-proyecto-empresa',
  templateUrl: './new-proyecto-empresa.component.html',
  styleUrls: ['./new-proyecto-empresa.component.css']
})
export class NewProyectoEmpresaComponent implements OnInit {

  public proyecto: ModelProyecto;
  public isError = false;

  constructor(public dialogRef: MatDialogRef<NewProyectoEmpresaComponent>, private service: ProyectsEmpresaService) {
    this.proyecto = new ModelProyecto();
   }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    if (form.valid) {
     this.addProject();
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

  addProject() {
    var empresa: ModelEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.proyecto.empresa = empresa;
    this.service.saveProject(this.proyecto).subscribe(
      res => {this.isSaved()},
      error => {
        alert("Error al guardar: " + error);
      }
    );
  }

  private isSaved() {
    alert("Proyecto Guardado");
    this.cancel();
    location.reload();
  }

  cancel() {
    this.dialogRef.close();
  }
}
