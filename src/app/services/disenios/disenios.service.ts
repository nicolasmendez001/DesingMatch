import { ModelDisenios } from 'src/app/models/ModelDisenios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseniosService {

  constructor(private http: HttpClient) { }

  /**
   * SenImg
   */
  public senImg(img: String, name: String) {
    return this.http.post<String>(`http://localhost:17129/backDesingMatch/web/disenio/saveImg/${name}`, img);
  }

  public saveDisenio(diseñio: ModelDisenios, idProyecto: number) {
    return this.http.post<ModelDisenios>(`http://localhost:17129/backDesingMatch/web/disenio/addDisenio/${idProyecto}`, diseñio);
  }

  /**
   * UpdateDisenio
   */
  public UpdateDisenio(disenio: ModelDisenios) {
    return this.http.put<ModelDisenios>('http://localhost:17129/backDesingMatch/web/disenio/update', disenio);
  }
}
