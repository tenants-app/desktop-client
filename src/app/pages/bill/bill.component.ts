import {Component, OnInit} from '@angular/core';
import {Bill} from '../../core/models';
import {BillsService} from '../../core/services';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

    private bill: Bill;
    private loaded = false;

    constructor(private billsService: BillsService, private route: ActivatedRoute, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadBill();
    }

    public changePaidStatus(billId) {
        this.loaded = false;
        this.billsService.setBillAsPaid(billId).then((data: any) => {
            this.loadBill();
        });
    }

    public isLoggedUser(id: String): Boolean {
        const token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token).id === id;
    }

    private loadBill() {
        this.route.params.subscribe(params => {
            this.billsService.getBill(params['id']).then((data: any) => {
                this.bill = data.bill;
                this.loaded = true;
            });
        });
    }
}
