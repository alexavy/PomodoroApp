import { Component } from '@angular/core';
import { SHARED_PROVIDERS } from './shared/shared';

@Component({
  selector: 'pomodoro-app',
  providers: [SHARED_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
