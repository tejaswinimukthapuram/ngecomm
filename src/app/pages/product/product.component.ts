import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  

// productForm = new FormGroup({
//   title : new FormControl("Macbook", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])),
//   price : new FormControl("", Validators.compose([Validators.required, Validators.pattern('[0-9\.]*')]))

// })

productForm =  this.fb.group({
  title:["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])],
  description:["", Validators.compose([Validators.required])],
  image:["", Validators.compose([Validators.required])],
  price:["", Validators.compose([Validators.required])],

  
})

id:any="";
constructor(private fb:FormBuilder, private srv:ProductService, private router:Router, private ar:ActivatedRoute){

}

ngOnInit():void{
  this.ar.params.subscribe((params:any)=>{
      console.log(params);
      if(params.id){
        this.id = params.id;
        this.getProduct();
      }
  })
}

getProduct(){
  this.srv.get(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.productForm.patchValue(res);

    },
    error:()=>{

    },
    complete:()=>{

    }
  })
}

  
onSubmit(event:any){
  event.preventDefault();
  console.log("Form is submitted")
  if(this.productForm.invalid){
    return
  }
  console.log(this.productForm.value);
  if(this.id){
    this.srv.update(this.productForm.value, this.id).subscribe({
      next:()=>{
        // alert("Product created Successfully");
        this.router.navigateByUrl("/");
      },
      error:()=>{
  
      },
      complete:()=>{
  
      }
    })
    return
  }
  this.srv.create(this.productForm.value).subscribe({
    next:()=>{
      // alert("Product created Successfully");
      this.router.navigateByUrl("/");
    },
    error:()=>{

    },
    complete:()=>{

    }
  })
}
}
