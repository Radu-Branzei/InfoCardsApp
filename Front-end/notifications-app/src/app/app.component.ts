import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'notifications-app';
    // announcementFromApp: Announcement = { 
    //   message: 'este o poveste frumoasa',
    //   title: 'Capra cu trei iezi',
    //   author: 'Tibi',
    //   category:  {
    //     id:1,
    //     name:"Poveste"
    //   }
    // }

    // selectedCategory : Category = {
    //   id:1,
    //   name:"Poveste"
    // }
    
}