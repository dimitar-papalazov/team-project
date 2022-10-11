import { Component, OnInit, TemplateRef } from '@angular/core';
import { PopoverContent, PopoverReference } from './popover-ref';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  title: string;
  hasCloseButton: boolean;
  className: string;
  content: PopoverContent;
  context: any;

  constructor(private popoverReference: PopoverReference) {}

  ngOnInit() {
    this.title = this.popoverReference.title;
    this.hasCloseButton = this.popoverReference.hasCloseButton;
    this.className = this.popoverReference.className;
    if (!this.className) {
      this.className = 'mat-elevation-z5';
    }

    this.className += ' popover-right';
    this.content = this.popoverReference.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverReference.close.bind(this.popoverReference),
        data: this.popoverReference.data,
      };
    }
  }
  onCloseClick() {
    this.popoverReference.close();
  }
}
