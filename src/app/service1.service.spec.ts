import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

let service2ServiceSpy: jasmine.SpyObj<Service2Service>;

xdescribe('Service1Service', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('Service2Service', ['bar']);
    TestBed.configureTestingModule({
      providers: [
        Service1Service,
        { provide: Service2Service, useValue: spy }
      ]
    });
  });

  it('should be created', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service).toBeTruthy();
  });

  it('should return true when calling foo method', () => {

    service2ServiceSpy = TestBed.get(Service2Service);

    service2ServiceSpy.bar.and.returnValue('service2 string');

    const service: Service1Service = TestBed.get(Service1Service);

    // expect(service.foo()).toBe('service2 stringmy_string');

  });
});
