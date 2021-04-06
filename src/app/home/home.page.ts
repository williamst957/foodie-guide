import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared/shared.service"
import { BehaviorSubject, Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  taskList = [];

  subcription: Subscription;



  constructor(private shared: SharedService, public alertCtrl: AlertController, private router: Router) {}

  showRestaurant(index){
    let navigationExtras = {
      queryParams: {
        special: index
      }

    }

    this.router.navigate(['show-restaurant'], navigationExtras);



}
  deleteRestaurant(index){
    this.taskList.splice(index, 1);
}

  ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}


