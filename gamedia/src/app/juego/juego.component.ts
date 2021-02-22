import { Component, OnInit } from '@angular/core';
import { JuegoService } from './juego.service';
import {ActivatedRoute} from '@angular/router';
import {UtilidadesService} from '../utilidades.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegos: any;
  token: any;
  id: any;
  constructor(private juegoService: JuegoService, private utilidadesService: UtilidadesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.utilidadesService.getToken();
    this.token = localStorage.getItem('access_token');
    this.mostrarJuego();
  }

  public mostrarJuego() {
    this.juegoService.consultaJuego(this.token,this.id).subscribe(data => {
      this.juegos = data;
    },
    (err: any) => {
      console.log(err);
    }
  );
  }
}
