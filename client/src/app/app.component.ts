import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

// angular component, and metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  // if this is producing any error, change typescript version
  // or initialize array when you declare it inside the constructor
  // products: IProduct[];

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    //if (token) {
    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('user loaded');
      },
      (error) => {
        console.log(error);
      }
    );
    //}
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        () => {
          console.log('initialized basketlet');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
