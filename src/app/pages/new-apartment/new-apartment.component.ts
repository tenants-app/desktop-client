import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../core/services';

@Component({
    selector: 'app-new-apartment',
    templateUrl: './new-apartment.component.html',
    styleUrls: ['./new-apartment.component.scss']
})
export class NewApartmentComponent implements OnInit {

    private name: String;

    constructor(private groupsService: GroupService) {
    }

    constructor() {
    }

    ngOnInit() {
    }

    addApartment() {
        this.groupsService.newGroup(this.name);
    }
}
