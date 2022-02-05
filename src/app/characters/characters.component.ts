import { Component, OnInit } from '@angular/core';
import { Char } from './../character-card/character-card.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, from, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import characters from '../../assets/data/character_data/characters.json'

/**
 * Defines and displays the full list of characters with filter options
 */

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  /** The list of all characters */
  chars: Char[] = characters
  /** An observable on the list of characters */
  chars$: Observable<Char>;

  /** A FormControl for the filter buttons */
  filter: FormControl;
  /** An observer watching the filter buttons */
  filter$: Observable<Array<string>>;
  /** An array of the characters that match the
   * current filters as an observable  */
  filteredChars$: Observable<Char[]>;
  
  /** Construct the list of characters then subscribes to the FormControl to
   * update the list of filtered characters to display
   */
  constructor() { 
    this.chars$ = from(this.chars);
    this.filter = new FormControl();
    this.filter$ = this.filter.valueChanges.pipe(startWith([]));
     // i hate js: returns characters who have at least one role belonging to one filter
    this.filteredChars$ = combineLatest([this.chars$, this.filter$])
                          .pipe(map(([, filterval])=> this.chars
                          .filter(char=> !(filterval.filter(val=>char.roles
                          .map(function(x){return x.role;})
                          .includes(val)).length>0))));
  }

  /** called on load */
  ngOnInit(): void {
  }

}