import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { TeamCardComponent } from './team-card/team-card.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'teams', component: TeamCardComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
