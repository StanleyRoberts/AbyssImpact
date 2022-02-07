import { Component, OnInit } from '@angular/core';
import { Char } from '../character-card/character-card.service';
import characters from '../../assets/data/character_data/characters.json'
import teams from '../../assets/data/team_data/teams.json';
import { Team } from '../teams/teams.service';


@Component({
  selector: 'app-abyssteams',
  templateUrl: './abyssteams.component.html',
  styleUrls: ['./abyssteams.component.css']
})
export class AbyssteamsComponent implements OnInit {
  owned_ids: Char[] = characters.filter(ele => {return localStorage.getItem(ele.id.toString())==='true'});
  team_list: Set<number[]> = new Set();

  constructor() { }

  ngOnInit(): void {
    for (const team of teams){ // These are short lists but optimisation may still be useful
      for (const one in team.slot1) { for (const two in team.slot2) {
        for (const three in team.slot3) { for (const four in team.slot4) {
          this.team_list.add([+one, +two, +three, +four])}}}}}
  }

}
