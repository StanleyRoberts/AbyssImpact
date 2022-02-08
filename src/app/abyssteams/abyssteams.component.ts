import { Component, OnInit } from '@angular/core';
import { Char } from '../character-card/character-card.service';
import characters from '../../assets/data/character_data/characters.json'
import teams from '../../assets/data/team_data/teams.json';
import { TemplateBindingParseResult } from '@angular/compiler';
import { teamString } from './abyssteams.service';

@Component({
  selector: 'app-abyssteams',
  templateUrl: './abyssteams.component.html',
  styleUrls: ['./abyssteams.component.css']
})

export class AbyssteamsComponent implements OnInit {
  owned_ids: Char[] = characters.filter(ele => {return localStorage.getItem(ele.id.toString())==='true'});
  team_list: Set<teamString> = new Set();

  constructor() { }

  ngOnInit(): void {
    for (const team of teams){ // These are shallow lists but optimisation may still be useful (or we could just add loading screen)
      console.log(JSON.stringify(team))
      for (const one of team.slot1) { for (const two of team.slot2) {
        for (const three of team.slot3) { for (const four of team.slot4) {
          const pot_team = [+one, +two, +three, +four]
          if (pot_team) { // TODO verify team is owned
            this.team_list.add(this.teamStringify([team.id].concat(pot_team)))}}}}}
          }
  }

   // Convert array of id's to array of img links + team name
  teamStringify(list: number[]) :teamString{
    var l_teamname = teams.filter(ele => {return ele.id==list[0]})[0].name
    var l_linkarr = list.splice(1).map(x=>characters.filter(ele => {return ele.id==x})[0].img)

    return {teamName: l_teamname, linkArray: l_linkarr}

  }
}
