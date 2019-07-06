import { ProjectService } from './../../services/projects/project.service';
import { Component, OnInit } from '@angular/core';
import { ModelProyecto } from 'src/app/models/ModelProyecto';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ModelEmpresa } from 'src/app/models/ModelEmpresa';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {

  public proyecto: ModelProyecto;
  public isError = false;

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>, private service: ProjectService) {
    this.proyecto = new ModelProyecto();
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
    this.service.saveProject(this.proyecto, empresa.id).subscribe(
      res => { this.isSaved() },
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
