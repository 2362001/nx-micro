import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@testnx/shared';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, FormsModule, SharedModule, NzIconModule, ],
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  switchValue = false;
  handleChange(event: any) {
    console.log(event);
  }
}
