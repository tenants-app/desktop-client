import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';
import {User} from '../../core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    public user: User;

    constructor(private groupService: GroupService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe( params => {
            this.groupService.getCurrentGroupMember(params['id']).then((data: any) => {
                this.user = data.member;
            });
        });
    }

}
