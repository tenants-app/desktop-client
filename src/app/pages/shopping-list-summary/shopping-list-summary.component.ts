import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ShoppingList} from '../../core/models';
import {ShoppingListsService} from '../../core/services';

@Component({
    selector: 'app-shopping-list-summary',
    templateUrl: './shopping-list-summary.component.html',
    styleUrls: ['./shopping-list-summary.component.scss']
})
export class ShoppingListSummaryComponent implements OnInit {

    private shoppingList: ShoppingList;
    private loaded = false;

    constructor(private shoppingListsService: ShoppingListsService, private route: ActivatedRoute, private jwtHelper: JwtHelperService) {
    }

    ngOnInit() {
        this.loadShoppingList();
    }

    private loadShoppingList() {
        this.route.params.subscribe(params => {
            this.shoppingListsService.getShoppingList(params['id']).then((data: any) => {
                this.shoppingList = data.shoppingList;
                 this.loaded = true;
            });
        });
    }

    private changePaidStatus(shoppingListId: string) {
        this.loaded = false;
        this.shoppingListsService.setShoppingListAsPaid(shoppingListId).then((data: any) => {
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
