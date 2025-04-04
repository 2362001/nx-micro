import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@testnx/shared';

@Component({
  selector: 'app-headercomponent',
  imports: [CommonModule, SharedModule ],
  templateUrl: './app.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  inputValue = '';
  // readonly store = inject(AppStore);

  constructor() {
    console.log();
  }
  ngOnInit(): void {
    console.log('NxWelcomeComponent2 initialized');
  }
  handleChange(event: any) {
    console.log(event);
  }
}
