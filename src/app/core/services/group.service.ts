import {Injectable} from '@angular/core';
import {Group} from '../models';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {}

    public getGroups() {
        return this.httpClient.get<Group[]>('users/groups');
    }

    public changeGroup(groupId) {
        this.getGroup(groupId).then((data: any) => {
            this.setCurrentGroup(data.group._id);
            location.reload();
        });
    }

    public getGroup(groupId) {
        return this.httpClient.get(`groups/${groupId}`).toPromise();
    }

    public setCurrentGroup(groupId) {
        localStorage.setItem('currentGroup', groupId);
    }

    public async getCurrentGroup() {
        const id = localStorage.getItem('currentGroup');

        if (id === null) {
            return this.getGroups().toPromise().then((data: any) => {
                return this.getGroup(data.groups[0]._id);
            });
        }

        return this.getGroup(id);
    }

    public getCurrentGroupMembers() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<User[]>(`groups/${id}/members`).toPromise();
        });
    }

    public getCurrentGroupMember(memberId) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<User[]>(`groups/${id}/members/${memberId}`).toPromise();
        });
    }

    public getCurrentGroupBills() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<User[]>(`groups/${id}/bills`).toPromise();
        });
    }

    public getCurrentGroupBill(billId) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get<User[]>(`groups/${id}/bills/${billId}`).toPromise();
        });
    }

    public setCurrentGroupBillAsPaid(billId: String) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/bills/${billId}/paid`, {}).toPromise();
        });
    }

    public addBillToCurrentGroup(bill: any) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post(`groups/${id}/bills`, bill).toPromise();
        });
    }
}
