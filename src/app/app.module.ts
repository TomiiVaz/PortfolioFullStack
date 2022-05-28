import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { AcercaDeComponent } from './components/AcercaDe/acerca-de.component';
import { ExperienciaComponent } from './components/Experiencia/experiencia.component';
import { EducacionComponent } from './components/Educacion/educacion.component';
import { HabilidadesComponent } from './components/Habilidades/habilidades.component';
import { LoginComponent } from './components/Login/login.component';
import { ProyectosComponent } from './components/Proyectos/proyectos.component';
import { ServiceTomasService } from './service-tomas.service';
import { Pagina404ComponentComponent } from './components/pagina404-component/pagina404-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    LoginComponent,
    ProyectosComponent,
    Pagina404ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceTomasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
