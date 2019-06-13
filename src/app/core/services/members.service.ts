import {GroupService} from './group.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MembersService extends GroupService {

    public getMembers() {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get(`groups/${id}/members`).toPromise();
        });
    }

    public getMember(memberId) {
        return this.getCurrentGroup().then((data: any) => {
            const id = data.group._id;
            return this.httpClient.get(`groups/${id}/members/${memberId}`).toPromise();
        });
    }
}
