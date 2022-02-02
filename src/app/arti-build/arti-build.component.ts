import { Component, Input, OnInit } from '@angular/core';
import mapping from '../../assets/data/build_data/builds_mapping.json'
import artifacts from '../../assets/data/build_data/artifacts.json'
import weapons from '../../assets/data/build_data/weapons.json'
import { Artifact, BuildMap, Weapon } from './arti-build.service';
import { FormControl } from '@angular/forms';
import { Char } from '../character-card/character-card.service';

@Component({
  selector: 'app-arti-build',
  templateUrl: './arti-build.component.html',
  styleUrls: ['./arti-build.component.css']
})


export class ArtiBuildComponent implements OnInit {
  @Input('char') char!: FormControl;
  @Input('teamID') teamId!: number;
  map!: BuildMap;

  arti!: Set<Artifact>;
  wep1!: Weapon;
  wep2!: Weapon;

  constructor() { }

  ngOnInit(): void {
    this.update(this.char.value)

    this.char.valueChanges.subscribe(x=>{this.update(x)})
  }
  update(cur: Char) {
    this.map = mapping.filter(ele => {return ele.charID==cur.id && ele.teamID==this.teamId})[0]
    this.arti = new Set(artifacts.filter(ele => {return ele.id==this.map.arti_twoID}).concat(artifacts.filter(ele => {return ele.id==this.map.arti_fourID})))
    this.wep1 = weapons.filter(ele => {return ele.id==this.map.five_wepID})[0]
    this.wep2 = weapons.filter(ele => {return ele.id==this.map.four_wepID})[0]
  }
}
