import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ResultadosPortadaService } from './resultados-portada.service';
import {UtilidadesService} from '../utilidades.service';

@Component({
  selector: 'app-resultados-portada',
  templateUrl: './resultados-portada.component.html',
  styleUrls: ['./resultados-portada.component.css']
})
export class ResultadosPortadaComponent implements OnInit {

  juegos: any;
  token: any;
  opcion: any;

  constructor(private resultadosService: ResultadosPortadaService, private utilidadesService: UtilidadesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      this.opcion = response.opcion;
    });
  }

  ngOnInit(): void {
    this.utilidadesService.getToken();
    this.token = localStorage.getItem('access_token');
    this.mostrarJuego();
  }

  public mostrarJuego() {
    this.resultadosService.consultaJuego(this.token,this.opcion).subscribe(data => {
      this.juegos = data;
    },
    (err: any) => {
      console.log(err);
    }
  );
  }
}
