import { Component, OnInit } from '@angular/core';
import { Char } from '../character-card/character-card.service';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.css']
})
export class BuildCardComponent implements OnInit {
  chars: Char[] = []
  selectedChar = this.chars[0].name
  constructor() { }

  ngOnInit(): void {
  }

}
