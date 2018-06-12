import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MelpService } from './services/melp.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
