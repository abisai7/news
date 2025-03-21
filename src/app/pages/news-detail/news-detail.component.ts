import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecommendedNewsComponent } from '../../components/recommended-news/recommended-news.component';

@Component({
  selector: 'app-news-detail',
  imports: [RouterModule, RecommendedNewsComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {

  @Input() id!: number;
  newsDetails?: News;
  relatedNews?: News[];
  
  constructor(private readonly newsService: NewsService, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loadNewsDetails(params['id']);
      this.loadRelatedNews(params['id']);
    });
  }

  loadNewsDetails(id: number): void {
    this.newsService.getNewsById(id).subscribe(
      (newsDetails) => {
        this.newsDetails = newsDetails;
      }
    );
  }

  loadRelatedNews(id: number): void {
    this.newsService.getTop3ByNewsId(id).subscribe(
      (relatedNews) => {
        this.relatedNews = relatedNews;
      }
    );
  }

}
