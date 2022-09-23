import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Badges } from './models/badges';

@Injectable({
  providedIn: 'root'
})

export class BadgeService {
  private badges = new Subject<Badges>();  

  badges$ = this.badges.asObservable();

  publishData(counter: Badges) {
    this.badges.next(counter);
  }
}