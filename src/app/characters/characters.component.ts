import { CharacterCardComponent } from './../character-card/character-card.component';
import { Component, OnInit } from '@angular/core';
import { CHARS } from './characters.service';
import { Char } from './../character-card/character-card.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  chars$: Observable<Char>;

  filter: FormControl;
  filter$: Observable<Array<String>>;
  filteredChars$: Observable<Char[]>;
  
  chars = CHARS
  

  constructor() { 
    this.chars$ = from(CHARS);
    this.filter = new FormControl();
    this.filter$ = this.filter.valueChanges;
    this.filteredChars$ = combineLatest(this.chars$, this.filter$).pipe(map(([character, filterval])=>CHARS.filter(char=>filterval.indexOf(char.role)>-1)));
  }

  ngOnInit(): void {
  }

}

