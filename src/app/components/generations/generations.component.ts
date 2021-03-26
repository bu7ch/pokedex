import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css'],
})
export class GenerationsComponent implements OnInit {
  generations = [];
  nbGenerations: number;
  // generations= [
  //   'Génerations I',
  //   'Génerations II',
  //   'Génerations III',
  //   'Génerations VI',
  //   'Génerations V',
  //   'Génerations VI',
  //   'Génerations VII',
  // ];
  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit(): void {
    this.servicePokemons.getGenerations().subscribe((results) => {
      this.generations = results.results;
      this.nbGenerations = results.count;
    });
  }
}
