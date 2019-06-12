import {Component, OnInit} from '@angular/core';
import {MembersService} from '../../core/services';
import {User} from '../../core/models';

@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.scss']

})
export class ApartmentComponent implements OnInit {

    private members: User[];
    private loaded = false;

    constructor(private membersService: MembersService) {
    }

    ngOnInit() {
        this.membersService.getMembers().then((data: any) => {
            this.members = data.members;
            this.loaded = true;
        });
    }

}
