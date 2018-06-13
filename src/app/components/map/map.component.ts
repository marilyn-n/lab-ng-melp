import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 19.438655;
  lng = -99.1305917;

  constructor() { }

  ngOnInit() {
  }

}
