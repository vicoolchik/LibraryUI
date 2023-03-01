import { Component, OnInit } from '@angular/core';
import { BookDetails } from './models/book-details.interface';
import { BookListItem } from './models/book-list-item.interface';
import { Book } from './models/book.interface';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LibraryUI';
  books: BookListItem[] = [];

  booksToEdit: Book[] = [];

  booksToView:BookDetails[]=[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books.map(book => ({
        title: book.title,
        rating: book.rating,
        reviewsNumber: book.reviewsNumber,
        cover: book.cover ,
        genre: book.genre,
        id: book.id
      }));
    });
    for (let id = 1; id <= 10; id++) {
      this.bookService.getBookDetails(id).subscribe(
        (book: BookDetails) => this.booksToEdit.push(book),
        (error) => console.log(error)
      );
    }
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.booksToEdit = books;
    });
  }
}