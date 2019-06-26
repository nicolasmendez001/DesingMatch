import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ModelEmpresa} from '../models/ModelEmpresa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Verficar Usuario
   */
  public login(user: String, pass: String): Observable<ModelEmpresa> {
    alert("Entra: " + user + pass)
    return this.http.post<ModelEmpresa>("url", {user: user, password: pass});
  }
}
