import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BooksService } from './books.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'books',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]> = new Observable<Book[]>();
  constructor(private booksService: BooksService, private router : Router, private route : ActivatedRoute) {
    this.getBooks();
  }

  ngOnInit() {
    this.getBooks();
  }

  navigateToBookDetails(book: Book) {
    this.router.navigate(['/book', book]);
  }

  getBooks() {    
    this.books$ = this.booksService.getBooks();
   }
}
