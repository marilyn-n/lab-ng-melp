import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
