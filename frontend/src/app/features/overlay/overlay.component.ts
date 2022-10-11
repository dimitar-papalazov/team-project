import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
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
  userTemp: User = {
    Id: 1,
    UserName: 'darko.gjakovski253@hotmail.com',
    Email: 'darko.gjakovski253@hotmail.com',
    FullName: 'Darko Gjakovski',
    FirstName: 'Darko',
    LastName: 'Gjakovski',
  };
  user = new BehaviorSubject<User>(this.userTemp);
  language = new BehaviorSubject('en');
  @Output() searchTerm = new EventEmitter<string>();

  menuItems: any = menuItems;

  constructor(
    public responsiveListenerService: ResponsiveListener,
    public titleService: TitleService,
    private changeDetector: ChangeDetectorRef,
    private localStorageService: LocalStorageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  logout() {}

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
