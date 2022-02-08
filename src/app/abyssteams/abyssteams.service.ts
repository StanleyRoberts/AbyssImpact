import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbyssteamsService {

  constructor() { }
}

export interface teamString {
  teamName: string
  linkArray: string[]
}