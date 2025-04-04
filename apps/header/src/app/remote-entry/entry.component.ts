import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './app.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-header-component',
  template: `<app-headercomponent></app-headercomponent>`,
})
export class RemoteEntryComponent {}
