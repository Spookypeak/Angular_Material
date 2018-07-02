import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private servP: PostService,
    private servU: UserService
  ) {
  }

  ngOnInit() {
    this.servU.getUsers();
    this.servP.getPosts();
  }
}
