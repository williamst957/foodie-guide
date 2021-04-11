import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  subcription: any;
  userList = [];



  constructor(private shared: SharedService) { }

  login(){



  }

  ngOnInit(){
    this.subcription = this.shared.currentUserList.subscribe(list => this.userList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}
