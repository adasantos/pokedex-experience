import { Component, Input } from "../../../node_modules/@angular/core";

@Component({
    selector: 'pokedex',
    templateUrl: 'pokedex.component.html'
})
export class PokedexComponent{
    @Input() id = '';
    @Input() name = '';
    @Input() height = '';
    @Input() sprite = '';
    @Input() types = '';
    @Input() stats = '';

}