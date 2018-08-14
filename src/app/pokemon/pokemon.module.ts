import { NgModule } from "../../../node_modules/@angular/core";
import { PokemonComponent } from "./pokemon.component";

@NgModule({
    declarations:[PokemonComponent],
    exports:[PokemonComponent]
})

export class PokemonModule{

}