import { Component } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { PokedexService } from './pokedex/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: any[] = [];
  
  constructor(pokemonService: PokemonService){
    pokemonService
    .listFromPokemon()
    .subscribe(pokemons =>{
       pokemons.results.forEach(pokemon => {
       console.log(pokemon.url) 
       console.log(pokemon.name) 
       })
    });
  }

 }