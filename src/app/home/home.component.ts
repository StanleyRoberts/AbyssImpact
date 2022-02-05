import { Component, OnInit } from '@angular/core';

/** The app home page */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** called on construction */
  constructor() {
  }

  /** called on load */
  ngOnInit(): void {
  }

}
