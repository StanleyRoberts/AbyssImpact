import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbyssteamsComponent } from './abyssteams.component';
import { TeamsModule } from '../teams/teams.module';
import { CharactersModule } from '../characters/characters.module';

@NgModule({
  declarations: [AbyssteamsComponent],
  imports: [
    CommonModule,
    TeamsModule,
    CharactersModule
  ]
})
export class AbyssteamsModule { }
