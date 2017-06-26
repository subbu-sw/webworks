import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public location = '';
  constructor(private  _router : Router) 
  {      
    this.location = _router.url;
    console.log('locaton='+this.location)
  }
}
