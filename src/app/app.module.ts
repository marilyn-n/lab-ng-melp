import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MelpService } from './services/melp.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDB4N0qSz7PO1NvWoEbcM5PFBYwKGxwD-I'
    })
  ],
  providers: [MelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
