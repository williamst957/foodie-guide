import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.page.html',
  styleUrls: ['./show-restaurant.page.scss'],
})
export class ShowRestaurantPage implements OnInit {


  subcription: any;
  index:any;
  taskList = [];


  constructor(private route: ActivatedRoute, private router: Router, private shared: SharedService) {
    this.route.queryParams.subscribe(params => {
      console.log(this.taskList)
      if(params && params.special){
        this.index = params.special;

      }
    })
   }

   ngOnInit(){
    this.subcription = this.shared.currentList.subscribe(list => this.taskList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}
