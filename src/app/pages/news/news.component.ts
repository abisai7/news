import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { PageableData } from '../../models/paginated.interface';
import { News } from '../../models/news.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  pagedNews?: PageableData<News>;

  constructor(private readonly newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews({ page: 0, size: 5 }).subscribe(
      (pagedNews) => {
        this.pagedNews = pagedNews;
      }
    );
  }

}
