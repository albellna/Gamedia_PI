import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  juegos: any;
  token: any;
  texto: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public botonBuscar(busqueda: any) {
    this.router.navigate(['/busqueda', busqueda.value])
  }
}
