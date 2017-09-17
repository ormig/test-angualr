import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bills: Bill[] = BILLS;
  selectedBill: Bill;

  select(bill: Bill) {
    this.selectedBill = bill;
  }
}

export class Bill {
  id: number;
  name: string;
  currency: string;
}

const BILLS: Bill[] = [
  {id: 0, name: 'Cash', currency: 'RUB'},
  {id: 1, name: 'Cash', currency: 'EUR'},
  {id: 2, name: 'Cash', currency: 'USD'},
  {id: 3, name: 'Sberbank', currency: 'RUB'},
  {id: 4, name: 'Tinkoff', currency: 'RUB'},
  {id: 5, name: 'Tinkoff', currency: 'USD'},
  {id: 6, name: 'Tinkoff', currency: 'EUR'}
];
