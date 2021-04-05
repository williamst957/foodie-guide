import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {


  taskList = [];
  private listSource = new BehaviorSubject<Array<any>>(this.taskList)
  currentList = this.listSource.asObservable();

    constructor() { }


    changeList(list:[]) {
      this.listSource.next(list)
    }


}
