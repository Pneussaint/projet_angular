import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BooksComponent } from '../books/books.component';
import { LoansComponent } from '../loans/loans.component';
import { MembersComponent } from '../members/members.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MatTabsModule, BooksComponent, LoansComponent, MembersComponent, ContactFormComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
