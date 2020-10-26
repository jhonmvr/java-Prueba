import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kt-cliente',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PruebaComponent implements OnInit {
  navLinks=[{label:'Lista',link:'list-persona'},
  {label:'Nuevo',link:'new-persona'}]
  constructor() { }

  ngOnInit() {
  }

}
