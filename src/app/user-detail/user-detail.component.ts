import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { Post } from '../model/post.model';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  postList: Post[];
  commentList: Comment[];
  userId: number;
  user: User;
  load: boolean = false;
  showdetail: boolean;
  constructor(private activatedRoute: ActivatedRoute, private userSvc: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      this.user = this.userSvc.getUserById(this.userId)
      this.userSvc.getPostofUser().subscribe(
        (resp: Post[]) => {
          this.load = false;
          this.postList = resp;
          this.postList = this.postList.filter(post => (post.userId == this.userId));
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
    });
  }
  ngAfterViewInit(): void {

  }
  onLoadAll() {
    this.load = true;
  }

  onClickingPost(postId: number, i: number) {

    if (document.getElementById('collapsePost' + i).className === 'collapse mb-2') {
      this.userSvc.getComments().subscribe(
        (resp: Comment[]) => {
          this.load = false;
          this.commentList = resp;
          this.commentList = this.commentList.filter(comment => (comment.postId == postId));
          console.log(this.commentList)
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
      document.getElementById('collapsePost' + i).className = 'mb-2 collapse show'
    } else {
      document.getElementById('collapsePost' + i).className = 'collapse mb-2'
    }

  }
}
