import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { PageableData } from '../../models/paginated.interface';
import { News } from '../../models/news.interface';
import { RouterModule } from '@angular/router';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  pagedNews?: PageableData<News>;
  initialPage = 0;
  defaultPageSize = 5;

  constructor(private readonly newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews(this.initialPage);
  }

  getNews(page: number): void {
    this.newsService.getNews({ page: page ?? this.initialPage, size: this.defaultPageSize }).subscribe(
      (pagedNews) => {
        this.pagedNews = pagedNews;
      }
    );
  }

  hasPreviousPage(): boolean {
    return this.pagedNews?.first === false;
  }

  hasNextPage(): boolean {
    return this.pagedNews?.last === false;
  }

  goToPage(page: number): void {
    this.getNews(page);
  }

}
