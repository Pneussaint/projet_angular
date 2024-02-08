import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book';


@Component({
  selector: '/book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  book: Book = {} as Book;

  constructor() {
  }

  ngOnInit() {
    this.book = history.state;
  }
}
