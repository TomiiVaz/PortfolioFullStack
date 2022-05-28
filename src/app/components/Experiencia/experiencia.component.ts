import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor() {}

  experiencia: any = [
    {
      titulo: 'Trabajo grupal',
      cargo: 'Diseñador y Desarrollador',
      fechaInicial: '01-04-2022',
      fechaFinal: '15-05-2022',
      descripcion: 'Trabajo grupal de POKEDEX realizado en PHP',
    },
    {
      titulo: 'Trabaj grupal',
      cargo: 'Diseñador y Desarrollador',
      fechaInicial: '01-09-2021',
      fechaFinal: '01-11-2021',
      descripcion:
        'Trabajo grupal de pagina web realizado en HTML, CSS, BOOSTRAP y JAVASCRIPT',
    },
    {
      titulo: 'Trabaj grupal',
      cargo: 'Diseñador y Desarrollador',
      fechaInicial: '01-09-2021',
      fechaFinal: '01-11-2021',
      descripcion:
        'Trabajo grupal de aplicacion backend de un sistema de cine realizado en JAVA',
    },
    {
      titulo: 'Trabaj grupal',
      cargo: 'Diseñador y Desarrollador',
      fechaInicial: '01-04-2022',
      fechaFinal: 'Actualidad',
      descripcion:
        'Trabajo grupal de aplicacion de sistema de compra de boletos para aerolinea hecho en PHP con MVC y MUSTACHE',
    },
    {
      titulo: 'Trabaj grupal',
      cargo: 'Diseñador y Desarrollador',
      fechaInicial: '01-04-2022',
      fechaFinal: 'Actualidad',
      descripcion:
        'Trabajo grupal de aplicacion web con JAVA SPRING. Intercambio de figuritas ',
    },
  ];

  ngOnInit(): void {}
}
