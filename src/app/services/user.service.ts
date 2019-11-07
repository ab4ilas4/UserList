import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { Comment } from 'src/app/model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/'
  userList: User[];

  constructor(private http: HttpClient) { }

  getListofUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

  setUserList(userlist: User[]) {
    this.userList = userlist;
  }

  getUserList() {
    return this.userList;
  }

  getUserById(id: number): User {
    return this.userList.find(i => i.id == +id);
  }

  getPostofUser():Observable<Post[]> {
   return this.http.get<Post[]>(this.url + 'posts');
     }

getComments():Observable<Comment[]>{
 return this.http.get<Comment[]>(this.url + 'comments');
}

}
