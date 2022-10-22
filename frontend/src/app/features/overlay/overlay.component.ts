import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { menuItems } from './configs/menuItems.config';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  user = new BehaviorSubject<User>(new User());
  language = new BehaviorSubject('en');
  @Output() searchTerm = new EventEmitter<string>();

  menuItems: any = menuItems;

  constructor(
    public responsiveListenerService: ResponsiveListener,
    public titleService: TitleService,
    private changeDetector: ChangeDetectorRef,
    private localStorageService: LocalStorageService,
    private translateService: TranslateService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    let tempuser = this.localStorageService.getItem('currentUser');
    const user = new User();
    user.id = tempuser.id;
    user.email = tempuser.email;
    user.name = tempuser.name;
    this.user.next(user);
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  logout() {
    this.authService.logout()
  }

  keyPress(event: any): void {
    const target = event.target as HTMLTextAreaElement;
    this.searchTerm.emit(target.value);
  }

  changeLanguage(lang: string) {
    this.language.next(lang);
    this.localStorageService.setItem('lang', lang);
    this.translateService.use(lang);
  }
}
