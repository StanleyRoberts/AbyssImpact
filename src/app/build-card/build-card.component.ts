import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import characters from '../../assets/data/character_data/characters.json';
import { Char } from '../character-card/character-card.service';

/**
 * Generates a character profile for use in a team viewer
 * with a FormControlled character select
 */

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.css']
})

export class BuildCardComponent implements OnInit {
  /** A form group for the character select */
  public form!: FormGroup;
  /** A list of ID's for characters to select from */
  @Input('ID') charIds!: number[];
  /** The parent team ID */
  @Input('teamID') teamId!: number;
  /** List of characters who match provided IDs */
  chars!: Char[];

  /** The currently selected character */
  selectedChar!: FormControl;

  /** called for construction */
  constructor() { 
  }

  /** 
   * Generates the acceptable character list and subscribes to the FormControl
   */
  ngOnInit(): void {
    this.chars = characters.filter(ele => {return this.charIds.includes(ele.id)});
    this.selectedChar = new FormControl(this.chars[0]);
    this.form = new FormGroup({char: this.selectedChar});
  }

}
