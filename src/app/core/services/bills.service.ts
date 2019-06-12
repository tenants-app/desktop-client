import {GroupService} from './group.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BillsService extends GroupService {

    public getBills() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get(`groups/${id}/bills`).toPromise();
        });
    }

    public getBill(billId) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get(`groups/${id}/bills/${billId}`).toPromise();
        });
    }

    public setBillAsPaid(billId: String) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/bills/${billId}/paid`, {}).toPromise();
        });
    }

    public addBill(bill: any) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/bills`, bill).toPromise();
        });
    }
}
