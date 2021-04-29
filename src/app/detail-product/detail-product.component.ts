import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent{
  style;
  mylist;
  p: number = 1;
  constructor(private activatedroute:ActivatedRoute,private service :ApiService) { 
    this.style=this.activatedroute.snapshot.params.style;
    this.service.getArticles(this.style).subscribe((data)=>{this.mylist=data;console.log(this.mylist)})
  }

  /*ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.ProductId=data.id;
    })
    this.prod.detailProduct(this.ProductId).subscribe(Product =>{
    
     this.ProductData = Product;

    })
  }*/

}
