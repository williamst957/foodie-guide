import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Restaurants', url: '/folder/My Restaurants', icon: 'home' },
    { title: 'Add Restaurants', url: '/folder/Add Restaurant', icon: 'paper-plane' },
    { title: 'About', url: '/folder/About', icon: 'person' },
    
    
  ];
 
  constructor() {}
}
