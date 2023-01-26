import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable()
export class OverlayService {
  constructor(private overlay: Overlay) {}

  createOverlay(config: OverlayConfig) {
    return this.overlay.create(config);
  }

  attachTemplatePortal(
    portalOutlet: PortalOutlet,
    templateRef: TemplateRef<any>,
    vcRef: ViewContainerRef
  ) {
    const templatePortal = new TemplatePortal(templateRef, vcRef);
    portalOutlet.attach(templatePortal);
  }

  positionGloballyCenter() {
    return this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }
}
