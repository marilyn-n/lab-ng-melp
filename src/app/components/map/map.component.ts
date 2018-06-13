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
    console.log(event);
  }

restaurantsOnRadius() {
  this.restaurants.forEach(restaurant => {
    if (this.getDistance(restaurant.address.location.lat,
       restaurant.address.location.lng) <= this.radius
       && this.restaurantsInRadius.indexOf(restaurant) < 0) {
        this.restaurantsInRadius.push(restaurant);
      }
    });
  }

  sendRadius(newRadius) {
    this.radius = Number(newRadius.value);
    this.restaurantsOnRadius();
  }

  dragRadius($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.restaurantsOnRadius();
  }

getDistance(lat2, lng2) {

const rad = function(x) {return x * Math.PI / 180; };
const R = 6378.137;
const dLat = rad( lat2 - this.lat );
const dLong = rad(lng2 - this.lng );
const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
Math.cos(rad(this.lat)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
const d = R * c;
this.m = d.toFixed(2);
this.m = this.m * 1000;
return this.m;
  }
}
