import { Component, OnInit } from '@angular/core';
import teams from '../../assets/data/team_data/teams.json';
import { Team } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  panelOpenState = false;
  teamList: Team[] = teams

  constructor() { }

  ngOnInit(): void {
  }

}
