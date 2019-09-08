import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }

  bar() {
    return 'string from service2';
  }
}
