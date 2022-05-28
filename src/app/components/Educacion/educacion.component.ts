import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  educacion:any = {
    descripcion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae providen"
  }

  ngOnInit(): void {
  }

}
