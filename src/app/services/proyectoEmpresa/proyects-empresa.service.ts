import { ModelProyecto } from './../../models/ModelProyecto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectsEmpresaService {
  
  public delete(id: number): Observable<ModelProyecto> {
    return this.http.delete(`http://localhost:17129/backDesingMatch/web/Proyectos/${id}`);
  }

  constructor(private http: HttpClient) { }

  public loadProjects(url: string): Observable<ModelProyecto[]> {
    return this.http.get<ModelProyecto[]>(`http://localhost:17129/backDesingMatch/web/Proyectos/${url}`);
  }

  public saveProject(project: ModelProyecto) {
    return this.http.post<ModelProyecto>(`http://localhost:17129/backDesingMatch/web/Proyectos/registrarProyecto`, project);
  }
}
