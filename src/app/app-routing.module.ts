import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { PostsComponent } from './components/posts/posts.component';


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
