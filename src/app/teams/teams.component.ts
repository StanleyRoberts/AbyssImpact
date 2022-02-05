import { Component, OnInit } from '@angular/core';
import teams from '../../assets/data/team_data/teams.json'
import { Team } from './teams.service';

/** Generates and displays a list of teams */

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  /** Determines if a team is open */
  panelOpenState = false;
  /** List of teams to show */
  teamList: Team[] = teams

  /** called on construction */
  constructor() { }

  /** called on load */
  ngOnInit(): void {
  }

}
