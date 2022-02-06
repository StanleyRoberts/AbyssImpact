import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  cookieValue:string = '';
  constructor(private cookieService: CookieService) { 
      this.cookieService.set('Test', 'Hello World');
      this.cookieValue = this.cookieService.get('Test');
    }

  ngOnInit(): void {
  }

}
