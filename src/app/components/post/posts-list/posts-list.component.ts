import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css', '../../styles.css']
})
export class PostsListComponent implements OnInit {

  posts: Array<Post>;
  users: Array<User>;


  constructor(
    private servP: PostService,
    private servU: UserService
  ) { }

  ngOnInit() {
    this.servU.users.subscribe(users => this.users = users)
    this.servP.posts.subscribe(posts => this.posts = posts);
  }

  getUser(userId: number): User {
    if (this.users)
      return this.users.filter((user) => {
        if (userId == user.id)
          return user;
      })[0];
  }

}
