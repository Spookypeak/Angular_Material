import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CommentPost } from '../models/comment-post.model';

@Injectable({
  providedIn: 'root'
})
export class CommentPostService {

  constructor(private http: HttpClient) { }

  getComments(postId: number, call: any) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .subscribe(
        (res) => {
          call(<Array<CommentPost>>res);
        },
        (err) => {
          console.log(err);
        });
  }
}
