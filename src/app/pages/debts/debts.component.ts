import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

  public type: String = 'my-debts';

  constructor() { }

  ngOnInit() {
  }

}
