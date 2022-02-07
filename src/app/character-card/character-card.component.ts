import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Char } from './character-card.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  addCharacter!: FormControl; //Creates a from that stores if the character is added
  @Input('character') character!: Char;
  cookieVal:any;

  constructor() {}

  ngOnInit(): void {
    this.addCharacter = new FormControl((localStorage.getItem(this.character.id.toString()))==='true')
    this.addCharacter.valueChanges.subscribe(x=>{localStorage.setItem(this.character.id.toString(), x)})
  }
}
