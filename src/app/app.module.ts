import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TorneoComponent } from './components/torneo/torneo.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilPersonalComponent } from './views/perfil-personal/perfil-personal.component';
import { GestionUsuariosComponent } from './views/gestion-usuarios/gestion-usuarios.component';
import { ForoComponent } from './views/foro/foro.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { TorneoViewComponent } from './views/torneo-view/torneo-view.component';
import { ListaTorneosComponent } from './views/lista-torneos/lista-torneos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    TorneoComponent,
    NoticiaComponent,
    LoginComponent,
    PerfilPersonalComponent,
    GestionUsuariosComponent,
    ForoComponent,
    EquiposComponent,
    TorneoViewComponent,
    ListaTorneosComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
