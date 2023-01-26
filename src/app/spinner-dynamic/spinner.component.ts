import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  DoCheck,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { OverlayService } from './spinner.service';

@Component({
  selector: 'omega-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, DoCheck {
  @Input() color?: ThemePalette;
  @Input() diameter = 100;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth?: number;
  @Input() value?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() displayProgressSpinner: boolean;

  @ViewChild('progressSpinnerRef', { static: true })
  private progressSpinnerRef: TemplateRef<any>;
  private progressSpinnerOverlayConfig: OverlayConfig = new OverlayConfig();
  private overlayRef: OverlayRef;
  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: OverlayService
  ) {}
  ngOnInit() {
    this.progressSpinnerOverlayConfig.hasBackdrop = this.backdropEnabled;
    this.progressSpinnerOverlayConfig.panelClass = 'spinner-panel-class';
    this.progressSpinnerOverlayConfig.backdropClass = 'spinner-back-drop-class';
    this.progressSpinnerOverlayConfig.positionStrategy =
      this.overlayService.positionGloballyCenter();
    this.overlayRef = this.overlayService.createOverlay(
      this.progressSpinnerOverlayConfig
    );
  }
  ngDoCheck() {
    if (this.displayProgressSpinner && !this.overlayRef.hasAttached()) {
      this.overlayService.attachTemplatePortal(
        this.overlayRef,
        this.progressSpinnerRef,
        this.vcRef
      );
    } else if (!this.displayProgressSpinner && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
