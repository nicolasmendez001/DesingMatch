import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelEmpresa } from '../../models/ModelEmpresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterEmpresaService {

  constructor(private http: HttpClient) { }

  /**
   * saveEmpresa
   */
  public saveEmpresa(empresa: ModelEmpresa): Observable<ModelEmpresa> {
    return this.http.post<ModelEmpresa>("http://localhost:17129/backDesingMatch/web/empresa/registrarEmpresa", empresa);
  }
}