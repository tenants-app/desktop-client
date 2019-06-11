import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ShoppingList} from '../../core/models';

@Component({
    selector: 'app-shopping-list-summary',
    templateUrl: './shopping-list-summary.component.html',
    styleUrls: ['./shopping-list-summary.component.scss']
})
export class ShoppingListSummaryComponent implements OnInit {

    private shoppingList: ShoppingList;

    constructor(private groupService: GroupService, private route: ActivatedRoute, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadShoppingList();
    }

    private loadShoppingList() {
        this.route.params.subscribe(params => {
            this.groupService.getCurrentGroupShoppingList(params['id']).then((data: any) => {
                this.shoppingList = data.shoppingList;
            });
        });
    }

    private changePaidStatus(shoppingListId: string) {
        this.groupService.setCurrentGroupShoppingListAsPaid(shoppingListId).then((data: any) => {
            this.loadShoppingList();
        });
    }

    private isLoggedUser(id: String): Boolean {
        const token = localStorage.getItem('token');
        console.log('e: ' + this.jwtHelper.decodeToken(token).id)
        console.log('my: ' + id)
        return this.jwtHelper.decodeToken(token).id === id;
    }

    private getSum() {
        let sum = 0;
        this.shoppingList.products.forEach(product => {
            sum += product.value;
        });
        return sum;
    }
}
