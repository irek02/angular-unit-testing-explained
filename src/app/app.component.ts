import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-unit-testing';

  foo(myVar) {

    if (myVar) {
      return 'value1';
    } else {
      return 'value2';
    }

  }
}
