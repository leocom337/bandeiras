import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplesComponent } from './views/bandeira/simples/simples.component';
import { MediasComponent } from './views/bandeira/medias/medias.component';
import { DificilComponent } from './views/bandeira/dificil/dificil.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplesComponent,
    MediasComponent,
    DificilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
