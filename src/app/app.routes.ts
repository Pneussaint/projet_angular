import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { LoansComponent } from './loans/loans.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MemberComponent } from './member/member.component';
import { LoanComponent } from './loan/loan.component';

export const routes: Routes = [
    { path: 'book', component: BookComponent },
    { path: 'books', component: BooksComponent },
    { path: 'member', component: MemberComponent },
    { path: 'members', component: MembersComponent },
    { path: 'loan', component: LoanComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'contact-form', component: ContactFormComponent },
    { path: '', redirectTo: '/books', pathMatch: 'full' }

];
