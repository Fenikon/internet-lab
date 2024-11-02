import { inject, Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { DESKTOP, MOBILE, SMALL_MOBILE, TABLET } from './configs/breakpoints';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService implements OnDestroy {
  private _smallMobileMatch$ = new BehaviorSubject<boolean>(false);
  private _mobileMatch$ = new BehaviorSubject<boolean>(false);
  private _tabletMatch$ = new BehaviorSubject<boolean>(false);
  private _desktopMatch$ = new BehaviorSubject<boolean>(false);

  public smallMobileMatch$ = this._smallMobileMatch$.asObservable();
  public mobileMatch$ = this._mobileMatch$.asObservable();
  public tabletMatch$ = this._tabletMatch$.asObservable();
  public desktopMatch$ = this._desktopMatch$.asObservable();

  public get smallMobileMatch(): boolean {
    return this._smallMobileMatch$.value;
  }

  public get mobileMatch(): boolean {
    return this._mobileMatch$.value;
  }

  public get tabletMatch(): boolean {
    return this._tabletMatch$.value;
  }

  public get desktopMatch(): boolean {
    return this._desktopMatch$.value;
  }

  private breakpointObserver = inject(BreakpointObserver);

  private ngUnsubscribe = new Subject<void>();

  constructor() {
    this.breakpointObserver
      .observe([DESKTOP, TABLET, MOBILE, SMALL_MOBILE])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(({ breakpoints }) => {
        this._smallMobileMatch$.next(breakpoints[SMALL_MOBILE]);
        this._mobileMatch$.next(breakpoints[MOBILE]);
        this._tabletMatch$.next(breakpoints[TABLET]);
        this._desktopMatch$.next(breakpoints[DESKTOP]);
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
