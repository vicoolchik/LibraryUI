import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../models/book-details.interface';
import { Book } from '../models/book.interface';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:44385/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookDetails(id: number): Observable<BookDetails> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BookDetails>(url);
  }

  saveBook(book: any): Observable<number> {
    const url = `${this.apiUrl}/save`;
    return this.http.post<number>(url, book);
  }
}