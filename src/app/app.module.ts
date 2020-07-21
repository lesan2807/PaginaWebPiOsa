import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './General/encabezado/encabezado.component';
import { PieComponent } from './General/pie/pie.component';
import { ProgramaComponent } from './Inicio/programa/programa.component';
import { MapaComponent } from './Inicio/mapa/mapa.component';
import { CalendarioComponent } from './Noticias/calendario/calendario.component';
import { AgendaComponent } from './Noticias/agenda/agenda.component';
import { NoticiasComponent } from './Noticias/noticias/noticias.component';
import { IniciativasComponent } from './Iniciativas/iniciativas/iniciativas.component';
import { NavbarComponent } from './General/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    NoticiasComponent,
    ProgramaComponent,
    AgendaComponent,
    MapaComponent,
    CalendarioComponent,
    IniciativasComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
