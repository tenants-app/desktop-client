import {User} from './User';
import {Product} from './Product';

export class ShoppingList {
    name: string;
    user: User;
    debtors: any;
    products: Product[];
    createdAt: string;
}
