import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { STOP_LOADING } from '@store/global/global.action';
import { Observable, map } from 'rxjs';
import { GoogleMapsModule, MapDirectionsService } from '@angular/google-maps';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule, NavbarComponent],
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent {
  _store = inject(Store<AppStateInterface>);
  innerWidth = window.innerWidth;
  rdvData: any[] = [
    {
      name: 'Foulena',
      jobTitle: 'Infirmiere',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'soon',
      distance: 'A coté de vous',
    },
    {
      name: 'Foulen',
      jobTitle: 'Infirmier',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '12 Kilometers',
    },
    {
      name: 'Foulen',
      jobTitle: 'Infirmier',
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '10 Kilometers',
    },
    {
      name: 'Foulen',
      jobTitle: 'Ophtalmoloque',
      image:
        'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '2 Kilometers',
    },
    {
      name: 'Foulen',
      jobTitle: 'Infirmier',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '12 Kilometers',
    },
    {
      name: 'Foulen',
      jobTitle: 'Infirmier',
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '10 Kilometers',
    },
    {
      name: 'Foulen',
      jobTitle: 'Ophtalmoloque',
      image:
        'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later',
      distance: '2 Kilometers',
    },
  ];


  constructor(private _route:Router) {}
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

        this.destinationPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.startPosition = { lat: 35.81341449030665, lng: 10.629244363527144 };
        this.markerPositions = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

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

  reserver(){
    this._route.navigate(['reservation']);

  }

}
