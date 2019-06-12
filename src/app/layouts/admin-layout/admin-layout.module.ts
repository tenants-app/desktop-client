import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApartmentComponent} from '../../pages/apartment/apartment.component';
import {ShoppingListsComponent} from '../../pages/shopping-lists/shopping-lists.component';
import {NewShoppingListComponent} from '../../pages/new-shopping-list/new-shopping-list.component';
import {BillsComponent} from '../../pages/bills/bills.component';
import {BillComponent} from '../../pages/bill/bill.component';
import {DebtsComponent} from '../../pages/debts/debts.component';
import {NewBillComponent} from '../../pages/new-bill/new-bill.component';
import {NewLoanComponent} from '../../pages/new-loan/new-loan.component';
import {UserComponent} from '../../pages/user/user.component';
import {ShoppingListSummaryComponent} from '../../pages/shopping-list-summary/shopping-list-summary.component';
import { SpinnerComponent } from '../../spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        ApartmentComponent,
        ShoppingListsComponent,
        NewShoppingListComponent,
        BillsComponent,
        NewBillComponent,
        DebtsComponent,
        NewLoanComponent,
        UserComponent,
        ShoppingListSummaryComponent,
        BillComponent,
        SpinnerComponent
    ]
})

export class AdminLayoutModule {
}
