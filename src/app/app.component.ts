import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/scss/_styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular';
}
