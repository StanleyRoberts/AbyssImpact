import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtiBuildService {

  constructor() { }
}


export interface Artifact {
    id: number;
    name: string;
    img: string;
}

export interface Weapon {
    id: number;
    name: string;
    img: string;
}

export interface BuildMap {
    teamID: number;
    charID: number;
    arti_twoID: number;
    arti_fourID: number;
    artifactStat: string;
    five_wepID: number;
    four_wepID: number;
}