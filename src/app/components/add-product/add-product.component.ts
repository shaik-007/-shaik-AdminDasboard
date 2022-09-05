import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  imageUrl:string = '/assets/images/default-img.png';
  productForm!:FormGroup;
  constructor(private apiService:ApiService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName :['',Validators.required],
      description :['',Validators.required],
      quantity :['',Validators.required],
      price :['',Validators.required],
      image :['',Validators.required]
    });
  }

  addProduct(){
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
        }
      })
    }
  };

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
