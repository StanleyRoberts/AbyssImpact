import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';
import { ArtiBuildComponent } from '../arti-build/arti-build.component';
import { BuildCardComponent } from '../build-card/build-card.component';

import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TeamsComponent, BuildCardComponent, ArtiBuildComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [ArtiBuildComponent, TeamsComponent]
})
export class TeamsModule { }
