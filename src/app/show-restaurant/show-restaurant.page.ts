import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StarRatingModule } from 'angular-star-rating';


import { SharedService } from '../shared/shared.service';



declare var google: any;


@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.page.html',
  styleUrls: ['./show-restaurant.page.scss'],
})
export class ShowRestaurantPage implements OnInit {


  subcription: any;
  index:any;
  taskList = [];
  map:any;
  lat:any;
  lng: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];




  constructor(private route: ActivatedRoute, private router: Router, private shared: SharedService, private socialSharing: SocialSharing, private http: HttpClient) {

    this.route.queryParams.subscribe(params => {
      console.log(this.taskList)
      if(params && params.special){
        this.index = params.special;

      }
    })
   }

   ionViewDidEnter(){
     this.showMap();
   }

   addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });


  }








   showMap() {

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.taskList[this.index].streetNo}+${this.taskList[this.index].streetName}+${this.taskList[this.index].streetType}+${this.taskList[this.index].city}&key=AIzaSyBfLI_UqeYF81iVy6ia2XwZeKamhe95WWk`)
      .then(response => response.json())
      .then(data => {
        this.lat = (data.results[0].geometry.location.lat);
        this.lng = (data.results[0].geometry.location.lng);
        console.log(this.lat)
      })
      .catch(err => console.warn(err.message));


    const location = new google.maps.LatLng(parseFloat(this.lat),parseFloat(this.lng));
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  }

   share(){

    var options = {
      message: "Check out this restaurant I visited called "+ this.taskList[this.index].name,

    };

    this.socialSharing.shareWithOptions(options)
    console.log(this.lat)
    console.log(this.lng)


   }

   ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)

  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}
