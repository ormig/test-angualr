import {Component, Input} from "@angular/core";
import {Bill} from "./data/Bill";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html'
})
export class BillComponent {
  @Input() bill: Bill;
}

