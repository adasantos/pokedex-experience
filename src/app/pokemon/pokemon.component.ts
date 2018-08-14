import { Component, Input } from "../../../node_modules/@angular/core";

@Component({
    selector: 'pokemon',
    templateUrl: 'pokemon.component.html'
})
export class PokemonComponent{
    @Input() url = '';
    @Input() name = '';
    
}