import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './app.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent,],
  selector: 'app-left-nav',
  template: `<app-leftnav></app-leftnav>`,
})
export class RemoteEntryComponent {}
