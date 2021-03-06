import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { JuegoComponent } from './juego/juego.component';
import { LoginComponent } from './login/login.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { ResultadosPortadaComponent } from './resultados-portada/resultados-portada.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'quienessomos', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'game/:id', component: JuegoComponent},
  {path: 'busqueda/:busqueda', component: ResultadoBusquedaComponent},
  {path: 'register', component: NuevoUsuarioComponent},
  {path: 'portada/:opcion', component: ResultadosPortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
