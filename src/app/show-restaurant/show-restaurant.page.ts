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

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;



  constructor(private route: ActivatedRoute, private router: Router, private shared: SharedService, private socialSharing: SocialSharing) {

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

   showMap() {
    const location = new google.maps.LatLng(43.891560,-79.013770);
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


   }

   ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)

  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}
