import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  persona:any = {
    nombre : "Tomas Vazquez",
    descripcion : "Estudiante. Tecnicatura en Desarrollo Web",
    ubicacion : "Buenos Aires, Argentina"
  }

  acercaDe:any= {
    descripcion : "Soy una persona entusiasta, que quiere trabajar en un equipo y con ganas de sumergirme en el mundo del desarrollo del software. Mi objetivo es lograr mi independencia económica y continuar con mis estudios en el área de sistemas."
  }

  ngOnInit(): void {
  }

}
