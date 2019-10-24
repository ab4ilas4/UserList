import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private usersvc: UserService,private router:Router) { }

  ngOnInit() {
    this.usersvc.getListofUsers().subscribe(
      (resp: User[]) => {
        this.userList = resp;
        this.usersvc.setUserList(this.userList);
        console.log(this.userList)
      },
      (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    );
  }

  onSelectingUser(user:User){
    this.router.navigateByUrl('user-list/user-detail/'+ user.id  );
  }

}
