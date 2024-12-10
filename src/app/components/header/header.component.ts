import { ProductsListService } from './../../services/products-list.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons';

import { CartComponent } from './../cart/cart.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0
  public searchItem!: string;
  public cartIcon = faCartArrowDown
  public userIcon = faUser
  public productList = new BehaviorSubject<any>([])

  constructor(
    public cartModal: MatDialog,
    private cartService: CartService,
    public productsListService: ProductsListService
    ) {

      this.cartService.getProduct().subscribe(res => {
      this.totalItems = res.length
      })
     }

  ngOnInit(): void {

  }

  openCart(){
    this.cartModal.open(CartComponent)
  }

}
