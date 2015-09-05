/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {GridComponent} from 'grid'

// Annotation section
@Component({
  selector: 'my-app',
  appInjector: [FriendsService]
})
@View({
  templateUrl: 'views/app.html',
  directives: [NgFor, NgIf, GridComponent]
})

// Component controller
class MyAppComponent {
  title: string;

  constructor(friendsService: FriendsService) {
    this.title = 'Cloud Decision Table';
  }

  // addTodo(todo: string) {
  //   this.todos.push(todo);
  // }

  // doneTyping($event) {
  //   if($event.which === 13) {
  //     this.addTodo($event.target.value);
  //     $event.target.value = null;
  //   }
  // }

} 



bootstrap(MyAppComponent);