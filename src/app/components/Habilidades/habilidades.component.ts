import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  constructor() {}

  habilidades = [
    {
      img: 'html',
      nombre: 'HTML',
      progreso: 'width: 90%',
    },
  ];

  ngOnInit(): void {}
}
