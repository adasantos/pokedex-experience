import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Pokemon } from "./pokemon";
import { PokedexService } from "../pokedex/pokedex.service";

const API = 'https://pokeapi.co/api/v2/pokemon/'

@Injectable({providedIn: "root"})
export class PokemonService{
    pokedexInfo: string[] = [];
    pokedexService: PokedexService;

    constructor(private http: HttpClient, pokedexService: PokedexService){        

    }

    listFromPokemon(){
        return this.http
        .get<Pokemon>(API)
            
    }

    buscaUrlPokemon(){
        this.listFromPokemon()
        .subscribe(pokemons =>{
           pokemons.results.forEach(pokemon => {
               console.log(pokemon.url)
               this.pokedexInfo = pokemon.url;
           })
           this.pokedexService.listFromPokedex(pokemons.results.url);
        });
        
    }

    buscaNomePokemon(){
        this.listFromPokemon()
        .subscribe(pokemons =>{
        pokemons.results.forEach(pokemon => {
        console.log(pokemon.name) 
        return pokemon.name;
               })
            });
        }
    

}