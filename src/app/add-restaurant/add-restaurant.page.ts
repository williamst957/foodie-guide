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

  taskList = [] as any;

  subcription: Subscription;



  constructor(public navCtrl: NavController, private shared: SharedService) { }

  public handleAddressChange(address: any) {
    // Do some stuff
}


  addRestaurant() {

    let values = {
      name: this.name,
      address: this.address,
      number: this.number,
      rating: this.rating,
      tags: this.tags,
      comments: this.comments

    }

    this.name="";
    this.address="";
    this.number="";
    this.tags="";
    this.comments="";
    this.confirm="Restaurant Succesfully Added"


    this.taskList.push(values);

    this.shared.changeList(this.taskList)

  }

  ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
    this.confirm=""

  }





}
