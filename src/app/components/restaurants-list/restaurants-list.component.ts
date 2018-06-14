import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent {
@Input() theRestaurants;
order = 'rating';
constructor() {}

  }
