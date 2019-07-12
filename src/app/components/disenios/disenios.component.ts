import { DiseniosService } from './../../services/disenios/disenios.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ModelDisenios } from 'src/app/models/ModelDisenios';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-disenios',
  templateUrl: './disenios.component.html',
  styleUrls: ['./disenios.component.css']
})
export class DiseniosComponent implements OnInit {

  public disenios: Array<ModelDisenios>;

  constructor(private service: DiseniosService, @Inject(MAT_DIALOG_DATA) disenios) {
    if (disenios == null) {
      this.disenios = new Array<ModelDisenios>();
    }else{
      this.disenios = disenios;
    }
    console.log(disenios);
    
   }

   abrir(disenio: ModelDisenios){

   }

  ngOnInit() {
  }

}
