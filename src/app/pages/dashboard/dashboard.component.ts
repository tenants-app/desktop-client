import {Component, OnInit} from '@angular/core';
import {BillsService, DebtsService, MembersService, ShoppingListsService} from '../../core/services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    private debts;
    private bills;
    private shoppingLists;
    private members;
    private loadedDebts = false;
    private loadedBills = false;
    private loadedShoppingLists = false;
    private loadedMembers;

    constructor(
        private debtService: DebtsService,
        private billService: BillsService,
        private shoppingListService: ShoppingListsService,
        private membersService: MembersService) {
    }

    ngOnInit() {
        this.debtService.getDebts().then((data: any) => {
           this.debts = data.debts;
           this.loadedDebts = true;
        });

        this.billService.getBills().then((data: any) => {
            this.bills = data.bills;
            this.loadedBills = true;
        });

        this.shoppingListService.getShoppingLists().then((data: any) => {
            this.shoppingLists = data.shoppingLists;
            this.loadedShoppingLists = true;
        });

        this.membersService.getMembers().then((data: any) => {
            this.members = data.members;
            this.loadedMembers = true;
        });
    }

    sumDebts() {
        let sum = 0;
        this.debts.forEach(debt => {
            if (!debt.paid) {
                sum = debt.value;
            }
        });
        return sum;
    }

    sumBills() {
        let sum = 0;
        this.bills.forEach(bill => {
            if (!bill.debtors[0].paid) {
                sum = bill.debtors[0].value;
            }
        });
        return sum;
    }


}
