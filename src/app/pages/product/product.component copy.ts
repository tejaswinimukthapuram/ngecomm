import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // constructor(private http:HttpClient){
  //   this.http.get("http://localhost:3001/products")
  //   .subscribe();
  // }

  title:String="Macbook"

  get validTitle(){        //this is typescript way getter method  here we don't treat this as a function but a variable             
    if(!this.title){
      return "Title cannot be empty"
    }
    if(this.title.length<3){
      return "Title must be min. three characters"
    }
    if(this.title.length>7){
      return "Title must cannot exceed six characters"
    }
    return ""
  }


  titleErrors(){                    //this is javascriot way
    if(!this.title){
      return "Title cannot be empty"
    }
    if(this.title.length<3){
      return "Title must be min. three characters"
    }
    if(this.title.length>7){
      return "Title must cannot exceed six characters"
    }
    return ""
  }
}
