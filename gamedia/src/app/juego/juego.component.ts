import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegos: any;
  token: any;
  constructor(private juegoService: JuegoService, private router: Router) { }

  ngOnInit(): void {
    this.juegoService.getToken();
    this.token = localStorage.getItem('access_token');
    this.mostrarJuego();
  }

  public mostrarJuego() {
    this.juegoService.consultaJuego(this.token).subscribe(data => {
      this.juegos = data;
    },
    (err: any) => {
      console.log(err);
    }
  );
  }
}
