import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostsListComponent } from './components/post/posts-list/posts-list.component';
import { PostComponent } from './components/post/post/post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { CommentPostComponent } from './components/comment/comment-post/comment-post.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    NavBarComponent,
    CommentListComponent,
    CommentPostComponent,
    ProfileNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
