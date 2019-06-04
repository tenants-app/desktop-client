import {Component, OnInit} from '@angular/core';
import {Bill} from '../../core/models';
import {GroupService} from '../../core/services';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

    public bill: Bill;

    constructor(private groupService: GroupService, private route: ActivatedRoute, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadBill();
    }

    public changePaidStatus(billId) {
        this.groupService.setCurrentGroupBillAsPaid(billId).then((data: any) => {
            this.loadBill();
        });
    }

    public isLoggedUser(id: String): Boolean {
        const token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token).id === id;
    }

    private loadBill() {
        this.route.params.subscribe(params => {
            this.groupService.getCurrentGroupBill(params['id']).then((data: any) => {
                this.bill = data.bill;
            });
        });
    }
}
