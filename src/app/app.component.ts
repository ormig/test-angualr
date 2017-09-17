import {Component, OnInit} from '@angular/core';
import {Bill} from "./data/Bill";
import {BillService} from "./services/bill.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bills: Bill[];
  selectedBill: Bill;

  constructor(private billService: BillService) {
  }

  ngOnInit(): void {
    this.billService.getBills().then(bills => this.bills = bills);
  }

  select(bill: Bill) {
    this.selectedBill = bill;
  }
}

