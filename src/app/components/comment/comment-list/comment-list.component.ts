import { Component, Input, OnInit } from '@angular/core';
import { CommentPost } from '../../../models/comment-post.model';
import { PostService } from '../../../services/post.service';
import { CommentPostService } from '../../../services/comment-post.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css', '../../styles.css']
})
export class CommentListComponent implements OnInit {

    @Input() postId: number;
    isVisible: boolean;
    comments: Array<CommentPost>;

    constructor(
        private servC: CommentPostService,
        private servU: UserService
    ) {

    }

    ngOnInit() {
        this.servC.getComments(this.postId, (comments) => {
            this.comments = comments;
        });
    }

    toggleComments() {
        this.isVisible = !this.isVisible;
    }

    getUser(userId: number) {
        return this.servU.users.value.filter((user) => {
            if(user.id == userId){
                return user;
            }
        })[0];
    }

}