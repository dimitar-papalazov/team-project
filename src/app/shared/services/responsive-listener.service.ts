import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable()
export class ResponsiveListener {

  constructor(private breakpointObserver: BreakpointObserver){}

  isHandset$: Observable<boolean> =
  this.breakpointObserver.observe('(max-width: 769px)').pipe(
    map(result => result.matches),
    shareReplay(1),
  );

  isSmallDesktop$: Observable<boolean> =
  this.breakpointObserver.observe('(max-width: 1000px)').pipe(
    map(result => result.matches),
    shareReplay(1),
  );

  isMediumDesktop$: Observable<boolean> =
  this.breakpointObserver.observe('(max-width: 1366px)').pipe(
    map(result => result.matches),
    shareReplay(1),
  );

}
