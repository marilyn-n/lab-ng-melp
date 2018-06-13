import { Component, OnInit } from '@angular/core';
import { MelpService } from '../../services/melp.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 19.438655;
  lng = -99.1305917;
  locationChosen = false;
  zoom = 16;
  restaurants;
  radius = 300;
  restaurantsInRadius = [];
  m;

  constructor(private _melpService: MelpService) { }

  ngOnInit() {
    this._melpService.getRestaurants()
      .subscribe((data) => {
        this.restaurants = data.restaurants;
        console.log(data);
      });
  }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  restaurantsOnRadius() {
    this.restaurants.map(restaurant => {
      if (this.getDistance(restaurant.address.location.lat, restaurant.address.location.lng)
        <= this.radius
        && this.restaurantsInRadius.indexOf(restaurant) < 0) {
        this.restaurantsInRadius.push(restaurant);
      }
    });
  }

  mapDrag(event) {
    this.onChoseLocation(event);
    this.restaurantsOnRadius();
  }

}
