import { Component, OnInit } from '@angular/core';
import { CHARS } from '../classes/chars';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  chars = CHARS

  constructor() { }

  ngOnInit(): void {
  }

}
