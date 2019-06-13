import {Component, OnInit} from '@angular/core';
import {ShoppingListsService} from '../../core/services';
import {ShoppingList} from '../../core/models';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-shopping-lists',
    templateUrl: './shopping-lists.component.html',
    styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

    private shoppingLists: ShoppingList[];
    private loaded = false;

    constructor(private shoppingListsService: ShoppingListsService, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.shoppingListsService.getShoppingLists().then((data: any) => {
            this.shoppingLists = data.shoppingLists;
            this.loaded = true;
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
        });
    }

    private changePaidStatus(shoppingListId: string) {
        this.loaded = false;
        this.shoppingListsService.setShoppingListAsPaid(shoppingListId).then((data: any) => {
            this.loadData();
        });
    }

    private isLoggedUser(id: String): Boolean {
        const token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token).id === id;
    }

}
