import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {User} from '../../core/models';

@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

    public members: User[];

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.groupService.getCurrentGroupMembers().then((data: any) => {
            this.members = data.members;
        });
    }

}
