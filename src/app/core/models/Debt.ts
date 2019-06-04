import {User} from './User';

export class Debt {
    _id: string;
    name: string;
    value: number;
    holder: User;
    debtor: User;
    paid: boolean;
    createdAt: string;
}
