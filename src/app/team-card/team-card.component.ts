import { Component, OnInit } from '@angular/core';
import teams from '../../assets/data/team_data/teams.json'
import { Team } from './team-card.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  panelOpenState = false;
  teamList: Team[] = teams

  constructor() { }

  ngOnInit(): void {
  }

}
