import { Component, Input, OnInit } from '@angular/core';
import { CommentPost } from '../../../models/comment-post.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-comment-post',
    templateUrl: './comment-post.component.html',
    styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {


    @Input() comment: CommentPost;
    @Input() user: User;
    constructor(private servU: UserService) {
    }

    ngOnInit() {
    }

}