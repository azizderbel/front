import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  ProductId :any;
  ProductData: any;
  constructor(private prod :ProductService,private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.ProductId=data.id;
    })
    this.prod.detailProduct(this.ProductId).subscribe(Product =>{
     /* this.ProductData=viewData*/
     this.ProductData = Product;

    })
  }

}
