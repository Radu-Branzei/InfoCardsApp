import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { HomeComponent } from './home/home.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { DeleteAnnouncementComponent } from './delete-announcement/delete-announcement.component';

const routes: Routes = [  
    {path: 'add', component: AddAnnouncementComponent, pathMatch: 'full'},
    {path: 'edit', component: EditAnnouncementComponent, pathMatch: 'full'},
    {path: 'delete', component: DeleteAnnouncementComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', redirectTo: ''}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {
  
}
