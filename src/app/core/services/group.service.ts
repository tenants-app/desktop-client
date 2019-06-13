import {Injectable} from '@angular/core';
import {Debt, Group, ShoppingList} from '../models';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
//import { remote } from 'electron';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(
        public httpClient: HttpClient,
        public router: Router
    ) {}

    public getGroups() {
        return this.httpClient.get<Group[]>('users/groups');
    }

    public changeGroup(groupId) {
        this.getGroup(groupId).then((data: any) => {
            this.setCurrentGroup(data.group._id);
            window.location.reload();
          //  remote.BrowserWindow.getAllWindows()[0].reload();
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

    public generateMemberLink(email) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.post('groups/generate_member_link', {
                email: email,
                group_id: id
            }).toPromise();
        });
    }

    public newGroup(name) {
        return this.httpClient.post(`groups/new`, {
            name: name
        }).toPromise().then(data => {
            window.location.reload();
        });
    }
}
