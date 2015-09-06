/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {RuleComponent} from 'rule'

// Annotation section
@Component({
  selector: 'my-app',
  appInjector: [FriendsService]
})
@View({
  templateUrl: 'views/app.html',
  directives: [NgFor, NgIf, RuleComponent]
})

// Component controller
class MyAppComponent {
  title: string;

  constructor(friendsService: FriendsService) {
    this.title = 'Cloud Decision Table';
  }

} 



bootstrap(MyAppComponent);