import { Component } from '@angular/core';
import { SharedService } from "../shared/shared.service"


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList = [];



  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.taskList = this.shared.getList()


  }

}


