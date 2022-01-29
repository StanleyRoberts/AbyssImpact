import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CHARS } from './../characters/characters.service';
import { Char } from './../character-card/character-card.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent implements OnInit {

  filterSelected = new FormControl();

  chars = CHARS

  constructor() { }

  ngOnInit(): void {
  }
}