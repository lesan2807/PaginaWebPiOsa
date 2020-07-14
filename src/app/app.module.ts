import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GeneralComponent } from './general/general.component';
import { EncabezadoComponent } from './general/encabezado/encabezado.component';
import { PieComponent } from './general/pie/pie.component';
import { NoticiasComponent } from './Inicio/noticias/noticias.component';
import { ProgramaComponent } from './Inicio/programa/programa.component';
import { AgendaComponent } from './Inicio/agenda/agenda.component';
import { MapaComponent } from './Inicio/mapa/mapa.component';
import { CalendarioComponent } from './Noticias/calendario/calendario.component';
import { IniciativasComponent } from './Iniciativas/iniciativas/iniciativas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    EncabezadoComponent,
    PieComponent,
    NoticiasComponent,
    ProgramaComponent,
    AgendaComponent,
    MapaComponent,
    CalendarioComponent,
    IniciativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
