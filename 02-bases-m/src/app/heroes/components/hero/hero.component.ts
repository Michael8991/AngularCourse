import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  get capitalizeName():string{ 
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age} years`;
  }

  changeName():void{
    this.name = 'spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

}
