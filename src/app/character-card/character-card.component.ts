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

  loaded: boolean = false;
  addCharacter = new FormControl(false); //Creates a from that stores if the character is added
  @Input('character') character!: Char;
  cookieVal:any;

  constructor() {}

  ngOnInit(): void {
    this.addCharacter.valueChanges.subscribe(x=>{this.cookieUpdate(x)})
    this.cookieVal = localStorage.getItem(this.character.id.toString());
    this.loaded = true;
  }
  cookieUpdate(x: string){
    localStorage.setItem(this.character.id.toString(), x)
    this.cookieVal = localStorage.getItem(this.character.id.toString())
  }
}
