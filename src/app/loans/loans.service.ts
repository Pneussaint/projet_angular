import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http:HttpClient) { }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>('assets/loans.json');
  }
}
