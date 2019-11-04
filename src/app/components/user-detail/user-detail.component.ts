import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  postList: Post[];
  commentList: any[];
  userId: number;
  user: User;
  load: boolean = false;
  showloader: boolean;
  showdetail: boolean;
  faPlus = faPlus;
  constructor(private activatedRoute: ActivatedRoute, private userSvc: UserService, public cdref: ChangeDetectorRef) {

  }
  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      this.showloader = true;
      this.getPostofUser();
    });
  }


  getPostofUser() {
    this.user = this.userSvc.getUserById(this.userId)
    this.userSvc.getPostofUser().subscribe(
      (resp: Post[]) => {
        this.load = false;
        this.postList = resp;
        this.showloader = false;
        this.postList = this.postList.filter(post => (post.userId == this.userId));
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

  onLoadAll() {
    this.load = true;
  }

  onClickingPost(postId: number, i: number) {

    if (document.getElementById('collapsePost' + i).className === 'collapse mb-2') {
      this.userSvc.getComments().subscribe(
        (resp: Comment[]) => {
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
