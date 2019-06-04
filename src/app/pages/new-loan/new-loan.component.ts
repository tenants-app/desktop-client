import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {User} from '../../core/models';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-loan',
    templateUrl: './new-loan.component.html',
    styleUrls: ['./new-loan.component.scss']
})
export class NewLoanComponent implements OnInit {

    public users: User[];
    private loan = {};

    constructor(private groupService: GroupService, private notifier: NotifierService, private router: Router) {
    }

    ngOnInit() {
        this.groupService.getCurrentGroupMembers().then((data: any) => {
            this.users = data.members;
        });
    }

    addLoan() {
        this.groupService.addDebtToCurrentGroup(this.loan).then(data => {
            this.notifier.notify('success', 'Loan given');
            this.router.navigate(['debts']);
        });
    }

}
