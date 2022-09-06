import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  imageUrl:string = '/assets/images/default-img.png';
  productForm!:FormGroup;
  actionButton:string='Add Product';
  changeTitle : string = 'Add Product';

  constructor(private apiService:ApiService,  @Inject(MAT_DIALOG_DATA) public editProduct:any, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName :['',Validators.required],
      description :['',Validators.required],
      quantity :['',Validators.required],
      price :['',Validators.required],
      image :['',Validators.required]
    });

    if(this.editProduct){
      this.actionButton = 'Update Product';
      this.changeTitle = 'Edit Product';
      this.productForm.controls['productName'].setValue(this.editProduct.productName);
      this.productForm.controls['description'].setValue(this.editProduct.description);
      this.productForm.controls['quantity'].setValue(this.editProduct.quantity);
      this.productForm.controls['price'].setValue(this.editProduct.price);
      this.productForm.controls['image'].setValue(this.editProduct.image);
    }
  }

  addProduct(){
    if(!this.editProduct){
      if(this.productForm.valid){
        this.apiService.addProduct(this.productForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            alert('product added successfully');
            this.productForm.reset();
            this.dialogRef.close('Add Product')
            window.location.reload();
          },
          error:()=>{
            alert("Error while  adding a product")
          },
        });
      };
    }else{
      this.updateProduct();
    };
    
  };

  updateProduct(){
    this.apiService.editProduct(this.productForm.value, this.editProduct.id).subscribe({
      next: (res)=>{
        alert("product updated successfully")
        this.productForm.reset();
        this.dialogRef.close("Update Product")
      },
      error:()=>{
        alert("Error while updating the record");
      }
    });
    
  }

onSelectFile(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
  }
}

}
