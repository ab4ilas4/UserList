import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';


const routes: Routes = [
    {
        path: '', component: UserListComponent,
        children:[
          {
            path:'user-detail/:id',
            component:UserDetailComponent
          }
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
