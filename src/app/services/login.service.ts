import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import {ModelEmpresa} from '../models/ModelEmpresa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Verficar Usuario
   */
  public login(user: string, pass: string): Observable<ModelEmpresa> {
    let params = new HttpParams();
    params = params.append('user', user);
    params = params.append('password', pass);
    return this.http.get<ModelEmpresa>("http://localhost:8080/", {params});
  }
}
