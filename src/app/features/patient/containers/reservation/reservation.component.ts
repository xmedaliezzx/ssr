import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleMapsModule, MapDirectionsService } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { STOP_LOADING } from '@store/global/global.action';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule,RatingModule,GoogleMapsModule,NavbarComponent, FormsModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  _store = inject(Store<AppStateInterface>);
  innerWidth = window.innerWidth;
  rate: boolean = false;
  starsValue: number = 2;
 // private _store: any;
  constructor(private _route:Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this._store.dispatch(STOP_LOADING());
    }, 3000);
    navigator.geolocation.watchPosition(
      (position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // console.log('center position => ', this.center)

        this.destinationPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.startPosition = { lat: 35.81341449030665, lng: 10.629244363527144 };
        this.markerPositions = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // console.log('destination position => ', this.destinationPosition)
        // console.log('start position => ', this.startPosition)
        // console.log('Marker position => ', this.markerPositions)
        // // console.log('havrsine ===> ', haversine(
        //   { latitude: position.coords.latitude, longitude: position.coords.longitude },
        //   { latitude: 35.72984938442179, longitude: 10.57984007638687 }
        //   , { threshold: 1, unit: 'meter' }))

      },
      (err) => err,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
      

  mapDirectionsService = inject(MapDirectionsService);
  directionsResults$!: Observable<google.maps.DirectionsResult | undefined>;
  center!: google.maps.LatLngLiteral;
  pos!: google.maps.LatLngLiteral;
  pointsArray: any[] = [];

  positions = [
    { lat: 35.8237342, lng: 10.6334133 },
    { lat: 35.8244185, lng: 10.6335037 },
    { lat: 35.8244723, lng: 10.6346993 },
    { lat: 35.8267506, lng: 10.6347938 },
    { lat: 35.8293056, lng: 10.6329588 },
    { lat: 35.8677548, lng: 10.6025402 },
  ];

  mapOptions = {
    zoom: 10,
    streetViewControl: false,
    mapTypeControl : false,
 };
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  trackerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  destinationPosition!: google.maps.LatLngLiteral;
  markerPositions!: google.maps.LatLngLiteral;
  startPosition!: google.maps.LatLngLiteral;
  directionsRenderer = new google.maps.DirectionsRenderer();



  drive() {
    // console.log('drive in')
    let i = 0;
    const request: google.maps.DirectionsRequest = {
      destination: this.destinationPosition,
      origin: this.startPosition,
      travelMode: google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(),
        trafficModel: google.maps.TrafficModel.PESSIMISTIC,
      },
    };
    this.pos = this.startPosition;
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPositions = (event.latLng.toJSON());
      // console.log(event.latLng.toJSON());
    }
  }

  setPointsMap() {
    let i: number = 0;
    setInterval(() => {
      if (i <= this.pointsArray.length) {
        this.markerPositions = { lat: this.pointsArray[i].lat(), lng: this.pointsArray[i].lng() };
      }
      i += 1;
    }, 1000);
  }

  myRate() {
    this.rate = !this.rate;
  }


  retour(){
    this._route.navigate(['resultSearch']);

  }

}
