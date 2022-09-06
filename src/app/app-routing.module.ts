import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-desk/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/admin-desk/dashboard/dashboard.component';
import { DefaultComponent } from './components/admin-desk/default/default.component';
import { PostsComponent } from './components/admin-desk/posts/posts.component';


const routes: Routes = [
  {path : '', component : DefaultComponent,
children :[
  {path : '', component:AdminDashboardComponent},
  { path: 'products', component:DashboardComponent},
  {path: 'posts', component : PostsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
