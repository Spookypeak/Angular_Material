import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = new BehaviorSubject<Array<User>>(new Array<User>());

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (res) => {
          this.users.next(<Array<User>>res);
        },
        () => {

        });
  }
}
