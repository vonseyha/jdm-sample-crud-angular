import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from '../Service/note-service.service';
import { NoteItemType } from '../Type';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  date = Date();
  itemId: string | null = '';
  data?: NoteItemType;
  dataUpdate: NoteItemType = {
    id: 0,
    title: '',
    body: '',
    status: false,
    date: new Date().toDateString(),
  };

  constructor(
    private route: ActivatedRoute,
    private dataItem: NoteServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.dataItem.getDataById(this.itemId).subscribe((response) => {
        this.data = response;
        this.dataUpdate = {
          id: this.data.id,
          title: this.data.title,
          body: this.data.body,
          status: this.data.status,
          date: new Date().toDateString(),
        };
      });
    }
  }

  hadleSubmit() {
    if (this.dataUpdate) {
      this.dataItem.updateItem(this.data?.id, this.dataUpdate).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
