/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {RowComponent} from 'row';

//TypeScript
@Component({
  selector: 'my-grid'
})

@View({
  templateUrl: 'views/grid.html',
  directives: [NgFor, NgIf, RowComponent]
})

export class GridComponent {
  users: Array<Object>;
  statuses: Array<Object>;
  groups: Array<Object>;
  inserted: Object;

  constructor() {
    this.users = [
    {id: 1, name: 'awesome user1', status: 2, group: 'admin'},
    {id: 2, name: 'awesome user2', status: 1, group: 'vip'},
    {id: 3, name: 'awesome user3', status: 2, group: 'normals'}
    ]; 

    this.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
    ]; 

    this.groups = [
    {text: 'admin'},
    {text: 'vip'},
    {text: 'normals'}
    ]; 
  }

  removeUser(index) {
    this.users.splice(index, 1);
  };

  addUser() {
    this.inserted = {
      id: this.users.length+1,
      name: '',
      status: null,
      group: null 
    };      
    this.users.push(this.inserted);
  }
}