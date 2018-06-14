import { Component, OnInit, Input } from '@angular/core';
import { MelpService } from '../../services/melp.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
@Input() allRestaurants;
restaurants;
constructor(private restaurantsService: MelpService) {}

  ngOnInit() {
    this.restaurantsService.getRestaurants()
      .subscribe(restaurant => {
        this.restaurants = restaurant;
      });
    }
  }
