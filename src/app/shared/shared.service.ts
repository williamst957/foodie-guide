import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  taskList = [];

  constructor() { }

  setList(data){
    this.taskList=data;
  }

  getList(){
    return this.taskList;
  }
}
