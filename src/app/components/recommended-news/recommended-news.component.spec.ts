import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedNewsComponent } from './recommended-news.component';

describe('RecommendedNewsComponent', () => {
  let component: RecommendedNewsComponent;
  let fixture: ComponentFixture<RecommendedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
