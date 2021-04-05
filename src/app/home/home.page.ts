import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared/shared.service"
import { BehaviorSubject, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  taskList = [];

  subcription: Subscription;



  constructor(private shared: SharedService) {}

  addRestaurant(){




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


