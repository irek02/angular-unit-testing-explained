import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private service2: Service2Service) { }

  // foo() {
  //   const var2 = this.service2.bar();
  //   return var2 + 'my_string';
  // }

  getText() {
    return 'My service1 text';
  }
}
