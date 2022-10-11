import { EmbeddedViewRef, TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';

export interface PopoverCloseEvent {
  type: 'backdropClick' | 'close';
  data: any;
}

export type PopoverContent =
  | TemplateRef<any>
  | Type<any>
  | string
  | EmbeddedViewRef<any>;

export class PopoverReference {
  private afterClosed = new Subject<PopoverCloseEvent>();

  constructor(
    public overlay: OverlayRef,
    public title: string,
    public hasCloseButton: boolean,
    public className: string,
    public content: PopoverContent,
    public data: any
  ) {
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', { goBack: false });
    });
  }
  close(data?: any) {
    this._close('close', data);
  }

  private _close(type: PopoverCloseEvent['type'], data?: any) {
    if (type === 'backdropClick') {
      data['goBack'] = true;
    }
    if (
      data &&
      data['goBack'] &&
      window.location.hash.indexOf('#dialog') !== -1
    ) {
      history.go(-1);
    }

    this.overlay.dispose();

    this.afterClosed.next({
      type,
      data,
    });
    this.afterClosed.complete();
  }
}
