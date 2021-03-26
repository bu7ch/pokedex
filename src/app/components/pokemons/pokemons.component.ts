import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  pokemons = [];
  count = 0;
  @Output() evenemitClicImage = new EventEmitter();
 

  clicSurImage(nom){
    this.evenemitClicImage.emit(nom)
  } 

  constructor(private pokemonService : PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.count = this.pokemonService.countPokemons();
  }
}
