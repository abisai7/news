import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTitleComponent } from './brand-title.component';

describe('BrandTitleComponent', () => {
  let component: BrandTitleComponent;
  let fixture: ComponentFixture<BrandTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
