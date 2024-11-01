import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';
import { ReviewService } from '../../services/review.service';
import { BreakpointsService } from '../../../../app-core/services/breakpoints.service';
import { CommonModule } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiFallbackSrcPipe } from '@taiga-ui/core';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { Review } from './config/types';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    TuiCarousel,
    TuiPagination,
    TuiButton,
    CommonModule,
    TuiAvatar,
    TuiFallbackSrcPipe,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit, OnDestroy {
  public title: string = 'Отзывы';
  public reviews: Review[] = [];
  public index: number = 0;
  public readonly itemsCount: number = 1;
  public itemsCountReviews: number = 2;

  private destroy$ = new Subject<void>();

  public reviewService = inject(ReviewService);
  public breakpointsService = inject(BreakpointsService);

  public ngOnInit() {
    this.reviewService
      .getReviewsData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((reviews: Review[]) => {
        this.reviews = reviews;
      });

    this.subscribeToBreakpointChanges();
  }

  private subscribeToBreakpointChanges(): void {
    this.breakpointsService.smallMobileMatch$
      .pipe(takeUntil(this.destroy$))
      .subscribe((match) => {
        if (match) {
          this.itemsCountReviews = 1;
        }
      });

    this.breakpointsService.mobileMatch$
      .pipe(takeUntil(this.destroy$))
      .subscribe((match) => {
        if (match) {
          this.itemsCountReviews = 1;
        }
      });

    this.breakpointsService.tabletMatch$
      .pipe(takeUntil(this.destroy$))
      .subscribe((match) => {
        if (match) {
          this.itemsCountReviews = 2;
        }
      });

    this.breakpointsService.desktopMatch$
      .pipe(takeUntil(this.destroy$))
      .subscribe((match) => {
        if (match) {
          this.itemsCountReviews = 3;
        }
      });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onIndex(index: number): void {
    this.index = index;
  }

  public prev(): void {
    if (this.index > 0) {
      this.index--;
      this.onIndex(this.index);
    }
  }

  public next(): void {
    if (this.index < this.reviews.length - 1) {
      this.index++;
      this.onIndex(this.index);
    }
  }
}
