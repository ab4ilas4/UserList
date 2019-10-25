import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  userList: User[];
  showloader: boolean;

  constructor(private usersvc: UserService, private router: Router,public cdref:ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.showloader = true;
    this.cdref.detectChanges();
    this.getUsersList();
  }

  getUsersList() {
    this.usersvc.getListofUsers().subscribe((resp: User[]) => {
      this.userList = resp;
      this.showloader = false;
      this.usersvc.setUserList(this.userList);
      console.log(this.userList);
    }, (err: HttpErrorResponse) => {
      this.showloader = false;
      console.log('Failed to get Users ');
    });
  }

  onSelectingUser(user: User) {
    this.router.navigateByUrl('user-list/user-detail/' + user.id);
  }

}
