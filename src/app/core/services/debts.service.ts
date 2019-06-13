import {GroupService} from './group.service';
import {Injectable} from '@angular/core';
import {Debt} from '../models';

@Injectable({
    providedIn: 'root'
})
export class DebtsService extends GroupService {

    public getDebts() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<Debt[]>(`groups/${id}/debts`).toPromise();
        });
    }

    public getLoansGiven() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<Debt[]>(`groups/${id}/debts/given`).toPromise();
        });
    }

    public setDebtAsPaid(debtId: String) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/debts/${debtId}/paid`, {}).toPromise();
        });
    }

    public addDebt(debt: any) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/debts`, debt).toPromise();
        });
    }
}
