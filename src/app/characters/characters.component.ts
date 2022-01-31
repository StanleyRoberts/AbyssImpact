import { Component, OnInit } from '@angular/core';
import { CHARS } from '../classes/chars';
import { Char } from '../classes/char';

import characters from '../../assets/data/character_data/characters.json'


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  //chars = CHARS
  chars: Char[] = characters

  constructor() { }

  ngOnInit(): void {
  }

}
