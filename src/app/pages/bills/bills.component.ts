import {Component, OnInit} from '@angular/core';
import {BillsService} from '../../core/services';
import {Bill} from '../../core/models';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

    private bills: Bill[];
    private loaded = false;

    constructor(private billsService: BillsService) {
    }

    ngOnInit() {
        this.loadBills();
    }

    public changePaidStatus(billId) {
        this.billsService.setBillAsPaid(billId).then((data: any) => {
            this.loaded = false;
            this.loadBills();
        });
    }

    private loadBills() {
        this.billsService.getBills().then((data: any) => {
            this.bills = data.bills;
            this.loaded = true;
        });
    }
}
