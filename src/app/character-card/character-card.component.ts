import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Char } from './character-card.service';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  addCharacter!: FormControl;
  @Input('character') character!: Char;
  cookieVal:any;

  constructor() {}

  ngOnInit(): void {
    this.addCharacter = new FormControl(localStorage.getItem(this.character.id.toString())); //Creates a from that stores if the character is added
    this.addCharacter.valueChanges.subscribe(x=>{this.cookieUpdate(x)}) //If the user clicks to add or remove a character, the cookie gets uppdated
    this.cookieVal = localStorage.getItem(this.character.id.toString()); //Grabs if the user has the character or not from the cookie
  }
  cookieUpdate(x: string){
    localStorage.setItem(this.character.id.toString(), x)
    this.cookieVal = localStorage.getItem(this.character.id.toString())
  }
}
