import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.less']
})
export class Component1Component implements OnInit {

  public text;

  constructor(private service: Service1Service) { }

  ngOnInit() {

    setTimeout(() => {
      console.log('settimeout');
      this.text = this.service.getText() + ' My component text';
    }, 1000);

  }

  // getMyString() {
  //   // return this.service.getText() + ' My component text';
  // }

}
