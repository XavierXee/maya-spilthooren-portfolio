import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) {}

  getContentData(): Observable<any> {
    return this.httpClient.get<any>(`assets/content.json`);
  }
}
