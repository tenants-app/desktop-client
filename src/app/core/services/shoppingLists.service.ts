import {GroupService} from './group.service';
import {Injectable} from '@angular/core';
import {ShoppingList} from '../models';


@Injectable({
    providedIn: 'root'
})
export class ShoppingListsService extends GroupService {

    public getShoppingLists() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<ShoppingList[]>(`groups/${id}/shoppingLists`).toPromise();
        });
    }

    public addShoppingList(shoppingList: any) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/shoppingLists`, shoppingList).toPromise();
        });
    }

    public getShoppingList(shoppingListId: String) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get(`groups/${id}/shoppingLists/${shoppingListId}`).toPromise();
        });
    }

    public setShoppingListAsPaid(shoppingListId: String) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/shoppingLists/${shoppingListId}/paid`, {}).toPromise();
        });
    }
}
