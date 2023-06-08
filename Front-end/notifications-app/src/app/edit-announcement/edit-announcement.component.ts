import { Component } from '@angular/core';
import { Category } from '../category';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent {

  editedAnnouncement: Announcement;
  idEdited: string;
  categoryEdited: string;
  authorEdited: string;
  messageEdited: string;
  titleEdited: string;


  constructor ( private announcementService: AnnouncementService ) {};

  ngOnInit(){
    this.announcementService.serviceCall();
  }
  
  editAnnouncement(){
    
    this.editedAnnouncement = {
      title: this.titleEdited,
      author: this.authorEdited,
      categoryId: this.categoryEdited,
      id: this.idEdited,
      imageUrl: '',
      message: this.messageEdited
    }
    this.announcementService.editAnnouncement(this.editedAnnouncement);
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
