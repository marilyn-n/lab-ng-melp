import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statical',
  templateUrl: './statical.component.html',
  styleUrls: ['./statical.component.css']
})
export class StaticalComponent implements OnInit {
@Input() allRestaurants;
totalRestaurants = Number;
  constructor() { }

  ngOnInit() {
  }

restaurantsLength() {
  return this.allRestaurants.length;
}

}
