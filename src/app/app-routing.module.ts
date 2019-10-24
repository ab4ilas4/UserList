import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  redirectTo: 'user-list',
  pathMatch: 'full'
},
{
  path: 'user-list',
  loadChildren:'./user-list/user-list.module#UserListModule'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
