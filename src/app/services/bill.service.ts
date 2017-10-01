import {Injectable} from "@angular/core";
import {Bill} from "../data/Bill";
import {BILLS} from "./mock-bills";

@Injectable()
export class BillService {
  getBills(): Promise<Bill[]> {
    return Promise.resolve(BILLS);
  }

  getBillsSlowly(): Promise<Bill[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getBills()), 4000);
    });
  }
}
