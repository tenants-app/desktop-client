import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {ShoppingList} from '../../core/models';

@Component({
    selector: 'app-shopping-lists',
    templateUrl: './shopping-lists.component.html',
    styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

    public shoppingLists: ShoppingList[];

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.groupService.getCurrentGroupShoppingLists().then((data: any) => {
            this.shoppingLists = data.shoppingLists;
        });
    }
}
