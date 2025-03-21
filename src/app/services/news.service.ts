import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { PageableData, PageRequest } from '../models/paginated.interface';
import { Observable } from 'rxjs';
import { News } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends ClientService {

  getNews(pageRequest: PageRequest): Observable<PageableData<News>> {
    return this.http.get<PageableData<News>>(`${this.apiUrl}/news/?page=${pageRequest.page}&size=${pageRequest.size}`)
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/news/${id}`);
  }

  getTop3ByNewsId(id: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/news/${id}/top3`);
  }

}
