import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelProyecto } from '../../models/ModelProyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  constructor(private http: HttpClient) { }

  public delete(idEmpresa: number, idProyecto: number): Observable<ModelProyecto> {
    return this.http.delete(`http://localhost:17129/backDesingMatch/web/Proyectos/${idEmpresa}/${idProyecto}`);
  }

  public loadProjects(url: string): Observable<ModelProyecto[]> {
    return this.http.get<ModelProyecto[]>(`http://localhost:17129/backDesingMatch/web/Proyectos/${url}`);
  }

  public saveProject(project: ModelProyecto, id:number) {
    return this.http.post<ModelProyecto>(`http://localhost:17129/backDesingMatch/web/Proyectos/registrarProyecto/${id}`, project);
  }

  editProject(proyecto: ModelProyecto) {
    return this.http.put<ModelProyecto>(`http://localhost:17129/backDesingMatch/web/Proyectos/editarProyecto`, proyecto);
  }
}
