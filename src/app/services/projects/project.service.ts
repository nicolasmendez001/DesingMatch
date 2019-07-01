import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelProyecto } from '../../models/ModelProyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public delete(id: number): Observable<ModelProyecto> {
    return this.http.delete(`http://localhost:17129/backDesingMatch/web/Proyectos/${id}`);
  }

  public loadProjects(url: string): Observable<ModelProyecto[]> {
    return this.http.get<ModelProyecto[]>(`http://localhost:17129/backDesingMatch/web/Proyectos/${url}`);
  }

  public saveProject(project: ModelProyecto) {
    return this.http.post<ModelProyecto>(`http://localhost:17129/backDesingMatch/web/Proyectos/registrarProyecto`, project);
  }
}
