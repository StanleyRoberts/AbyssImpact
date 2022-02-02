import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import characters from '../../assets/data/character_data/characters.json';
import { Char } from '../character-card/character-card.service';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.css']
})
export class BuildCardComponent implements OnInit {
  public form!: FormGroup;
  @Input('IDpair') charIds!: number[][];
  chars!: Char[];

  selectedChar!: FormControl;

  constructor() { 
  }

  ngOnInit(): void {
    this.chars = characters.filter(ele => {return this.charIds.map(function(x){return x[0];}).includes(ele.id)});
    this.selectedChar = new FormControl(this.chars[0]);
    this.form = new FormGroup({char: this.selectedChar});
  }

}
