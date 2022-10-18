import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { User } from '../../core/models/user';
import { EditProfileDialogService } from './components/edit-profile-dialog/service/edit-profile-dialog.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user = new BehaviorSubject<User>(null);

  constructor(
    private titleService: TitleService,
    private localStorageService: LocalStorageService,
    private editProfileDialogService: EditProfileDialogService,
    public responsiveListenerService: ResponsiveListener
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Account');
    this.user.next(this.localStorageService.getItem('currentUser'));
  }

  editProfile(): void {
    this.editProfileDialogService.openDialog();
  }
}
