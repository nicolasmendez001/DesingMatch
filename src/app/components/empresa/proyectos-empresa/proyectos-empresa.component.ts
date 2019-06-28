import { ModelProyecto } from './../../../models/ModelProyecto';
import { ProyectsEmpresaService } from './../../../services/proyectoEmpresa/proyects-empresa.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProyectoEmpresaComponent } from '../new-proyecto-empresa/new-proyecto-empresa.component';

@Component({
  selector: 'app-proyectos-empresa',
  templateUrl: './proyectos-empresa.component.html',
  styleUrls: ['./proyectos-empresa.component.css']
})
export class ProyectosEmpresaComponent implements OnInit {

  public projects: Array<ModelProyecto>;

  constructor(private service: ProyectsEmpresaService, public dialog: MatDialog) { }

  ngOnInit() {
    var empresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.loadProjects(empresa.url);
  }

  private loadProjects(url: string) {
    this.service.loadProjects(url).subscribe(
      res => {
        this.projects = res;
        console.log(this.projects);
      },
      error => alert("Error")
    );
  }

  newProject() {
    const dialogRef = this.dialog.open(NewProyectoEmpresaComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  abrir(proyecto: ModelProyecto) {

  }

  editar(proyecto: ModelProyecto) {

  }

  eliminar(id: number) {
    this.service.delete(id).subscribe(
      res => {
        location.reload();
      },
      error => alert("Error")
    );
  }
}
