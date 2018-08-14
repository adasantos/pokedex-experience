import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";

const API = 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/'

@Injectable({providedIn: "root"})
export class PokedexService{

    constructor(private http: HttpClient){        

    }

    listFromPokedex(urlPkm : string){
        console.log(urlPkm);
        return this.http
        .get<Object>(urlPkm)
            
    }

}