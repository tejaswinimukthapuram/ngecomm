import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  

productForm = new FormGroup({
  title : new FormControl("Macbook", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])),
  price : new FormControl("", Validators.compose([Validators.required, Validators.pattern('[0-9\.]*')]))

})



ngOnInit():void{
  // this.title.valueChanges.subscribe(()=>{                 //this is typescript way of watching the html input elements
  //   console.log("I am watching title changes from the typescript") 
  // })
}


// onTitleKeyUp(){
//   console.log("I am executed by the event from html tag") //this is traditional way of watching the html input elements
// }
  
onSubmit(event:any){
  event.preventDefault();
  console.log("Form is submitted")
  if(this.productForm.invalid){
    return
  }
  console.log(this.productForm.value);
}
}
