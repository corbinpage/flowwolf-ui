/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app',
  appInjector: [FriendsService]
})
@View({
  templateUrl: 'views/grid.html',
  directives: [NgFor, NgIf]
})

// Component controller
class MyAppComponent {
  myName: string;
  names: Array<string>;
  todos: Array<string>;

  constructor(friendsService: FriendsService) {
    this.myName = 'Alice';
    this.names = friendsService.names;
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }

} 



bootstrap(MyAppComponent);