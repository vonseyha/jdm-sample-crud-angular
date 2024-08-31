import { Component, EventEmitter, Output } from '@angular/core';
import { NoteItemType } from '../Type';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent {
  @Output() onAddedNewNote: EventEmitter<NoteItemType> = new EventEmitter();
  havePlane: boolean = false;
  title: string = '';
  body: string = '';

  onSubmit() {
    const newNote: NoteItemType = {
      title: this.title,
      body: this.body,
      status: this.havePlane,
      date: new Date().toDateString(),
    };
    this.onAddedNewNote.emit(newNote);
    this.title = '';
    this.body = '';
    this.havePlane = false;
  }
}
