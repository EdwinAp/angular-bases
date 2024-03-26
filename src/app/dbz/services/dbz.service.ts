import { Injectable } from "@angular/core";

import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Gojan',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 2000
    }
  ];

  addOnNewCharacter(character: Character): void {
    this.characters.push({
      ...character,
      id: uuid()
    });
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
