import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone:false,
})
export class ListComponentDbz { 
  @Input()
  public characterList:Character[] = []
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id?:string):void{
    this.onDelete.emit(id);
  }

}
