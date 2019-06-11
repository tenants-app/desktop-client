import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {ShoppingList} from '../../core/models';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-shopping-lists',
    templateUrl: './shopping-lists.component.html',
    styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

    public shoppingLists: ShoppingList[];

    constructor(private groupService: GroupService, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.groupService.getCurrentGroupShoppingLists().then((data: any) => {
            this.shoppingLists = data.shoppingLists;
        });
    }

    private getValue(shoppingList: ShoppingList): Number {
        let sum = 0;
        shoppingList.debtors.forEach(debtor => {
            sum += debtor.value;
        });
        return sum;
    }

    private getPersonalValue(shoppingList: ShoppingList): Number {
        return this.getLoggedDebtor(shoppingList).value;
    }

    private isPaid(shoppingList: ShoppingList): Boolean {
        return this.getLoggedDebtor(shoppingList).paid;
    }

    private getLoggedDebtor(shoppingList: ShoppingList) {
        return shoppingList.debtors.find(debtor => {
            return this.isLoggedUser(debtor.user);
        })
    }

    private changePaidStatus(shoppingListId: string) {
        this.groupService.setCurrentGroupShoppingListAsPaid(shoppingListId).then((data: any) => {
            this.loadData();
        });
    }

    private isLoggedUser(id: String): Boolean {
        const token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token).id === id;
    }

}
