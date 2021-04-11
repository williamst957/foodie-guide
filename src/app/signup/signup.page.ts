import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedService } from "../shared/shared.service"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  name:any;
  email:any;
  password:any;
  subcription: Subscription;

  userList = [];

  constructor(private shared: SharedService) { }

  registerUser(){

    let values = {
      name:this.name,
      email:this.email,
      password:this.password
    }

    this.userList.push(values)

    console.log(this.userList);


  }

  ngOnInit(){
    this.subcription = this.shared.currentUserList.subscribe(list => this.userList = list)
  }

  ngOnDestroy(){

    this.subcription.unsubscribe();
  }

}
