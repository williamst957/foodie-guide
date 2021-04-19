import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedService } from "../shared/shared.service"



@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit, OnDestroy {

  id:any;
  name:any;
  address:any;
  number:any;
  rating:any;
  tags:any;
  comments:any;
  confirm:any;

  streetNo:any;
  streetName:any;
  streetType:any;
  city:any;
  lat: any;
  lng: any;

  taskList = [] as any;

  subcription: Subscription;




  constructor(public navCtrl: NavController, private shared: SharedService, private http: HttpClient) { }


  // private _url: any = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.streetNo}+${this.streetName}+${this.streetType}+${this.city}&key=AIzaSyBfLI_UqeYF81iVy6ia2XwZeKamhe95WWk`


  getLocation(){

    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.streetNo}+${this.streetName}+${this.streetType}+${this.city}&key=AIzaSyBfLI_UqeYF81iVy6ia2XwZeKamhe95WWk`)


  }

  addRestaurant() {

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.streetNo}+${this.streetName}+${this.streetType}+${this.city}&key=AIzaSyBfLI_UqeYF81iVy6ia2XwZeKamhe95WWk`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.lat = data.results[0].geometry.location.lat;
        this.lng = data.results[0].geometry.location.lng;

        console.log(this.lat)
        console.log(this.lng)
      })
      .catch(err => console.warn(err.message));

    let values = {
      name: this.name,

      number: this.number,
      rating: this.rating,
      tags: this.tags,
      comments: this.comments,
      streetNo: this.streetNo,
      streetName:this.streetName,
      streetType:this.streetType,
      city:this.city,


    }



    // this.name="";
    // this.address="";
    // this.number="";
    // this.tags="";
    // this.comments="";
    this.confirm="Restaurant Succesfully Added"


    this.taskList.push(values);

    this.shared.changeList(this.taskList)

    console.log(this.taskList)

  }

  ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
    this.confirm=""

  }





}
