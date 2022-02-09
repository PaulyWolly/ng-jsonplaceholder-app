import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { AlbumsComponent } from '../pages/albums/albums.component';
import { UsersComponent } from '../pages/users/users.component';
import { CommentsComponent } from '../pages/comments/comments.component';
import { PhotosComponent } from '../pages/photos/photos.component';
import { TodosComponent } from '../pages/todos/todos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'todos', component: TodosComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
