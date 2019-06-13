import {Component, OnInit} from '@angular/core';
import {MembersService, GroupService} from '../../core/services';
import {User} from '../../core/models';

@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.scss']

})
export class ApartmentComponent implements OnInit {

    private members: User[];
    private loaded = false;
    private email: String;
    private link: String;
    private loading = false;

    constructor(private membersService: MembersService, private groupService: GroupService) {
    }

    ngOnInit() {
        this.membersService.getMembers().then((data: any) => {
            this.members = data.members;
            this.loaded = true;
        });
    }

    generateMemberLink() {
        this.loading = true;
        this.groupService.generateMemberLink(this.email).then((data: any) => {
            this.link = data.link;
            this.loading = false;
        });
    }
}
