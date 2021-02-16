import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { JuegoComponent } from './juego/juego.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'quienessomos', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'juego', component: JuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
