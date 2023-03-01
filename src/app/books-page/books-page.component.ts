import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.interface';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})


export class BooksPageComponent implements OnInit{

  public selectedBook: Book = { id: 0, title: '', author: '', genre: '', content: '', cover: '', rating: 0, reviewsNumber: 0 };
  
  public isEditing: boolean = false;

  public openBookEditModal(book: Book): void {
    this.selectedBook = book;
    this.isEditing = true;
  }

  public ngOnInit(): void {
    // your initialization logic here
  }

  public saveBook(): void {
    if (this.isEditing) {
      //  update the book
    } else {
      //  add the book
      
    }
  }

  public clearForm(): void {
    // your logic to clear the form
  }
}

