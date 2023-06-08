import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';


@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent {

  id: string;
  title:string;
  message:string;
  author:string;
  categoryId: string;
  imageUrl:string;
  categorySelected:string;
  newAnnouncement: Announcement;

  constructor ( private announcementService: AnnouncementService ) {};

  ngOnInit(){
    this.announcementService.serviceCall();
  }
  
  addAnnouncement(){
    this.newAnnouncement = {
      title: this.title,
      author: this.author,
      categoryId: this.categoryId,
      id: this.id,
      imageUrl: '',
      message: this.message
    }
    this.announcementService.addAnnouncement(this.newAnnouncement);
    console.log('id:', this.newAnnouncement.id);
    console.log('title:', this.title);
    console.log('category:', this.categoryId);
    console.log('author:', this.author);
    console.log('message:', this.message);
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

  printInput()
  {
    console.log("Title: " + this.title + "\nAuthor: " + this.author + "\nMessage: " + this.message + "\n");
  }
}
