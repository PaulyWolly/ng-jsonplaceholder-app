import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsService } from './services/albums.service';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { PostsService } from './services/posts.service';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotosService } from './services/photos.service';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosService } from './services/todos.service';

@NgModule({
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PostsComponent,
    UsersComponent,
    UserComponent,
    PostDisplayComponent,
    AlbumComponent,
    PhotoComponent,
    PhotosComponent,
    CommentComponent,
    PostCreateComponent,
    CommentsComponent,
    TodoComponent,
    TodosComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    PostsService,
    UsersService,
    AlbumsService,
    CommentsService,
    PhotosService,
    TodosService ]
})
export class AppModule { }
