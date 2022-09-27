import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  title: string
  description: string

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title == undefined || this.description == undefined || this.title == "" || this.description == "") {
      alert("Please insert title and description properly..");
      console.log(this.title);
      
    } else {
      console.log(this.title);
      const todo = {
        title: this.title,
        description: this.description,
        active: true
      }
      console.log(todo);
      this.todoAdd.emit(todo)
      this.title = ""
      this.description = ""
    }
  }

}
