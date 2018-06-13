import { Component, OnInit } from '@angular/core';
import { MelpService } from './services/melp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
restaurants: any;

constructor(private restaurantS: MelpService) {}

  ngOnInit() {
    this.restaurantS.getRestaurants()
      .subscribe(restaurant => {
        this.restaurants = restaurant;
      });
    }
  }
