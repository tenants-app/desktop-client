import {Component, OnInit} from '@angular/core';
import {BillsService} from '../../core/services';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-bill',
    templateUrl: './new-bill.component.html',
    styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {

    private bill = {};

    constructor(private billsService: BillsService, private notifier: NotifierService, private router: Router) {
    }

    ngOnInit() {
    }

    addBill() {
        this.billsService.addBill(this.bill).then(data => {
            this.notifier.notify('success', 'Added new bill');
            this.router.navigate(['bills']);
        });
    }

}
