import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './General/banner/banner.component';
import { PieComponent } from './General/pie/pie.component';
import { ProgramaComponent } from './Inicio/programa/programa.component';
import { MapaComponent } from './Inicio/mapa/mapa.component';
import { CalendarioComponent } from './Noticias/calendario/calendario.component';
import { AgendaComponent } from './Noticias/agenda/agenda.component';
import { NoticiasComponent } from './Noticias/noticias/noticias.component';
import { IniciativasComponent } from './Iniciativas/iniciativas/iniciativas.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TituloComponent } from './General/titulo/titulo.component';
import { AcercaDeInicioComponent } from './General/acerca-de-inicio/acerca-de-inicio.component';
import { NoticiasSliderComponent } from './Noticias/noticias-slider/noticias-slider.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PieComponent,
    NoticiasComponent,
    ProgramaComponent,
    AgendaComponent,
    MapaComponent,
    CalendarioComponent,
    IniciativasComponent,
    NavbarComponent,
    TituloComponent,
    AcercaDeInicioComponent,
    NoticiasSliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
