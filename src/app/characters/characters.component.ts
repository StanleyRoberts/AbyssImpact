import { Component, OnInit } from '@angular/core';
import { Char } from './../character-card/character-card.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import characters from '../../assets/data/character_data/characters.json'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  chars: Char[] = characters
  chars$: Observable<Char>;

  filter: FormControl;
  filter$: Observable<Array<String>>;
  filteredChars$: Observable<Char[]>;
  

  constructor() { 
    this.chars$ = from(this.chars);
    this.filter = new FormControl();
    this.filter$ = this.filter.valueChanges;
    this.filteredChars$ = combineLatest(this.chars$, this.filter$).pipe(map(([character, filterval])=>this.chars.filter(char=>filterval.indexOf(char.role)>-1)));
  }

  ngOnInit(): void {
  }

}

