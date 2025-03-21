import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { RouterModule } from '@angular/router';
import { News } from '../../models/news.interface';

@Component({
  selector: 'app-recommended-news',
  imports: [RouterModule],
  templateUrl: './recommended-news.component.html',
  styleUrl: './recommended-news.component.css'
})
export class RecommendedNewsComponent implements OnChanges {

  @Input() id!: number;
  relatedNews?: News[];

  constructor(private readonly newsService: NewsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && changes['id'].currentValue !== changes['id'].previousValue) {
      this.loadRelatedNews(changes['id'].currentValue);
    }
  }

  loadRelatedNews(id: number): void {
    this.newsService.getTop3ByNewsId(id).subscribe(
      (relatedNews) => {
        this.relatedNews = relatedNews;
      }
    );
  }

}
