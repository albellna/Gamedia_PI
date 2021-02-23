import { Component, OnInit } from '@angular/core';
import { ResultadoBusquedaService } from './resultado-busqueda.service';
import { ActivatedRoute } from '@angular/router';
import { UtilidadesService } from '../utilidades.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  token: any;
  busqueda: any;
  resultados: any;

  constructor(private resultado: ResultadoBusquedaService, private utilidadesService: UtilidadesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      this.busqueda = response.busqueda;
    });
  }

  ngOnInit(): void {
    this.utilidadesService.getToken();
    this.token = localStorage.getItem('access_token');
    this.mostrarResultados();
  }

  public mostrarResultados() {
    this.resultado.queryBusqueda(this.token, this.busqueda).subscribe(data => {
      this.resultados = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
}