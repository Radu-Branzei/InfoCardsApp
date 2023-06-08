import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Announcement } from '../announcement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  //baseUrl:string='https://newsapi20221108120432.azurewebsites.net';
  baseUrl: string = "http://localhost:7073";
  announcementsFromApp: Observable<Announcement[]>;
  public idEdited: string;

  constructor(private httpClient: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Response-Type': "text",
    })
  };

  testObservable() {
    throw new Error('Method not implemented.');
  }

  getAnnouncementById(id: string): Observable<Announcement> {
    return this.httpClient.get<Announcement>(this.baseUrl + "/Announcement/" + id, this.httpOptions);
  }
  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseUrl + "/Announcement", this.httpOptions);
  }
  addAnnouncement(announcement: Announcement) {
    this.httpClient.post(this.baseUrl + "/Announcement",
     announcement, this.httpOptions).subscribe();
     console.log("ADDED");
  }
  // deleteAnnouncement(Id: string): Observable<unknown> {
  //   return this.httpClient.delete(this.baseUrl + "/Announcement/" + Id, this.httpOptions)
  // }
  // editAnnouncement(announcement: Announcement): Observable<unknown> {
  //   return this.httpClient.put(this.baseUrl + "/Announcement?id=" + announcement.id, announcement, this.httpOptions)
  // }

  // addAnnouncement(announcement: Announcement) {
  //   this.httpClient.post<Announcement>(this.baseUrl + "/Announcement", announcement, this.httpOptions).subscribe();
  // }

//   getAnnouncements(): Observable<Announcement[]> {
//     return this.httpClient.get<Announcement[]>(this.baseUrl, this.httpOptions);
//   }

//   getNumberOfAnnouncements(): number {
//     return 0;
//   }

  editAnnouncement(editedAnnouncement: Announcement) {
    console.log("EDITED");
    this.httpClient.put<Announcement>(this.baseUrl + '/Announcement?id=' + this.idEdited, editedAnnouncement, this.httpOptions).subscribe();
  }

  deleteAnnouncement(idDeleted: string) {
    
    this.httpClient.delete<Announcement>(this.baseUrl + '/Announcement/' + idDeleted, this.httpOptions).subscribe();
    console.log("DELETED");
  }

  updateAnnouncements() {
    throw new Error('Method not implemented.');
  }

  serviceCall() {
    console.log("Service was called");
  }
}
