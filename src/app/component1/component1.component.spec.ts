import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Component1Component } from './component1.component';
import { FormsModule } from '@angular/forms';
import { Service1Service } from '../service1.service';

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  const service1Stub = {
    getText: () => 'stubbed string',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [Component1Component],
      providers: [{ provide: Service1Service, useValue: service1Stub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
  });

  it('should foo', fakeAsync(() => {

    fixture.detectChanges();

    tick(2001);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').textContent)
      .toEqual('stubbed string My component text');

  }));

  // xit('should increment when clicking on the button', () => {

  //   // grab the button, click on the button
  //   fixture.nativeElement.querySelector('button').click();

  //   fixture.detectChanges();
  //   // assert that the value got incremented
  //   // expect(component.count).toBe(1);
  //   expect(fixture.nativeElement.querySelector('div').textContent).toBe('1');

  // });

  // xit('should show a doubled value', () => {

  //   fixture.detectChanges();

  //   const input = fixture.nativeElement.querySelector('input');

  //   input.value = '5';
  //   input.dispatchEvent(new Event('input'));

  //   fixture.detectChanges();

  //   expect(fixture.nativeElement.querySelector('div').textContent).toBe('10');

  // });

});
