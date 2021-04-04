import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public storage: Storage) { }
}
