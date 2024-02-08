import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BooksService } from './books.service';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]> = new Observable<Book[]>();

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {    
    this.books$ = this.booksService.getBooks();
   }
}
