import { CartService } from './../../services/cart.service';
import { ProductsListService } from './../../services/products-list.service';
import { Component, OnInit } from '@angular/core';
import { ProductsList } from 'src/app/models/products-list';
import { Observable } from 'rxjs';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-products-highlights',
  templateUrl: './products-highlights.component.html',
  styleUrls: ['./products-highlights.component.css']
})
export class ProductsHighlightsComponent implements OnInit {

  searchWord: string = ''
  public productsItems$ !: Observable<ProductsList[]>;
  public productList !: ProductsList[]
  private readonly uriAPI = '../../assets/productsList.json'
  starIcon = faStar;

  constructor(
    private productsListService: ProductsListService,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.productsListService.getProduct().subscribe(
      res => {
        this.productList = res

        this.productList.forEach((prod: any) => {
          Object.assign(prod,{quantidade: 1, total: prod.price})
        })
      }
    )

    this.productsItems$ = this.productsListService.getProduct()
  }

  addToCart(item: any){
    this.cartService.addItem(item);
  }

}
