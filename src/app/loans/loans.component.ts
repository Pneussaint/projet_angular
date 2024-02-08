import { Component, OnInit } from '@angular/core';
import { Loan } from './loan';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoansService } from './loans.service';

@Component({
  selector: 'loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent implements OnInit {
  loans$: Observable<Loan[]> = new Observable<Loan[]>();

  constructor(private loansService: LoansService) {
  }

  ngOnInit() {
    this.getLoans();
  }

  getLoans() {
    this.loans$ = this.loansService.getLoans();
   }
}
