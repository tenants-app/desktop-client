import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-bill',
    templateUrl: './new-bill.component.html',
    styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {

    private bill = {};

    constructor(private groupService: GroupService, private notifier: NotifierService, private router: Router) {
    }

    ngOnInit() {
    }

    addBill() {
        this.groupService.addBillToCurrentGroup(this.bill).then(data => {
            this.notifier.notify('success', 'Added new bill');
            this.router.navigate(['bills']);
        });
    }

}
