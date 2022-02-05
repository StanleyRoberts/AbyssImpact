import { Component, OnInit } from '@angular/core';

/**
 * Provides a view of a character with details
 */

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  /** called on construction */
  constructor() { }

  /** called on load */
  ngOnInit(): void {
  }

}
