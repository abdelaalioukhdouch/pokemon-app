import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';

import { Router } from '@angular/router';


@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private router: Router) {
    this.pokemons = [];
   }

  ngOnInit(): void {
    this.pokemons = LISTPOKEMONS;
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);

  }

}
