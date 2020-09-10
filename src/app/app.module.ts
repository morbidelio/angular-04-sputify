import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

import { NoImagePipe } from './pipes/no-image.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagePipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
