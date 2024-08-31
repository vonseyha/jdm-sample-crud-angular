import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteItemType } from '../Type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  private API = 'http://localhost:5000/NoteItem';

  constructor(private http: HttpClient) {}

  getItemData(): Observable<NoteItemType[]> {
    return this.http.get<NoteItemType[]>(this.API);
  }

  deleteItem(item: NoteItemType): Observable<NoteItemType> {
    const Url = `${this.API}/${item.id}`;
    return this.http.delete<NoteItemType>(Url);
  }

  postDate(item: NoteItemType): Observable<NoteItemType> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<NoteItemType>(this.API, item, httpOptions);
  }

  getDataById(id: any): Observable<NoteItemType> {
    const url = `${this.API}/${id}`;
    return this.http.get<NoteItemType>(url);
  }

  updateItem(id: any, item: NoteItemType): Observable<NoteItemType> {
    const Url = `${this.API}/${id}`;
    return this.http.put<NoteItemType>(Url, item);
  }
}
