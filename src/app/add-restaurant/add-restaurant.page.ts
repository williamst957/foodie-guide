import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from "../shared/shared.service"

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  name:any;
  address:any;
  number:any;
  rating:any;
  tags:any;
  comments:any;

  taskList = [];



  constructor(public navCtrl: NavController, private shared: SharedService) { }


  addRestaurant() {

    let values = {
      name: this.name,
      address: this.address,
      number: this.number,
      rating: this.rating,
      tags: this.tags,
      comments: this.comments

    }

    this.taskList.push(values)




    }

  ngOnInit(): void {

    this.shared.setList(this.taskList)
  }

}
