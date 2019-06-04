import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {Debt} from '../../core/models';

@Component({
    selector: 'app-debts',
    templateUrl: './debts.component.html',
    styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

    public debts: Debt[];
    public loans: Debt[];
    public type: String = 'my-debts';

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.loadData();
    }

    public changePaidStatus(debtId) {
        this.groupService.setCurrentGroupDebtAsPaid(debtId).then((data: any) => {
            this.loadData();
        });
    }

    private loadData() {
        this.groupService.getCurrentGroupDebts().then((data: any) => {
            this.debts = data.debts;
        });

        this.groupService.getCurrentGroupLoansGiven().then((data: any) => {
            this.loans = data.debts;
        });
    }

}
