import { Component, OnInit } from '@angular/core';
import { NoteItemType } from '../Type';
import { NoteServiceService } from '../Service/note-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  AllDate: NoteItemType[] = [];
  constructor(private dateService: NoteServiceService) {}
  ngOnInit(): void {
    this.dateService.getItemData().subscribe((respone) => {
      this.AllDate = respone;
    });
  }

  onAddNote(item: NoteItemType) {
    this.dateService.postDate(item).subscribe((noteDate) => {
      this.AllDate.push(noteDate);
    });
  }
}
