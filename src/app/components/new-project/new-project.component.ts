import { ProjectService } from './../../services/projects/project.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ModelProyecto } from 'src/app/models/ModelProyecto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  public existProject = false;

  constructor(public dialogRef: MatDialogRef<NewProjectComponent>, private service: ProjectService, @Inject(MAT_DIALOG_DATA) proyecto) {
    if (proyecto != null) {
      this.existProject = true;
      this.proyecto = proyecto;
    } else {
      this.proyecto = new ModelProyecto();
    }
    console.log(this.proyecto);

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
    var empresa: ModelEmpresa = JSON.parse(window.sessionStorage.getItem('empresa'));
    if (this.existProject) {
      this.editProject();
    } else {
      this.saveProject(empresa.id);
    }
  }

  private editProject() {
    this.service.editProject(this.proyecto).subscribe(
      res => { this.isSaved() },
      error => {
        alert("Error al editar: " + error);
      }
    );
  }

  private saveProject(id: number) {
    this.service.saveProject(this.proyecto, id).subscribe(
      res => {
        this.isSaved();
      },
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
