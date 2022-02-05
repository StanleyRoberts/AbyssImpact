import { Component, Input, OnInit } from '@angular/core';
import mapping from '../../assets/data/build_data/builds_mapping.json'
import artifacts from '../../assets/data/build_data/artifacts.json'
import weapons from '../../assets/data/build_data/weapons.json'
import { Artifact, BuildMap, Weapon } from './arti-build.service';
import { FormControl } from '@angular/forms';
import { Char } from '../character-card/character-card.service';

/**
 * Gets and displays the artifact/weapon build for the given character/team
 */

@Component({
  selector: 'app-arti-build',
  templateUrl: './arti-build.component.html',
  styleUrls: ['./arti-build.component.css']
})


export class ArtiBuildComponent implements OnInit {

  /** The currently selected character */
  @Input('char') char!: FormControl;
  /** The teams ID (to get the correct build for character) */
  @Input('teamID') teamId!: number;
  /** The current character->team->build mapping */
  map!: BuildMap;

  /** The artifact(s) for the current character build */
  arti!: Set<Artifact>;
  /** The 5* weapon for the current character build */
  wep1!: Weapon;
  /** The 4* weapon for the current character build */
  wep2!: Weapon;

  /** called for construction */
  constructor() { }

  /**
   * After page load, update the character build and then subscribes to 
   * FormControl changes to update the character build when changed
   */
  ngOnInit(): void {
    this.update(this.char.value)

    this.char.valueChanges.subscribe(x=>{this.update(x)})
  }

  /**
   * Updates the artifacts and weapons whenever a new character is selected
   * 
   * @param cur - The new character to get artifacts/weapons for
   */
  update(cur: Char) {
    this.map = mapping.filter(ele => {return ele.charID==cur.id && ele.teamID==this.teamId})[0]
    this.arti = new Set(artifacts.filter(ele => {return ele.id==this.map.arti_twoID}).concat(artifacts.filter(ele => {return ele.id==this.map.arti_fourID})))
    this.wep1 = weapons.filter(ele => {return ele.id==this.map.five_wepID})[0]
    this.wep2 = weapons.filter(ele => {return ele.id==this.map.four_wepID})[0]
  }
}
