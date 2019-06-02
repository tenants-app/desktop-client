import {Component, OnInit, ElementRef} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {HttpClient} from '@angular/common/http';
import {Group} from '../../core/models';
import {GroupService} from '../../core/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public focus;
    public listTitles: any[];
    public location: Location;
    private groups: Group[];
    private currentGroup: any;

    constructor(
        location: Location,
        private httpClient: HttpClient,
        private element: ElementRef,
        private router: Router,
        private notifier: NotifierService,
        private groupService: GroupService) {
        this.location = location;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.groupService.getGroups().subscribe((data: any) => this.groups = data.groups);
        this.groupService.getCurrentGroup().then((data: any) => this.currentGroup = data.group);
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    logout() {
        localStorage.removeItem('token');
        this.notifier.notify( 'success', 'Logged out' );
        this.router.navigate([ 'login' ]);
    }

    changeGroup(groupId) {
        this.groupService.changeGroup(groupId);
    }

}
