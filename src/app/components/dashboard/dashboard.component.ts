import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 public productsList:any
 productId:any


  constructor(private apiService:ApiService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((res:any)=>{
        this.productsList = res;
    });
  }
  addProductDailog(){
    this.dialog.open(AddProductComponent,{
      width:'40%',
    })
  };

  deleteProduct(id:any){
    console.log('iam in delete method');
    // this.productId = event.target.value;
    console.log('iam in delete method',id);
    this.apiService.deleteProduct(id).subscribe(dlt=>{
      this.ngOnInit();
      console.log("iam in delete method",dlt);
    });

  }

}
