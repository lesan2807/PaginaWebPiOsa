import { Component, OnInit } from '@angular/core';
import { Noticia } from '../noticia.model';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[] = [
    new Noticia("Noticia de prueba",
    "lorem ipsum",
    "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
    new Date(2019, 11),
    [{x: 300, y: 200}],
    "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
    ["hola", "como"]
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
