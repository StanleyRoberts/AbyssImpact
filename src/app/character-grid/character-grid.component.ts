import { Component, OnInit } from '@angular/core';
import { CHARS } from '../classes/chars';
import { Char } from '../classes/char'

@Component({
  selector: 'app-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent implements OnInit {

  tiles: Char[] = [
    {
        id: 1,
        name: "Amber",
        img: "assets/Character_Amber_Thumb.png",
        desc: "A MainDPS who focuses on charged shots. Her low burst cooldown also allows her to support using \'Elegy of the End\'",
        role: "MainDPS"
    },
    {
        id: 2,
        name: "Kokomi",
        img: "assets/Character_Sangonomiya_Kokomi_Thumb.png",
        desc: "A support who outputs an incredible amount of healing, hydro application and solid damage",
        role: "Healer"
    }
  ];

  chars = CHARS

  constructor() { }

  ngOnInit(): void {
  }

}
