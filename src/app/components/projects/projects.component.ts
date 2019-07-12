import { AddDisenioComponent } from './../add-disenio/add-disenio.component';
import { NewProjectComponent } from './../new-project/new-project.component';
import { ProjectService } from '../../services/projects/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelProyecto } from 'src/app/models/ModelProyecto';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../empresa/login/login.component';
import { ModelEmpresa } from 'src/app/models/ModelEmpresa';
import { DiseniosComponent } from '../disenios/disenios.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<ModelProyecto>;
  private empresa: ModelEmpresa = new ModelEmpresa;

  constructor(private active: ActivatedRoute, private service: ProjectService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadProjects(this.active.snapshot.params['project']);
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

  login() {
    const diallgRest = this.dialog.open(LoginComponent);
    diallgRest.afterClosed().subscribe(result => {
      this.empresa = JSON.parse(window.localStorage.getItem('empresa'));
      console.log(this.empresa);
    });
  }

  newProject() {
    const dialogRef = this.dialog.open(NewProjectComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  diseniosLogin(proyecto: ModelProyecto) {
    console.log(proyecto.disenios);

    const dialogRef = this.dialog.open(DiseniosComponent, {
      height: '500px',
      data: proyecto.disenios});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  editar(proyecto: ModelProyecto) {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: proyecto });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  eliminar(id: number) {
    console.log("Proyecto a eliminar ", id);
    
    this.service.delete(this.empresa.id, id).subscribe(
      res => {
        location.reload();
      },
      error => alert("Error")
    );
  }

  isLogin(): boolean {
    this.empresa = JSON.parse(window.localStorage.getItem('empresa'));
    return this.empresa != null;
  }

  editarInfo() {
    alert("Sirve editar");
  }

  salir() {
    window.localStorage.clear();
  }

  sendDsenio(id: number){
    this.dialog.open(AddDisenioComponent, {data: id});
  }
}
