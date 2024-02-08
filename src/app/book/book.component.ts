import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books/book';
import { CommonModule } from '@angular/common';


@Component({
  selector: '/book',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  constructor( ) {
  }

  ngOnInit() {
  }
}
