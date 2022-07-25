import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  constructor() {}

  educacion: any = [
    {
      institucion:
        'Nuestra señora del Pilar',
      descripcion: 'Bachillerato en Cs. Sociales',
      fechaInicio: '2013',
      fechaFinalizacion: '2019',
    },
    {
      institucion:
        'Universidad nacional de la matanza',
      descripcion: 'Tec. Universitaria en desarrollo web',
      fechaInicio: '2021',
      fechaFinalizacion: 'Actualidad',
    },
  ];

  ngOnInit(): void {}
}
