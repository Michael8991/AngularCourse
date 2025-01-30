import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone:false,
})

export class MainPageComponent  {
    constructor(private dbzServices: DbzServices){}
    get characters(): Character[]{
        return [...this.dbzServices.characters];
    }
    onDeleteCharacter(id:string): void{
        this.dbzServices.onDeleteCharacterById(id);
    }
    onNewCharacter(character: Character){
        this.dbzServices.addCharacter(character)
    }
}