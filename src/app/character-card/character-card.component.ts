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
  @Input('character') character!: Char; //Pulls in the Char class

  constructor() {}

  ngOnInit(): void {
    //Grabs if you have a character from the local storage and if it's null returns false
    this.addCharacter = new FormControl((localStorage.getItem(this.character.id.toString()))==='true')
    //Subscibes to the add button and updates if the user wants to add or remove a character from localstorage
    this.addCharacter.valueChanges.subscribe(x=>{localStorage.setItem(this.character.id.toString(), x)})
  }
}
