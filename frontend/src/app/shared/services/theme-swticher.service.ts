import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  HostListener,
  Injectable,
  RendererFactory2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable()
export class ThemeSwticherService {
  themes: string[] = [
    'dark-theme',
    'light-theme',
    'groove-theme',
    'classic-theme',
  ];
  theme = this.themes[0];
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2,
    private localStorageService: LocalStorageService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  onThemeSelect(k: string) {
    this.themes.forEach((v) => {
      this.renderer.removeClass(this.document.body, v);
    });
    let theme = this.themes[k];
    this.renderer.addClass(this.document.body, theme);
    this.localStorageService.setItem('theme', k);
  }
}
