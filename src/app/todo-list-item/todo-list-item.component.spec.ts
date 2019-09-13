import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-todo-list-item
      [name]="'todo1'">
    </app-todo-list-item>`
})
class TestHostComponent {
}

describe('TodoListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button').textContent).toBe('todo1');

  });

});
