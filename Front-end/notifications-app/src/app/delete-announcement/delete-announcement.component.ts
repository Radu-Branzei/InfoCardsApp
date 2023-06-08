import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-delete-announcement',
  templateUrl: './delete-announcement.component.html',
  styleUrls: ['./delete-announcement.component.scss']
})
export class DeleteAnnouncementComponent {

  editedAnnouncement: Announcement;
  idDeleted: string;

  constructor ( private announcementService: AnnouncementService ) {};

  ngOnInit(){
    this.announcementService.serviceCall();
  }

  deleteAnnouncement() {
    this.announcementService.deleteAnnouncement(this.idDeleted);
  }

  listOfCategories: Category[] = [
    {
      id: '1',
      name: 'Course'
    },
    {
      id: '2',
      name: 'General'
    },
    { 
      id: '3',
      name: 'Laboratory'
    }
  ];
}
