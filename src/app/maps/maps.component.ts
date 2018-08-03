import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapsComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
export class AppModule { }