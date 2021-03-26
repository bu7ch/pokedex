import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons'
import { FormSearchPokemon } from 'src/app/models/form-search-pokemon';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  pokemons = [];
  count = 0;
  faOptinMonster=faOptinMonster;
  formSearchPokemon = new FormSearchPokemon('')
  @Output() evenemitClicImage = new EventEmitter();
  easterEggs = false;
 

  clicSurImage(nom){
    this.evenemitClicImage.emit(nom)
  } 

  constructor(private pokemonService : PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.count = this.pokemonService.countPokemons();
    console.log(this.pokemons)
  }

  search(nomPokemon){
    this.pokemons = this.pokemonService.searchPokemon(nomPokemon);
    this.easterEggs = false;
    if(nomPokemon == "ah"){
      this.easterEggs = true;
    }
  }
  cancelSearch() {
    this.pokemons = this.pokemonService.getPokemons();
    this.formSearchPokemon.setNom('')
  }
}
