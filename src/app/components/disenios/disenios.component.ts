import { Component, OnInit } from '@angular/core';
import { ModelDisenios } from 'src/app/models/ModelDisenios';

@Component({
  selector: 'app-disenios',
  templateUrl: './disenios.component.html',
  styleUrls: ['./disenios.component.css']
})
export class DiseniosComponent implements OnInit {

  disenios: Array<ModelDisenios>;

  constructor() { }

  ngOnInit() {
  }

}
