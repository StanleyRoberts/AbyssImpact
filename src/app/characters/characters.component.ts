import { CharacterCardComponent } from './../character-card/character-card.component';
import { Component, OnInit } from '@angular/core';
import { CHARS } from './characters.service';
import { Char } from './../character-card/character-card.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  chars = CHARS

  constructor() { }

  ngOnInit(): void {
  }

}
