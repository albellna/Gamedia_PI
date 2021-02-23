import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';



@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})

export class NuevoUsuarioComponent implements OnInit {

  form: any = {};
  usuario = [] as any;
  creado = false;
  failuser = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.usuarioService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failuser = false;

    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failuser = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}