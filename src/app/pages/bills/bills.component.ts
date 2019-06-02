import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {Bill} from '../../core/models';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

    public bills: Bill[];

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.loadBills();
    }

    public changePaidStatus(billId) {
        this.groupService.setCurrentGroupBillAsPaid(billId).then((data: any) => {
            console.log(data);
            this.loadBills();
        });
    }

    private loadBills() {
        this.groupService.getCurrentGroupBills().then((data: any) => {
            this.bills = data.bills;
        });
    }
}
