import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component'; 
import { PerfilPersonalComponent } from './views/perfil-personal/perfil-personal.component';
import { GestionUsuariosComponent } from './views/gestion-usuarios/gestion-usuarios.component';
import { ForoComponent } from './views/foro/foro.component';
import { TorneoViewComponent } from './views/torneo-view/torneo-view.component';
import { ListaTorneosComponent } from './views/lista-torneos/lista-torneos.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'perfilPersonal', component: PerfilPersonalComponent },
  { path: 'glitchgaming', component: GestionUsuariosComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'torneos', component: TorneoViewComponent },
  { path: 'listaTorneos', component: ListaTorneosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
