import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbyssteamsComponent } from './abyssteams.component';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  declarations: [AbyssteamsComponent],
  imports: [
    CommonModule,
    TeamsModule
  ]
})
export class AbyssteamsModule { }
