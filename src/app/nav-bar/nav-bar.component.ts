import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BooksComponent } from '../books/books.component';
import { LoansComponent } from '../loans/loans.component';
import { MembersComponent } from '../members/members.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router : Router) {
  }
  navigateToBooks() {
    this.router.navigateByUrl('/books');
  }
  navigateToLoans() {
    this.router.navigateByUrl('/loans');
  }
  navigateToMembers() {
    this.router.navigateByUrl('/members');
  }
  navigateToContactForm() {
    this.router.navigateByUrl('/contact-form');
  }  
}
