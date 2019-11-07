import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,} from '@angular/common/http/testing';
import { UserDetailComponent } from './user-detail.component';
import { CommentComponent } from '../comment/comment.component';
import { SharedModule } from 'src/app/common/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { of } from 'rxjs';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let userService:UserService;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent,CommentComponent ],
      imports:[SharedModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    userService=fixture.debugElement.injector.get(UserService);
    userService.userList=userList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should called component's 'getPostofUser method`, () => {
    spyOn(userService,'getUserById').and.returnValue(userList[0]);
    spyOn(userService,'getPostofUser').and.returnValue(of(postList));
    component.ngOnInit();
    expect(userService.getUserById).toHaveBeenCalled();
    expect(userService.getPostofUser).toHaveBeenCalled();
  });


  it(`should called service's 'getPostofUser method`, () => {
    spyOn(userService,'getUserById').and.returnValue(userList[0]);
    spyOn(userService,'getPostofUser').and.returnValue(of(postList));
    component.getPostofUser();
    expect(userService.getUserById).toHaveBeenCalled();
    expect(userService.getPostofUser).toHaveBeenCalled();
  });
});
