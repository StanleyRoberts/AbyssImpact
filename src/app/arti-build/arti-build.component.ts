import { Component, Input, OnInit } from '@angular/core';
import mapping from '../../assets/data/build_data/builds_mapping.json'
import artifacts from '../../assets/data/build_data/artifacts.json'
import weapons from '../../assets/data/build_data/weapons.json'
import { Artifact, BuildMap, Weapon } from './arti-build.service';

@Component({
  selector: 'app-arti-build',
  templateUrl: './arti-build.component.html',
  styleUrls: ['./arti-build.component.css']
})
export class ArtiBuildComponent implements OnInit {
  @Input('charID') charId!: number;
  @Input('teamID') teamId!: number;
  map!: BuildMap;

  arti!: Artifact
  wep1!: Weapon
  wep2!: Weapon

  constructor() { }

  ngOnInit(): void {
    this.map = mapping.filter(ele => {return ele.charID==this.charId && ele.teamID==this.teamId})[0]
    this.arti = artifacts.filter(ele => {return ele.id==this.map.artifactID})[0]
    this.wep1 = weapons.filter(ele => {return ele.id==this.map.five_wepID})[0]
    this.wep2 = weapons.filter(ele => {return ele.id==this.map.four_wepID})[0]
  }

}
