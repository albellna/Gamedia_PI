import { Component } from '@angular/core';
import { UsuarioService } from './nuevo-usuario/usuario.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService],
})
export class AppComponent {
  title = 'gamedia';
  constructor(private usuarioSvc: UsuarioService){}
  ngOnInit(){
      this.usuarioSvc.getAll().subscribe((res) => {
      console.log('Res ', res);
    });
  }
 
}
