import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  posts = new BehaviorSubject<Array<Post>>(new Array<Post>());

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.posts.next((<Array<Post>>res).splice(0, 10));
      }, (err) => {
        console.log(err)
      });
  }
}
