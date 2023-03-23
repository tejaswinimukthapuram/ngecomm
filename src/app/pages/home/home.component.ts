import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products:any=[];

  productUnSelectedIcon = "favorite_border";
   
  

  constructor(private srv:ProductService, private router:Router){
   
  }

  ngOnInit(): void{
    console.log("I am executed by angular whenever the component is initialised");
    this.getAllProducts();
  }

  ngAfterViewInit():void{
    console.log("I am executed by angular after the  Home.html");
  }

  getAllProducts(){
    this.srv.all().subscribe(
      {
        next:(res)=>{
          console.log("I am executed on success");
          console.log(res);
          this.products = res;
        },
        error:(err)=>{
          console.log("I am executed on failure");
          console.log(err);
        },
        complete:()=>{
          console.log("I am executed on success or failure");
         
        }
        
      }
    )
  }

  toggleProductSelection(event:any, product:any){
    // alert("icon component clicked");
    product.selected = !product.selected
  }

  selectionIcon(product:any){
    // if (product.selected){
    //   return "favorite";
    // }else{
    //   return "favorite_border";
    // }

    return product.selected?"favorite":"favorite_border"
  }

  formatPrice(price:any){
    return '$'+price.toFixed(2);
  }

  onEditClicked(event:any, product:any){
      this.router.navigateByUrl("/product/"+product._id);
  }
  
}
