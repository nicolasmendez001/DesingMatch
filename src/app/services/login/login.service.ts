import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelEmpresa } from 'src/app/models/ModelEmpresa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Verficar Usuario
   */
  public login(email: string, password: string): Observable<ModelEmpresa> {
    return this.http.get<ModelEmpresa>(`http://localhost:17129/backDesingMatch/web/empresa/login/${email}/${password}`);
  }
}
