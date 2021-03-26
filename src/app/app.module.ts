import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import  localeFR from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
