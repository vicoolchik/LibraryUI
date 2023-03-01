import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookListItem } from '../models/book-list-item.interface';
import { Book } from '../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: BookListItem[] = [];
  @Input() booksToEdit: Book[] = [];

  activeTab = 'all';
  @Output() openBookEditModal = new EventEmitter<Book>();
  

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  openBookDetailsModal() {
    // your logic to open the modal
  }

  
  openBookEditModalHandler(book: BookListItem): void {
    if (this.booksToEdit.length > 0) {
      const bookToEdit = this.booksToEdit.filter((b) => b.id === book.id)[0];
      this.openBookEditModal.emit(bookToEdit);
      console.log('books to edit');
    } else {
      console.log('No books to edit');
    }
  }



  public selectedGenre: string = '';
  public genres: string[] = ['Fiction', 'Non-fiction', 'Thriller', 'Romance', 'Science Fiction', 'Novel','Drama','Epic poetry','Short stories'];

  public get recommendedBooks(): BookListItem[]  {
    if (this.selectedGenre) {
      return this.books.filter((book) => book.genre === this.selectedGenre);
    } else {
      return this.books;
    }
  }
}

