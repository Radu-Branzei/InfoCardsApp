import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  id: number;
  title: string;
  message: string;
  author: string;
  category: Category;
  imageUrl: string;
  categorySelected: string;
  
  addAnnouncement(){
    console.log('title:', this.title);
    console.log('category:', this.category);
    console.log('author', this.author);
  }

  ngOnInit(){
    this.announcementService.serviceCall();
    this.announcementService.getAnnouncements().subscribe(x=>this.filteredAnnouncements=x);
  }

  announcementsFromApp: Announcement[];
  filteredAnnouncements: Announcement[];

  filterAnnouncements(selectedCategoryId: string)
  {
    if(!selectedCategoryId)
    {
      this.announcementService.getAnnouncements().subscribe(x=>this.filteredAnnouncements=x);
      return;
    }
    
    this.announcementService.getAnnouncements().subscribe(receivedAnnouncements =>
      {
        this.filteredAnnouncements = receivedAnnouncements.filter(announcement =>
          announcement.categoryId === selectedCategoryId);
      })
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

constructor ( private announcementService: AnnouncementService )
  {
      const observer = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      };

      this.announcementService.getAnnouncements().subscribe(announcement=>{
        this.announcementsFromApp = announcement;
        this.filteredAnnouncements = announcement});
  }
}