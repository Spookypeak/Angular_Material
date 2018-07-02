import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post.model';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../styles.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() i: number;
  @Input() user: User;

  constructor(private servU: UserService) {
  }

  ngOnInit() {
  }
}
