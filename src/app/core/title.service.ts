import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TitleService {

  public title: BehaviorSubject<string> = new BehaviorSubject<string>('Fitness Tracker');
  public hasBackLink: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setTitle(newTitle: string) {
    this.title.next(newTitle);
  }

  setHasBackLink(backLink: string) {
    this.hasBackLink.next(backLink);
  }

}