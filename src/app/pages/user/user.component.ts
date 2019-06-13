import {Component, OnInit} from '@angular/core';
import {MembersService} from '../../core/services';
import {User} from '../../core/models';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    private user: User;
    private loaded = false;

    constructor(private membersService: MembersService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.membersService.getMember(params['id']).then((data: any) => {
                this.user = data.member;
                this.loaded = true;
            });
        });
    }

}
