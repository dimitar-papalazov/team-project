import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private localStorageService: LocalStorageService,
    private translateService: TranslateService){
    if(!this.localStorageService.getItem('lang')){
      this.localStorageService.setItem('lang','en');
      this.translateService.use('en');
    }else{
      this.translateService.use(this.localStorageService.getItem('lang'));
    }
  }

  title = 'Fitness Tracker';
}
