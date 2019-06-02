import {User} from './User';

export class Bill {
    _id: string;
    name: string;
    value: number;
    user: User;
    debtors: any;
    createdAt: string;
}
