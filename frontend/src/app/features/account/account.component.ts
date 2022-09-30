import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TitleService } from 'src/app/core/title.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user = new BehaviorSubject<User>(null);

  constructor(private titleService: TitleService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Account')
    this.user.next(this.localStorageService.getItem('currentUser'));
  }

}
