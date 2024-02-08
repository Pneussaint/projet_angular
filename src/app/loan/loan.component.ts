import { Component, OnInit } from '@angular/core';
import { Loan } from '../loans/loan';


@Component({
  selector: '/loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit {
  loan: Loan = {} as Loan;

  constructor() {
  }

  ngOnInit() {
    this.loan = history.state;
  }
}
