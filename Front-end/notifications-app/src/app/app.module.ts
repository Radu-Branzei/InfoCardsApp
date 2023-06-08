import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorPipe } from './author.pipe';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { DeleteAnnouncementComponent } from './delete-announcement/delete-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    AuthorPipe,
    AddAnnouncementComponent,
    HomeComponent,
    EditAnnouncementComponent,
    DeleteAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }