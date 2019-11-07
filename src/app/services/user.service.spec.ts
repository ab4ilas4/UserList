import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/user.model';
import { Post } from '../model/post.model';
import { Comment } from '../model/comment.model';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let userList: User[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    }]

  let postList: Post[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }]

  let commentList: Comment[] = [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    // inject the service
    service = TestBed.get(UserService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should return mocked UserList', () => {
    const spy = spyOn(service, 'getListofUsers').and.returnValue(of(userList));
    service.getListofUsers().subscribe(data => {
      expect(data).toBe(userList);
      expect(spy).toHaveBeenCalled();
    })
  });

  it('should return mocked postList', () => {
    const spy = spyOn(service, 'getPostofUser').and.returnValue(of(postList));
    service.getPostofUser().subscribe(data => {
      expect(data).toBe(postList);
      expect(spy).toHaveBeenCalled();
    })
  });

  it('should return mocked commentList', () => {
    const spy = spyOn(service, 'getComments').and.returnValue(of(commentList));
    service.getComments().subscribe(data => {
      expect(data).toBe(commentList);
      expect(spy).toHaveBeenCalled();
    })
  });

});
