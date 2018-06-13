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
  restaurants = {};

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

}
