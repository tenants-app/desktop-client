import {Component, OnInit} from '@angular/core';
import {DebtsService} from '../../core/services';
import {Debt} from '../../core/models';

@Component({
    selector: 'app-debts',
    templateUrl: './debts.component.html',
    styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

    private debts: Debt[];
    private loans: Debt[];
    private type: String = 'my-debts';
    private loaded = false;

    constructor(private debtsService: DebtsService) {
    }

    ngOnInit() {
        this.loadData();
    }

    public changePaidStatus(debtId) {
        this.loaded = false;
        this.debtsService.setDebtAsPaid(debtId).then((data: any) => {
            this.loadData();
        });
    }

    private loadData() {
        this.debtsService.getDebts().then((data: any) => {
            this.debts = data.debts;
        });

        this.debtsService.getLoansGiven().then((data: any) => {
            this.loans = data.debts;
            this.loaded = true;
        });
    }

}
