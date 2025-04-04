import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@testnx/shared';
@Component({
  imports: [ RouterModule, JsonPipe ,SharedModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'shell';
}
