import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {ApartmentComponent} from '../../pages/apartment/apartment.component';
import {ShoppingListsComponent} from '../../pages/shopping-lists/shopping-lists.component';
import {BillsComponent} from '../../pages/bills/bills.component';
import {BillComponent} from '../../pages/bill/bill.component';
import {DebtsComponent} from '../../pages/debts/debts.component';
import {NewShoppingListComponent} from '../../pages/new-shopping-list/new-shopping-list.component';
import {NewBillComponent} from '../../pages/new-bill/new-bill.component';
import {NewLoanComponent} from '../../pages/new-loan/new-loan.component';
import {UserComponent} from '../../pages/user/user.component';
import {ShoppingListSummaryComponent} from '../../pages/shopping-list-summary/shopping-list-summary.component';
import {NewApartmentComponent} from '../../pages/new-apartment/new-apartment.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'apartment',
        component: ApartmentComponent
    },
    {
        path: 'apartment-new',
        component: NewApartmentComponent
    },
    {
        path: 'shopping-lists',
        component: ShoppingListsComponent
    },
    {
        path: 'shopping-lists-new',
        component: NewShoppingListComponent
    },
    {
        path: 'bills',
        component: BillsComponent
    },
    {
        path: 'bills/:id',
        component: BillComponent
    },
    {
        path: 'bills-new',
        component: NewBillComponent
    },
    {
        path: 'debts',
        component: DebtsComponent
    },
    {
        path: 'loans-new',
        component: NewLoanComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'shopping-lists/:id',
        component: ShoppingListSummaryComponent
    },
];
