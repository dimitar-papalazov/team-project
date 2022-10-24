import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { User } from '../../core/models/user';
import { AccountService } from './account.service';
import { EditProfileDialogService } from './components/edit-profile-dialog/service/edit-profile-dialog.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user = new BehaviorSubject<any>(null);
  sub = new Subscription();

  constructor(
    private titleService: TitleService,
    private localStorageService: LocalStorageService,
    private editProfileDialogService: EditProfileDialogService,
    public responsiveListenerService: ResponsiveListener,
    private accountService: AccountService,
    private loaderService: LoaderService
  ) {this.sub.add(
    this.accountService.userChanges.subscribe(()=>{
      this.loaderService.display(true)
      this.accountService.getMember(this.user.value.id).subscribe(data => {
        this.user.next(data)
        this.loaderService.display(false)
      })
    })
  )}

  ngOnInit(): void {
    this.titleService.setTitle('Account');
    this.user.next(this.localStorageService.getItem('currentUser'));
  }

  editProfile(): void {
    this.editProfileDialogService.openDialog();
  }
}
