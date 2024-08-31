import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from '../Service/note-service.service';
import { NoteItemType } from '../Type';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() AllNoteItems: NoteItemType[] = [];
  constructor(private itemDateService: NoteServiceService) {}
  ngOnInit(): void {}
  onDeleteItem(item: NoteItemType) {
    this.itemDateService
      .deleteItem(item)
      .subscribe(
        () =>
          (this.AllNoteItems = this.AllNoteItems.filter(
            (allItem) => allItem.id !== item.id
          ))
      );
  }
}
