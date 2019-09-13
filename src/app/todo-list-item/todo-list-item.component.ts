import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent implements OnInit {

  @Input() name;
  @Output() clicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  click() { this.clicked.emit('clicked!'); }

}
