import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner.component';
import { OverlayService } from './spinner.service';
@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [SpinnerComponent],
  providers: [
    OverlayService
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule {
  static forRoot(): ModuleWithProviders<SpinnerModule> {
    return {
      ngModule: SpinnerModule,
      providers: [OverlayService]
    };
  }
}
