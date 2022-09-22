import { Injectable, Injector, ElementRef, OnInit } from '@angular/core';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, PositionStrategy, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';
import {PopoverContent, PopoverReference} from './popover-ref';
import {PopoverComponent} from './popover.component';

export enum PopoverType {
  modal,
  drawer
}

export interface PopoverConfig {
  title?: string;
  type?: PopoverType;
  className?: string;
  width?: number;
  height?: string;
  origin?: any;
  flexible?: boolean;
  push?: boolean;
  positions?: ConnectionPositionPair[];
  content?: PopoverContent;
  data?: any;
  hasCloseButton?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  closeExisting?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  private currentPopoverReferences: PopoverReference[] = [];
  private dockingStrategyOffsetElement: ElementRef;

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private router: Router
  ) {
  }

  open({ title, type, className, width,
         height, origin, flexible, push, positions,
         content, data, hasCloseButton,
         closeExisting }: PopoverConfig): PopoverReference {
    if (closeExisting) {
      this.closeAll();
    }
    if (hasCloseButton == null) {
      hasCloseButton = true;
    }
    let customOrigin = true;
    if (type == null) {
      type = this.getOverlayType();
    }
    if (!origin) {
      customOrigin = false;
      origin = this.dockingStrategyOffsetElement.nativeElement;
    }
    if (!width && origin.offsetWidth) {
      width = origin.offsetWidth;
    }
    const config = this.getOverlayConfig({ type, origin, width, height, flexible, push, positions });
    const overlayRef = this.overlay.create(config);
    const popoverReference = new PopoverReference(overlayRef, title!, hasCloseButton, className!, content!, data);
    const injector = this.createInjector(popoverReference, this.injector);
    if (config.hasBackdrop && hasCloseButton) {
      overlayRef.backdropClick().subscribe(_ => popoverReference.close({ goBack: false }));
    }
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));
    this.currentPopoverReferences.push(popoverReference);
    this.router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd) {
        this.closeAll();
      }
    });
    return popoverReference;
  }

  openModal({ title, content, data,
              hasCloseButton }: PopoverConfig) {
    return this.open({
      title,
      type: PopoverType.modal,
      className: 'mat-elevation-z4',
      content,
      data,
      hasCloseButton,
      closeExisting: true
    });
  }

  openDrawer({ title, content, data,
               hasCloseButton, width, closeExisting = true }: PopoverConfig) {
    return this.open({
      title,
      type: PopoverType.drawer,
      className: 'mat-elevation-z4',
      content,
      data,
      hasCloseButton,
      width: 500,
      closeExisting: closeExisting,
      backdropClass: 'dark-backdrop'
    });
  }

  closeAll(goBack: boolean = false) {
    if (this.currentPopoverReferences) {
      let currentPopoverReference: PopoverReference;
      while (currentPopoverReference = this.currentPopoverReferences.pop()!) {
        currentPopoverReference.close({ goBack: goBack });
      }
    }
  }

  closeCurrent(goBack: boolean = false) {
    if (this.currentPopoverReferences) {
      let currentPopoverReference: PopoverReference;
      currentPopoverReference = this.currentPopoverReferences.pop()!;
      currentPopoverReference.close({ goBack: goBack });
    }
  }

  private getOverlayConfig({ type, origin, width, height, flexible, push, positions }): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: this.checkIfHasBackDrop(type),
      width: width,
      height: height,
      disposeOnNavigation: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.getOverlayPosition(type, origin, flexible, push, positions),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  private checkIfHasBackDrop(type: PopoverType) {
    if (type === PopoverType.modal || type === PopoverType.drawer) {
      return true;
    } else {
      return false;
    }
  }

  private getOverlayType() {
    return PopoverType.drawer;
  }

  private getOverlayPosition(type: PopoverType, origin: HTMLElement, flexible: boolean, push: boolean,
                             positions: ConnectionPositionPair[]): PositionStrategy {
    if (type === PopoverType.modal) {
      return this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically();
    } else if (type === PopoverType.drawer) {
      return this.overlay
        .position()
        .global()
        .right();
    }  else {
      throw new Error('Unknown type');
    }
  }

  private createInjector(popoverReference: PopoverReference, injector: Injector) {
    const tokens = new WeakMap([[PopoverReference, popoverReference]]);
    return new PortalInjector(injector, tokens);
  }

  setLayoutReference(reference: ElementRef) {
    this.dockingStrategyOffsetElement = reference;
  }
}
