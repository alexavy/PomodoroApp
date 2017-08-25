import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerWidgetComponent } from './timer/timer-widget.component';
import { TasksComponent } from './tasks/tasks.component';

import TaskIconsComponent from './tasks/task-icons.component';

import QueuedOnlyPipe from './shared/pipes/queued-only.pipe';
import FormattedTimePipe from './shared/pipes/formatted-time.pipe';

import TaskTooltipDirective from './shared/directives/task-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimerWidgetComponent,
    TasksComponent,
    TaskIconsComponent,
    QueuedOnlyPipe,
    FormattedTimePipe,
    TaskTooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TimerWidgetComponent,
    TaskIconsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
