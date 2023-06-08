import { Component, Input } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { EditAnnouncementComponent } from '../edit-announcement/edit-announcement.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent {
    @Input()
    announcement: Announcement = {
      message: '',
      title: '',
      author: '',
      categoryId: '1',
      id: '',
      imageUrl: ''
    };

    constructor ( private announcementService: AnnouncementService ) {};

    deleteAnnouncement() {
      this.announcementService.deleteAnnouncement(this.announcement.id);
    }

    setEditId() {
      this.announcementService.idEdited = this.announcement.id;
    }
}