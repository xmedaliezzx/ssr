import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoogleMap,
  GoogleMapsModule,
  MapDirectionsService,
} from '@angular/google-maps';
import { Observable } from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mapselector',
  standalone: true,
  imports: [CommonModule,ButtonModule, GoogleMapsModule],
  templateUrl: './mapselector.component.html',
  styleUrls: ['./mapselector.component.scss'],
})
export class MapselectorComponent {
  _store = inject(Store<AppStateInterface>);

  @ViewChild(GoogleMap) map!: GoogleMap;
  mapCenter: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  center!: google.maps.LatLngLiteral;
  markerPositions!: google.maps.LatLngLiteral;
  mapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
  };
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  zoom = 10;

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      },
      (err) => err,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  addMarker(event: google.maps.MapMouseEvent) {
    // if (event.latLng != null) {
    //   this.markerPositions = event.latLng.toJSON();
    // }
  }

  getCenterPosition(event: any) {
    const center = this.map.googleMap?.getCenter();

    if (center) {
      this.mapCenter = {
        lat: center.lat(),
        lng: center.lng(),
      };
    }
    this.markerPositions = this.mapCenter;
    console.log(this.mapCenter);
  }

  close(dialogName: string) {
    this._store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
