import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CHARS } from '../classes/chars';
import { Char } from '../classes/char'

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent implements OnInit {

  chars = CHARS

  filterSelected = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
}
