import {Injectable} from '@angular/core';
import {Group} from '../models';
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
        this.getGroup(groupId).then((group: Group) => {
            this.setCurrentGroup(group._id);
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
            return this.getGroups().toPromise().then(groups => {
                return this.getGroup(groups[0]._id);
            });
        }

        return this.getGroup(id);
    }

}
