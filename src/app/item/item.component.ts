import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteItemType } from '../Type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() data?: NoteItemType;
  @Output() onDelete: EventEmitter<NoteItemType> =
    new EventEmitter<NoteItemType>();
  hadleOnDelete(date: NoteItemType) {
    this.onDelete.emit(date);
  }
}
