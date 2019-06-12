import {Component, OnInit} from '@angular/core';
import {ShoppingList, Product} from '../../core/models';
import {ShoppingListsService} from '../../core/services';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-shopping-list',
    templateUrl: './new-shopping-list.component.html',
    styleUrls: ['./new-shopping-list.component.scss']
})
export class NewShoppingListComponent implements OnInit {

    public shoppingList: ShoppingList;
    public product: any = {};

    constructor(private shoppingListsService: ShoppingListsService, private notifier: NotifierService, private router: Router) {
    }

    ngOnInit() {
        this.shoppingList = new ShoppingList();
        this.shoppingList.products = [];
        this.product = new Product();
        this.product.name = null;
        this.product.value = null;
    }

    addProduct() {
        if (this.product.name === null || this.product.value === null || typeof this.product.value !== 'number') {
            return;
        }

        let product = new Product();
        product.name = this.product.name;
        product.value = this.product.value;
        this.shoppingList.products.push( product);
        this.product.name = null;
        this.product.value = null;
    }

    getSum() {
        let sum = 0;
        this.shoppingList.products.forEach(product => {
            sum += product.value;
        });
        return sum;
    }

    addShoppingList() {
        this.shoppingListsService.addShoppingList(this.shoppingList).then(data => {
            this.notifier.notify('success', 'Added new shopping list');
            this.router.navigate(['shopping-lists']);
        });
    }
}
