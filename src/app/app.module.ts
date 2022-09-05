import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AreaWidgetsComponent } from './components/widgets/area-widgets/area-widgets.component';
import { CardWidgetComponent } from './components/widgets/card-widget/card-widget.component';
import { PieWidgetComponent } from './components/widgets/pie-widget/pie-widget.component';



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    TopBarComponent,
    FooterComponent,
    SidenavComponent,
    AddProductComponent,
    AdminDashboardComponent,
    AreaWidgetsComponent,
    CardWidgetComponent,
    PieWidgetComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
