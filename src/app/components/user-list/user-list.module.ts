import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserListRoutingModule } from './user-list.routing.module';
import { CommentComponent } from '../comment/comment.component';
import { SharedModule } from 'src/app/common/shared.module';



@NgModule({
  declarations: [UserListComponent, UserDetailComponent, CommentComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule
  ]
})
export class UserListModule { }
