import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {


  taskList = [];
  userList = [];
  private listSource = new BehaviorSubject<Array<any>>(this.taskList)
  private userListSource = new BehaviorSubject<Array<any>>(this.userList)
  currentList = this.listSource.asObservable();
  currentUserList =  this.userListSource.asObservable();

    constructor() { }


    changeList(list:[]) {
      this.listSource.next(list)
    }

    changeUserList(list:[]) {
      this.userListSource.next(list)
    }


}
